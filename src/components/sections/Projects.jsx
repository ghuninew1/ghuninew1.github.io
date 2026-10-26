
import { ArrowUpRight, ExternalLink, FolderGit2, LayoutDashboard, Search, Bell, Settings } from "lucide-react";
import { projects } from "../../data/portfolioData";
import { cx } from "../../utils/cx";
import { glassHover } from "../../utils/utils";
import { Github } from "../../utils/github";

function ProjectMockup({ project, featured = false }) {
    return (
        <div
            aria-label={`Mockup preview for ${project.title}`}
            className={cx(
                "relative isolate overflow-hidden rounded-2xl border border-border/60 bg-zinc-950 p-3 shadow-inner sm:p-4",
                featured ? "aspect-[16/10] lg:aspect-[5/4]" : "aspect-[16/10]",
            )}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.2),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12),transparent_50%)]"
            />

            <div className="flex h-full min-h-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/90">
                <aside className="hidden w-1/4 shrink-0 border-r border-white/10 p-3 sm:block">
                    <div className="mb-5 flex items-center gap-2">
                        <div className="flex size-6 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-300">
                            <FolderGit2 className="size-3.5" />
                        </div>
                        <div className="h-2 w-12 rounded-full bg-white/40" />
                    </div>

                    <div className="space-y-2.5">
                        {[0, 1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className={cx(
                                    "flex items-center gap-2 rounded-md px-2 py-2",
                                    item === 0 && "bg-emerald-500/15",
                                )}
                            >
                                <span
                                    className={cx(
                                        "size-2 rounded-sm",
                                        item === 0
                                            ? "bg-emerald-400"
                                            : "bg-white/20",
                                    )}
                                />
                                <span
                                    className={cx(
                                        "h-1.5 rounded-full",
                                        item === 0
                                            ? "w-12 bg-emerald-300/70"
                                            : "w-10 bg-white/15",
                                    )}
                                />
                            </div>
                        ))}
                    </div>
                </aside>

                <div className="flex min-w-0 flex-1 flex-col">
                    <header className="flex h-10 shrink-0 items-center justify-between border-b border-white/10 px-3 sm:h-12 sm:px-4">
                        <div className="flex items-center gap-2">
                            <LayoutDashboard className="size-3.5 text-emerald-300" />
                            <span className="max-w-28 truncate text-[10px] font-medium text-white/70 sm:max-w-40 sm:text-xs">
                                {project.title}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-white/40">
                            <Search className="size-3.5" />
                            <Bell className="size-3.5" />
                            <Settings className="size-3.5" />
                        </div>
                    </header>

                    <div className="min-h-0 flex-1 overflow-hidden p-3 sm:p-4">
                        <div className="mb-3 flex items-center justify-between gap-2 sm:mb-4">
                            <div className="min-w-0 space-y-2">
                                <div className="h-2.5 w-24 rounded-full bg-white/70 sm:w-32" />
                                <div className="h-1.5 w-32 rounded-full bg-white/20 sm:w-44" />
                            </div>
                            <div className="h-6 w-14 shrink-0 rounded-md bg-emerald-500/80 sm:w-20" />
                        </div>

                        <div className="mb-3 grid grid-cols-3 gap-2 sm:mb-4 sm:gap-3">
                            {[0, 1, 2].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-lg border border-white/10 bg-white/[0.04] p-2 sm:p-3"
                                >
                                    <div className="mb-2 h-1.5 w-8 rounded-full bg-white/25 sm:w-12" />
                                    <div
                                        className={cx(
                                            "h-3 rounded-full sm:h-4",
                                            item === 0
                                                ? "w-8 bg-emerald-300/80 sm:w-12"
                                                : "w-6 bg-white/55 sm:w-9",
                                        )}
                                    />
                                    <div className="mt-2 h-1 w-full rounded-full bg-white/10" />
                                </div>
                            ))}
                        </div>

                        <div className="overflow-hidden rounded-lg border border-white/10">
                            <div className="flex h-7 items-center gap-3 border-b border-white/10 bg-white/[0.04] px-2 sm:h-8 sm:px-3">
                                <div className="h-1.5 w-12 rounded-full bg-white/30" />
                                <div className="h-1.5 w-10 rounded-full bg-white/20" />
                                <div className="ml-auto h-1.5 w-8 rounded-full bg-white/20" />
                            </div>
                            {[0, 1, 2].map((item) => (
                                <div
                                    key={item}
                                    className="flex h-8 items-center gap-3 border-b border-white/5 px-2 last:border-0 sm:h-10 sm:px-3"
                                >
                                    <span className="size-4 shrink-0 rounded bg-white/10" />
                                    <span
                                        className={cx(
                                            "h-1.5 rounded-full",
                                            item === 0 ? "w-20 bg-white/35" : "w-16 bg-white/15",
                                        )}
                                    />
                                    <span className="ml-auto h-4 w-10 rounded-full bg-emerald-400/15 sm:w-14" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-black/70 px-2.5 py-1 text-[9px] font-medium tracking-wide text-white/55 backdrop-blur sm:bottom-6 sm:right-6">
                CONCEPT PREVIEW
            </div>
        </div>
    );
}

function ProjectCard({ project, index }) {
    const featured = index === 0;

    return (
        <article
            className={cx(
                "group flex min-w-0 flex-col overflow-hidden rounded-3xl apple-glass apple-glass-interactive",
                featured && "lg:col-span-2",
            )}
        >
            {featured ? (
                <div className="grid items-center gap-6 p-4 sm:gap-8 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
                    <ProjectMockup project={project} featured />
                    <div className="flex min-w-0 flex-col py-2 sm:py-4">
                        <ProjectDetails
                            project={project}
                            index={index}
                            featured
                        />
                    </div>
                </div>
            ) : (
                <>
                    <div className="p-3 pb-0 sm:p-4 sm:pb-0">
                        <ProjectMockup project={project} />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <ProjectDetails project={project} index={index} />
                    </div>
                </>
            )}
        </article>
    );
}

function ProjectDetails({ project, index, featured = false }) {
    return (
        <>
            <div className="flex items-start justify-between gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl apple-glass-subtle text-sm font-semibold text-emerald-700 transition-transform duration-300 group-hover:scale-105 dark:text-emerald-400">
                    {String(index + 1).padStart(2, "0")}
                </div>
                <span className="rounded-full apple-glass-subtle px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.status}
                </span>
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                {project.category}
            </p>

            <h3
                className={cx(
                    "mt-2 font-semibold tracking-tight text-foreground",
                    featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
                )}
            >
                {project.title}
            </h3>

            <p className="mt-2 text-sm font-medium leading-6 text-emerald-700 dark:text-emerald-400">
                {project.subtitle}
            </p>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {project.description}
            </p>

            <dl className="mt-5 grid gap-4 rounded-2xl border border-border/60 bg-background/35 p-4 sm:grid-cols-3">
                {[
                    ["Problem", project.problem],
                    ["Approach", project.approach],
                    ["Outcome", project.outcome],
                ].map(([label, value]) => (
                    <div key={label}>
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                            {label}
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                            {value}
                        </dd>
                    </div>
                ))}
            </dl>

            {project.highlights?.length > 0 && (
                <ul className="mt-5 space-y-2">
                    {project.highlights.map((highlight) => (
                        <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                        >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                            {highlight}
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full apple-glass-subtle px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cx("inline-flex min-h-10 items-center gap-2 rounded-full apple-glass-subtle px-4 py-2 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400", glassHover)}
                    >
                        <Github className="size-4" />
                        GitHub
                        <ArrowUpRight className="size-3.5" />
                    </a>
                )}

                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cx("inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400", glassHover)}
                    >
                        Live Demo
                        <ExternalLink className="size-4" />
                    </a>
                )}
            </div>
        </>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 max-w-2xl sm:mb-12">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                        Selected Work
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        Projects built to solve problems.
                    </h2>
                    <p className="mt-5 leading-8 text-muted-foreground">
                        ตัวอย่างโปรเจกต์ที่สะท้อนความสนใจด้านการพัฒนาเว็บและการแก้ปัญหาด้วยเทคโนโลยี
                    </p>
                </div>

                <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
