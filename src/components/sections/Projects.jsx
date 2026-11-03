import MotionReveal from "../motion/MotionReveal";
import { motion, useReducedMotion } from "motion/react";

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
                "relative isolate overflow-hidden rounded-xl border border-border/60 bg-zinc-950 p-3 shadow-inner sm:p-4",
                featured ? "aspect-[16/10] lg:aspect-[5/4]" : "aspect-[16/10]",
            )}
        >
            <div
                aria-hidden="true"
                className="-z-10 absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.2),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12),transparent_50%)] pointer-events-none"
            />

            <div className="flex bg-zinc-900/90 border border-white/10 rounded-xl h-full min-h-0 overflow-hidden">
                <aside className="hidden sm:block p-3 border-white/10 border-r w-1/4 shrink-0">
                    <div className="flex items-center gap-2 mb-5">
                        <div className="flex justify-center items-center bg-emerald-500/20 rounded-md size-6 text-emerald-300">
                            <FolderGit2 className="size-3.5" />
                        </div>
                        <div className="bg-white/40 rounded-full w-12 h-2" />
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
                                    className={cx("size-2 rounded-xl", item === 0 ? "bg-emerald-400" : "bg-white/20")}
                                />
                                <span
                                    className={cx(
                                        "h-1.5 rounded-full",
                                        item === 0 ? "w-12 bg-emerald-300/70" : "w-10 bg-white/15",
                                    )}
                                />
                            </div>
                        ))}
                    </div>
                </aside>

                <div className="flex flex-col flex-1 min-w-0">
                    <header className="flex justify-between items-center px-3 sm:px-4 border-white/10 border-b h-10 sm:h-12 shrink-0">
                        <div className="flex items-center gap-2">
                            <LayoutDashboard className="size-3.5 text-emerald-300" />
                            <span className="max-w-28 sm:max-w-40 font-medium text-[10px] text-white/70 sm:text-xs truncate">
                                {project.title}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-white/40">
                            <Search className="size-3.5" />
                            <Bell className="size-3.5" />
                            <Settings className="size-3.5" />
                        </div>
                    </header>

                    <div className="flex-1 p-3 sm:p-4 min-h-0 overflow-hidden">
                        <div className="flex justify-between items-center gap-2 mb-3 sm:mb-4">
                            <div className="space-y-2 min-w-0">
                                <div className="bg-white/70 rounded-full w-24 sm:w-32 h-2.5" />
                                <div className="bg-white/20 rounded-full w-32 sm:w-44 h-1.5" />
                            </div>
                            <div className="bg-emerald-500/80 rounded-md w-14 sm:w-20 h-6 shrink-0" />
                        </div>

                        <div className="gap-2 sm:gap-3 grid grid-cols-3 mb-3 sm:mb-4">
                            {[0, 1, 2].map((item) => (
                                <div
                                    key={item}
                                    className="bg-white/[0.04] p-2 sm:p-3 border border-white/10 rounded-lg"
                                >
                                    <div className="bg-white/25 mb-2 rounded-full w-8 sm:w-12 h-1.5" />
                                    <div
                                        className={cx(
                                            "h-3 rounded-full sm:h-4",
                                            item === 0 ? "w-8 bg-emerald-300/80 sm:w-12" : "w-6 bg-white/55 sm:w-9",
                                        )}
                                    />
                                    <div className="bg-white/10 mt-2 rounded-full w-full h-1" />
                                </div>
                            ))}
                        </div>

                        <div className="border border-white/10 rounded-lg overflow-hidden">
                            <div className="flex items-center gap-3 bg-white/[0.04] px-2 sm:px-3 border-white/10 border-b h-7 sm:h-8">
                                <div className="bg-white/30 rounded-full w-12 h-1.5" />
                                <div className="bg-white/20 rounded-full w-10 h-1.5" />
                                <div className="bg-white/20 ml-auto rounded-full w-8 h-1.5" />
                            </div>
                            {[0, 1, 2].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 px-2 sm:px-3 border-white/5 last:border-0 border-b h-8 sm:h-10"
                                >
                                    <span className="bg-white/10 rounded size-4 shrink-0" />
                                    <span
                                        className={cx(
                                            "h-1.5 rounded-full",
                                            item === 0 ? "w-20 bg-white/35" : "w-16 bg-white/15",
                                        )}
                                    />
                                    <span className="bg-emerald-400/15 ml-auto rounded-full w-10 sm:w-14 h-4" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"
            />
            <div className="right-5 sm:right-6 bottom-5 sm:bottom-6 absolute bg-black/70 backdrop-blur px-2.5 py-1 border border-white/10 rounded-full font-medium text-[9px] text-white/55 tracking-wide">
                CONCEPT PREVIEW
            </div>
        </div>
    );
}

function ProjectCard({ project, index }) {
    const featured = index === 0;
    const reduced = useReducedMotion();

    return (
        <motion.article
            variants={{ hidden: { opacity: 0, y: reduced ? 0 : 24 }, visible: { opacity: 1, y: 0 } }}
            whileHover={reduced ? undefined : { y: -5, scale: 1.01 }}
            transition={{ duration: 0.55 }}
            className={cx(
                "group flex min-w-0 flex-col overflow-hidden rounded-xl apple-glass apple-glass-interactive",
                featured && "lg:col-span-2",
            )}
        >
            {featured ? (
                <div className="items-center gap-6 sm:gap-8 grid lg:grid-cols-[1.05fr_0.95fr] p-4 sm:p-6 lg:p-8">
                    <div className="rounded-xl overflow-hidden">
                        <div className="motion-safe:group-hover:scale-[1.04] transition-transform duration-500">
                            <ProjectMockup project={project} featured />
                        </div>
                    </div>
                    <div className="flex flex-col py-2 sm:py-4 min-w-0">
                        <ProjectDetails project={project} index={index} featured />
                    </div>
                </div>
            ) : (
                <>
                    <div className="p-3 sm:p-4 pb-0 sm:pb-0">
                        <div className="rounded-xl overflow-hidden">
                            <div className="motion-safe:group-hover:scale-[1.04] transition-transform duration-500">
                                <ProjectMockup project={project} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 p-5 sm:p-6">
                        <ProjectDetails project={project} index={index} />
                    </div>
                </>
            )}
        </motion.article>
    );
}

function ProjectDetails({ project, index, featured = false }) {
    return (
        <>
            <div className="flex justify-between items-start gap-3">
                <div className="flex justify-center items-center rounded-xl size-10 font-semibold text-emerald-700 dark:text-emerald-400 text-sm group-hover:scale-105 transition-transform duration-300 shrink-0 apple-glass-subtle">
                    {String(index + 1).padStart(2, "0")}
                </div>
                <span className="px-3 py-1 rounded-full font-medium text-muted-foreground text-xs apple-glass-subtle">
                    {project.status}
                </span>
            </div>

            <p className="mt-5 font-semibold text-[11px] text-muted-foreground/80 uppercase tracking-[0.18em]">
                {project.category}
            </p>

            <h3
                className={cx(
                    "mt-2 font-semibold tracking-tight text-foreground transition-transform duration-300 motion-safe:group-hover:translate-x-[3px]",
                    featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
                )}
            >
                {project.title}
            </h3>

            <p className="mt-2 font-medium text-emerald-700 dark:text-emerald-400 text-sm leading-6">
                {project.subtitle}
            </p>

            <p className="mt-3 text-muted-foreground text-sm leading-7">{project.description}</p>

            <dl className="gap-4 grid sm:grid-cols-3 bg-background/35 mt-5 p-4 border border-border/60 rounded-xl">
                {[
                    ["Problem", project.problem],
                    ["Approach", project.approach],
                    ["Outcome", project.outcome],
                ].map(([label, value]) => (
                    <div key={label}>
                        <dt className="font-semibold text-[10px] text-emerald-700 dark:text-emerald-300 uppercase tracking-[0.14em]">
                            {label}
                        </dt>
                        <dd className="mt-2 text-muted-foreground text-sm leading-6">{value}</dd>
                    </div>
                ))}
            </dl>

            {project.highlights?.length > 0 && (
                <ul className="space-y-2 mt-5">
                    {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-muted-foreground text-sm leading-6">
                            <span className="bg-indigo-500 dark:bg-indigo-400 mt-2 rounded-full size-1.5 shrink-0" />
                            {highlight}
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 rounded-full font-medium text-foreground/80 text-xs apple-glass-subtle"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-auto pt-6">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cx(
                            "inline-flex min-h-10 items-center gap-2 rounded-full apple-glass-subtle px-4 py-2 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                            glassHover,
                        )}
                    >
                        <Github className="size-4" />
                        GitHub
                        <ArrowUpRight className="size-3.5 transition-transform motion-safe:group-hover:translate-x-[3px] duration-300" />
                    </a>
                )}

                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cx(
                            "inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                            glassHover,
                        )}
                    >
                        Live Demo
                        <ExternalLink className="size-4 transition-transform motion-safe:group-hover:translate-x-[3px] duration-300" />
                    </a>
                )}
            </div>
        </>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="px-5 sm:px-8 lg:px-12 py-20 lg:py-28 scroll-mt-24">
            <div className="mx-auto max-w-7xl">
                <MotionReveal className="mb-10 sm:mb-12 max-w-2xl">
                    <p className="mb-3 font-semibold text-emerald-700 dark:text-emerald-400 text-sm uppercase tracking-[0.2em]">
                        Selected Work
                    </p>
                    <h2 className="font-semibold text-foreground text-3xl sm:text-4xl tracking-tight">
                        Projects built to solve problems.
                    </h2>
                    <p className="mt-5 text-muted-foreground leading-8">
                        ตัวอย่างโปรเจกต์ที่สะท้อนความสนใจด้านการพัฒนาเว็บและการแก้ปัญหาด้วยเทคโนโลยี
                    </p>
                </MotionReveal>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ visible: { transition: { delayChildren: 0.12, staggerChildren: 0.06 } } }}
                    className="gap-5 sm:gap-6 grid lg:grid-cols-2"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
