import { useRef } from "react";
import { ArrowDownRight, CircleDot, CalendarDays, Sparkles } from "lucide-react";
import { timeline } from "../../data/portfolioData";
import { cx } from "../../utils/cx";
import useObserver from "../../hooks/useObserver";

function TimelineItem({ item, index }) {
    const ref = useRef(null);
    const isVisible = useObserver(ref, "0px 0px -80px 0px", 0.1);

    return (
        <article
            ref={ref}
            className={cx(
                "group relative flex gap-4 sm:gap-7",
                "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="relative z-10 flex shrink-0 flex-col items-center">
                <div
                    className={cx(
                        "relative flex size-10 items-center justify-center rounded-full border border-indigo-400/30 bg-background text-indigo-500 shadow-lg shadow-indigo-500/10 transition-all duration-500 sm:size-12 dark:text-indigo-400",
                        isVisible && "scale-100 border-indigo-400/60",
                    )}
                >
                    <span
                        className={cx(
                            "absolute inset-0 rounded-full bg-indigo-500/15 transition-transform duration-700",
                            isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0",
                        )}
                    />
                    <CircleDot
                        className={cx(
                            "relative size-5 transition-transform duration-500 sm:size-6",
                            isVisible && "rotate-90",
                        )}
                    />
                </div>
            </div>

            <div className="min-w-0 flex-1 pb-8 sm:pb-10">
                <div
                    className={cx(
                        "relative overflow-hidden rounded-3xl apple-glass apple-glass-interactive p-5 sm:p-7",
                        "transition-all duration-300 ease-out",
                        "hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-950/10",
                        "motion-reduce:transform-none motion-reduce:transition-none",
                    )}
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.09),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div className="relative">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full apple-glass-subtle px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                                <Sparkles className="size-3.5" />
                                {item.type}
                            </span>

                            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/60">
                                <CalendarDays className="size-3.5" />
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>

                        <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                            {item.titleTh}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-indigo-500 dark:text-indigo-400">{item.title}</p>

                        <div className="my-4 h-px w-full bg-gradient-to-r from-indigo-500/30 via-border/60 to-transparent" />

                        <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function Timeline() {
    const lineRef = useRef(null);
    const isVisible = useObserver(lineRef, "0px 0px -100px 0px", 0.1);

    return (
        <section id="timeline" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 max-w-2xl sm:mb-14">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">My Journey</p>

                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Learning by building.
                    </h2>

                    <p className="mt-5 leading-8 text-muted-foreground">
                        เส้นทางการพัฒนาทักษะและการสร้างโปรเจกต์อย่างต่อเนื่อง
                    </p>
                </div>

                <div className="relative">
                    <div
                        aria-hidden="true"
                        className="absolute bottom-10 left-[19px] top-5 w-px overflow-hidden bg-border/50 sm:left-[23px]"
                    >
                        <div
                            ref={lineRef}
                            className="h-full w-full origin-top bg-gradient-to-b from-indigo-500 via-violet-400/70 to-indigo-500/0 transition-transform duration-1000 ease-out motion-reduce:transition-none"
                            style={{
                                transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                            }}
                        />
                    </div>

                    <div className="space-y-0">
                        {timeline.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>

                <div className="mt-2 flex items-center gap-3 pl-1">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full apple-glass-subtle text-indigo-400">
                        <ArrowDownRight className="size-4" />
                    </div>

                    <p className="text-sm leading-6 text-muted-foreground">ยังคงเรียนรู้ ทดลอง และพัฒนาต่อไป</p>
                </div>
            </div>
        </section>
    );
}
