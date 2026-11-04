import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import MotionReveal from "../motion/MotionReveal";
import { ArrowUpRight, Code2, MonitorCog, Network, Quote } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { cx } from "../../utils/cx";
import { glassHover } from "../../utils/utils";

const strengths = [
    {
        icon: Code2,
        number: "01",
        title: "Web Development",
        description:
            "สร้างเว็บแอปพลิเคชันที่ใช้งานง่าย รองรับหลายขนาดหน้าจอ และให้ความสำคัญกับโครงสร้างโค้ดที่ดูแลต่อได้",
        tags: ["React", "Tailwind CSS", "Responsive UI"],
    },
    {
        icon: MonitorCog,
        number: "02",
        title: "IT Support",
        description:
            "วิเคราะห์และแก้ไขปัญหาคอมพิวเตอร์ ซอฟต์แวร์ และระบบภายในองค์กร โดยมุ่งเน้นสาเหตุและวิธีแก้ไขที่เหมาะสม",
        tags: ["Troubleshooting", "Hardware", "Software"],
    },
    {
        icon: Network,
        number: "03",
        title: "IT Infrastructure",
        description:
            "สนใจระบบเครือข่าย เซิร์ฟเวอร์ และการเชื่อมต่อระหว่างระบบ เพื่อให้โครงสร้างพื้นฐาน IT ทำงานได้อย่างมีประสิทธิภาพ",
        tags: ["Networking", "Servers", "Infrastructure"],
    },
];

const desktopQuery = "(min-width: 1024px)";
function subscribeDesktop(callback) {
    const query = window.matchMedia(desktopQuery);
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
}
function getDesktop() {
    return window.matchMedia(desktopQuery).matches;
}
function getServerDesktop() {
    return false;
}

export default function About() {
    const desktop = useSyncExternalStore(subscribeDesktop, getDesktop, getServerDesktop);
    const reduced = useReducedMotion();
    const reveal = (direction) => ({
        initial: reduced ? false : desktop ? { opacity: 0, x: direction * 24 } : { opacity: 0, y: 20 },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { amount: 0.2 },
        transition: { duration: 0.55, delay: reduced ? 0 : direction > 0 ? 0.08 : 0, ease: [0.22, 1, 0.36, 1] },
    });
    return (
        <section id="about" className="px-5 sm:px-8 lg:px-12 py-20 lg:py-28 scroll-mt-24">
            <div className="mx-auto max-w-7xl">
                <div className="lg:items-end gap-8 lg:gap-16 grid lg:grid-cols-[0.8fr_1.2fr]">
                    <motion.div {...reveal(-1)}>
                        <p className="mb-3 font-semibold text-emerald-700 dark:text-emerald-400 text-sm uppercase tracking-[0.2em]">
                            About Me
                        </p>

                        <h2 className="max-w-lg font-semibold text-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                            Technology with a purpose.
                        </h2>

                        <div className="flex items-center gap-3 mt-6">
                            <span className="bg-emerald-500 w-10 h-px" />
                            <span className="font-medium text-muted-foreground text-sm">
                                IT · Infrastructure · Development
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        {...reveal(1)}
                        whileHover={reduced ? undefined : { y: -3, scale: 1.005 }}
                        className="p-6 sm:p-8 rounded-xl apple-glass"
                    >
                        <p className="text-muted-foreground text-base sm:text-lg leading-8">{personalInfo.aboutText}</p>
                    </motion.div>
                </div>

                <MotionReveal className="flex flex-wrap justify-between items-end gap-4 mt-14 sm:mt-16 mb-6">
                    <div>
                        <p className="font-semibold text-emerald-700 dark:text-emerald-400 text-xs uppercase tracking-[0.18em]">
                            What I Do
                        </p>
                        <h3 className="mt-2 font-semibold text-foreground text-2xl sm:text-3xl tracking-tight">
                            Areas of expertise
                        </h3>
                    </div>

                    <p className="max-w-sm text-muted-foreground text-sm leading-6">
                        ผสานทักษะด้านเทคนิคเข้ากับการแก้ปัญหาในการทำงานจริง
                    </p>
                </MotionReveal>

                <MotionReveal>
                    <div className="gap-4 grid md:grid-cols-3">
                        {strengths.map(({ icon: Icon, number, title, description, tags }) => (
                            <article
                                key={title}
                                className="group flex flex-col p-6 sm:p-7 rounded-xl min-w-0 h-full apple-glass apple-glass-interactive"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex justify-center items-center rounded-xl size-12 text-emerald-700 dark:text-emerald-400 motion-safe:group-hover:scale-105 transition-transform duration-300 apple-glass-subtle">
                                        <Icon className="size-5" />
                                    </div>

                                    <span className="font-medium tabular-nums text-muted-foreground/50 text-sm">
                                        {number}
                                    </span>
                                </div>

                                <h4 className="mt-6 font-semibold text-foreground text-lg tracking-tight">{title}</h4>

                                <p className="flex-1 mt-3 text-muted-foreground text-sm leading-7">{description}</p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-background/40 px-2.5 py-1 border border-border/60 rounded-full font-medium text-[11px] text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </MotionReveal>
                <MotionReveal>
                    <div className="relative mt-6 p-6 sm:p-9 rounded-xl overflow-hidden apple-glass">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.1),transparent_55%)] pointer-events-none"
                        />

                        <div className="relative flex sm:flex-row flex-col sm:items-start gap-5 sm:gap-6">
                            <div className="flex justify-center items-center rounded-xl size-11 text-emerald-700 dark:text-emerald-400 shrink-0 apple-glass-subtle">
                                <Quote className="size-5" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground text-lg sm:text-xl leading-8 sm:leading-9 tracking-tight">
                                    “{personalInfo.quote}”
                                </p>

                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-5 text-muted-foreground text-sm">
                                    <span>{personalInfo.location}</span>
                                    <span aria-hidden="true" className="bg-emerald-500 rounded-full size-1" />
                                    <span>{personalInfo.interests.join(" / ")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </MotionReveal>
                <a
                    href="#contact"
                    className={cx(
                        "mt-7 inline-flex min-h-11 items-center gap-2 rounded-full apple-glass-subtle px-5 py-2.5 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                        glassHover,
                    )}
                >
                    มาพูดคุยกัน
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
            </div>
        </section>
    );
}
