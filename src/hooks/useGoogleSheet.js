import { useEffect, useState } from "react";

const SHEET_ID = "YOUR_SPREADSHEET_ID";
const API_KEY = "YOUR_API_KEY";
const SHEET_NAME = "Projects";

export function useGoogleSheet() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function fetchSheet() {
            try {
                setLoading(true);
                setError("");

                const range = encodeURIComponent(`${SHEET_NAME}!A1:D`);

                const url =
                    `https://sheets.googleapis.com/v4/spreadsheets/` + `${SHEET_ID}/values/${range}?key=${API_KEY}`;

                const response = await fetch(url, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error("ไม่สามารถดึงข้อมูล Google Sheets ได้");
                }

                const result = await response.json();
                const [headers, ...rows] = result.values ?? [];

                const items = rows
                    .filter((row) => row.some((value) => value?.trim()))
                    .map((row) =>
                        Object.fromEntries(headers.map((header, index) => [header.trim(), row[index] ?? ""])),
                    );

                setData(items);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchSheet();

        return () => controller.abort();
    }, []);

    return { data, loading, error };
}
