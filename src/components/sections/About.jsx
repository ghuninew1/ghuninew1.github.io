import { ArrowUpRight, Code2, MonitorCog, Network, Quote } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { cx } from "../../utils/cx";

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

export default function About() {
    return (
        <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                            About Me
                        </p>

                        <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Technology with a purpose.
                        </h2>

                        <div className="mt-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-indigo-500" />
                            <span className="text-sm font-medium text-muted-foreground">
                                IT · Infrastructure · Development
                            </span>
                        </div>
                    </div>

                    <div className="rounded-3xl apple-glass p-6 sm:p-8">
                        <p className="text-base leading-8 text-muted-foreground sm:text-lg">{personalInfo.aboutText}</p>
                    </div>
                </div>

                <div className="mb-6 mt-14 flex flex-wrap items-end justify-between gap-4 sm:mt-16">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">What I Do</p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                            Areas of expertise
                        </h3>
                    </div>

                    <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                        ผสานทักษะด้านเทคนิคเข้ากับการแก้ปัญหาในการทำงานจริง
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {strengths.map(({ icon: Icon, number, title, description, tags }) => (
                        <article
                            key={title}
                            className="group flex h-full min-w-0 flex-col rounded-3xl apple-glass apple-glass-interactive p-6 sm:p-7"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex size-12 items-center justify-center rounded-2xl apple-glass-subtle text-indigo-500 transition-transform duration-300 group-hover:scale-105 dark:text-indigo-400">
                                    <Icon className="size-5" />
                                </div>

                                <span className="text-sm font-medium tabular-nums text-muted-foreground/50">
                                    {number}
                                </span>
                            </div>

                            <h4 className="mt-6 text-lg font-semibold tracking-tight text-foreground">{title}</h4>

                            <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{description}</p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="relative mt-6 overflow-hidden rounded-3xl apple-glass p-6 sm:p-9">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.1),transparent_55%)]"
                    />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl apple-glass-subtle text-indigo-500 dark:text-indigo-400">
                            <Quote className="size-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-lg font-medium leading-8 tracking-tight text-foreground sm:text-xl sm:leading-9">
                                “{personalInfo.quote}”
                            </p>

                            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
                                <span>{personalInfo.location}</span>
                                <span aria-hidden="true" className="size-1 rounded-full bg-indigo-400" />
                                <span>{personalInfo.interests.join(" / ")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <a
                    href="#contact"
                    className={cx(
                        "mt-7 inline-flex min-h-11 items-center gap-2 rounded-full apple-glass-subtle px-5 py-2.5 text-sm font-medium text-foreground",
                        "transition-colors hover:text-indigo-500 dark:hover:text-indigo-400",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
                    )}
                >
                    มาพูดคุยกัน
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
            </div>
        </section>
    );
}
