#!/bin/bash

set -euo pipefail

OWNER="ghuninew1"
REPO="ghuninew1.github.io"

KEEP_COUNT=25
BATCH_SIZE=75

echo "============================================"
echo " GitHub Pages Deployment Cleanup"
echo " Repo: $OWNER/$REPO"
echo " Keep newest: $KEEP_COUNT"
echo " Delete up to: $BATCH_SIZE"
echo "============================================"
echo ""

echo "Fetching deployments..."

DEPLOYMENTS=$(
  gh api \
    --paginate \
    -H "Accept: application/vnd.github+json" \
    "/repos/$OWNER/$REPO/deployments?environment=github-pages&per_page=100" \
    --jq '.[] | [.id, .created_at] | @tsv'
)

TOTAL=$(printf '%s\n' "$DEPLOYMENTS" | grep -c . || true)

echo "Total deployments: $TOTAL"

if (( TOTAL <= KEEP_COUNT )); then
  echo "Nothing to delete."
  exit 0
fi

DELETE_LIST=$(
  printf '%s\n' "$DEPLOYMENTS" |
    tail -n +"$((KEEP_COUNT + 1))" |
    head -n "$BATCH_SIZE"
)

DELETE_COUNT=$(printf '%s\n' "$DELETE_LIST" | grep -c . || true)

if (( DELETE_COUNT == 0 )); then
  echo "Nothing to delete."
  exit 0
fi

echo "Deleting $DELETE_COUNT old deployments..."
echo ""

while IFS=$'\t' read -r DEPLOYMENT_ID CREATED_AT; do
  [[ -z "$DEPLOYMENT_ID" ]] && continue

  echo "Checking deployment $DEPLOYMENT_ID ($CREATED_AT)..."

  LATEST_STATUS=$(
    gh api \
      -H "Accept: application/vnd.github+json" \
      "/repos/$OWNER/$REPO/deployments/$DEPLOYMENT_ID/statuses?per_page=1" \
      --jq '.[0].state // "unknown"'
  )

  if [[ "$LATEST_STATUS" == "in_progress" || "$LATEST_STATUS" == "queued" || "$LATEST_STATUS" == "pending" ]]; then
    echo "  Skipped: deployment is $LATEST_STATUS"
    continue
  fi

  echo "  Marking inactive..."

  gh api \
    --method POST \
    -H "Accept: application/vnd.github+json" \
    "/repos/$OWNER/$REPO/deployments/$DEPLOYMENT_ID/statuses" \
    -f state="inactive" \
    >/dev/null

  echo "  Deleting..."

  gh api \
    --method DELETE \
    -H "Accept: application/vnd.github+json" \
    "/repos/$OWNER/$REPO/deployments/$DEPLOYMENT_ID"

  echo "  Deleted."
done <<< "$DELETE_LIST"

echo ""
echo "Cleanup complete."