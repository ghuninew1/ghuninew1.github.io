import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowDownRight, CircleDot, CalendarDays, Sparkles } from "lucide-react";
import { timeline } from "../../data/portfolioData";
import { cx } from "../../utils/cx";
import useObserver from "../../hooks/useObserver";

function TimelineItem({ item, index }) {
    const reduced = useReducedMotion();
    return (
        <motion.article
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.55 }}
            className="group relative flex gap-4 sm:gap-7"
        >
            <div className="z-10 relative flex flex-col items-center shrink-0">
                <motion.div
                    variants={reduced ? undefined : { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 } }}
                    transition={{ duration: 0.4 }}
                    className="relative flex size-10 items-center justify-center rounded-full border border-emerald-500/30 bg-background text-emerald-700 shadow-lg shadow-emerald-500/10 sm:size-12 dark:text-emerald-400"
                >
                    <span
                        className={cx(
                            "absolute inset-0 rounded-full bg-emerald-500/15 transition-transform duration-700",
                            "scale-100 opacity-100",
                        )}
                    />
                    <CircleDot
                        className={cx("relative size-5 transition-transform duration-500 sm:size-6", "rotate-90")}
                    />
                </motion.div>
            </div>

            <div className="flex-1 pb-8 sm:pb-10 min-w-0">
                <div
                    className={cx(
                        "relative overflow-hidden rounded-sm apple-glass apple-glass-interactive p-5 sm:p-7",
                        "transition-all duration-300 ease-out",
                        "motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.005] hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-950/10",
                        "motion-reduce:transform-none motion-reduce:transition-none",
                    )}
                >
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.09),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    />

                    <div className="relative">
                        <div className="flex flex-wrap justify-between items-center gap-3">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-wider apple-glass-subtle">
                                <Sparkles className="size-3.5" />
                                {item.type}
                            </span>

                            <span className="flex items-center gap-1.5 font-medium text-muted-foreground/60 text-xs">
                                <CalendarDays className="size-3.5" />
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>

                        <h3 className="mt-5 font-semibold text-foreground text-lg sm:text-xl tracking-tight">
                            {item.titleTh}
                        </h3>

                        <p className="mt-1 font-medium text-emerald-700 dark:text-emerald-400 text-sm">{item.title}</p>

                        <div className="bg-gradient-to-r from-emerald-500/30 to-transparent my-4 via-border/60 w-full h-px" />

                        <p className="text-muted-foreground text-sm leading-7">{item.description}</p>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

function TimelineHeading({ children }) {
    const reduced = useReducedMotion();
    return (
        <motion.div initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="mb-12 sm:mb-14 max-w-2xl">
            {children}
        </motion.div>
    );
}

export default function Timeline() {
    const ref = useRef(null);
    const visible = useObserver(ref, "0px 0px -65% 0px", 0);

    return (
        <section id="timeline" className="px-5 sm:px-8 lg:px-12 py-20 lg:py-28 scroll-mt-24">
            <div className="mx-auto max-w-7xl">
                <TimelineHeading>
                    <p className="mb-3 font-semibold text-emerald-700 dark:text-emerald-400 text-sm uppercase tracking-[0.2em]">
                        My Journey
                    </p>

                    <h2 className="font-semibold text-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                        Learning by building.
                    </h2>

                    <p className="mt-5 text-muted-foreground leading-8">
                        เส้นทางการพัฒนาทักษะและการสร้างโปรเจกต์อย่างต่อเนื่อง
                    </p>
                </TimelineHeading>

                <div ref={ref} className="relative">
                    <div
                        aria-hidden="true"
                        className="top-5 bottom-10 left-[31px] sm:left-[35px] absolute bg-border/50 w-px overflow-hidden"
                    >
                        <div
                            className={cx(
                                "h-full w-full origin-top bg-gradient-to-b from-emerald-500 via-lime-400/70 to-emerald-500/40 transition-transform duration-700 ease-out motion-reduce:scale-y-100 motion-reduce:transition-none",
                                visible ? "scale-y-100" : "scale-y-0",
                            )}
                        />
                    </div>
                    <div className="relative flex flex-col gap-8 sm:gap-10 pl-3">
                        {timeline.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-2 pl-1">
                    <div className="flex justify-center items-center rounded-full size-9 text-indigo-400 shrink-0 apple-glass-subtle">
                        <ArrowDownRight className="size-4" />
                    </div>

                    <p className="text-muted-foreground text-sm leading-6">ยังคงเรียนรู้ ทดลอง และพัฒนาต่อไป</p>
                </div>
            </div>
        </section>
    );
}
