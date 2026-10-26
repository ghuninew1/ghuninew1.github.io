import {
    Layers3,
    ArrowUpRight,
    Code2,
    Braces,
    Palette,
    Wind,
    Atom,
    Zap,
    GitBranch,
    Terminal,
    Server,
    Database,
    Network,
    MonitorCog,
    Container,
    Globe,
    ShieldCheck,
    CodeXml,
} from "lucide-react";
import { techStack } from "../../data/portfolioData";
import { Github } from "../../utils/github";
import { cx } from "../../utils/cx";
import { glassHover } from "../../utils/utils";


const skillIcons = {
    react: Atom,
    javascript: Braces,
    typescript: CodeXml,
    html: Globe,
    css: Palette,
    "tailwind css": Wind,
    vite: Zap,
    "node.js": Terminal,
    git: GitBranch,
    github: Github,
    linux: Terminal,
    docker: Container,
    cloudflare: ShieldCheck,
    networking: Network,
    server: Server,
    database: Database,
    "it support": MonitorCog,
};

function getSkillIcon(name) {
    const normalizedName = name.toLowerCase();

    const matchedKey = Object.keys(skillIcons).find((key) => normalizedName.includes(key));

    return matchedKey ? skillIcons[matchedKey] : Code2;
}

export default function Skills() {
    const categories = techStack.reduce((groups, tech) => {
        const category = tech.category || "Other";

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(tech);

        return groups;
    }, {});

    const categoryEntries = Object.entries(categories);

    return (
        <section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                            Skills & Technologies
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Tools I use to build and solve.
                        </h2>
                    </div>

                    <p className="max-w-xl leading-7 text-muted-foreground lg:justify-self-end">
                        เทคโนโลยีและเครื่องมือที่ใช้ในการพัฒนาเว็บ ดูแลระบบ IT และแก้ไขปัญหาในการทำงานจริง
                    </p>
                </div>

                <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
                    {categoryEntries.map(([category, skills], index) => (
                        <article
                            key={category}
                            className={cx(
                                "group flex min-w-0 flex-col rounded-3xl apple-glass apple-glass-interactive p-5 sm:p-7",
                                index === 0 && categoryEntries.length % 2 !== 0 ? "lg:col-span-2" : "",
                            )}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl apple-glass-subtle text-emerald-700 transition-transform duration-300 group-hover:scale-105 dark:text-emerald-400">
                                        <Layers3 className="size-5" />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                                            {category}
                                        </h3>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {skills.length} {skills.length === 1 ? "technology" : "technologies"}
                                        </p>
                                    </div>
                                </div>

                                <span className="text-sm font-medium tabular-nums text-muted-foreground/50">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {skills.map((tech) => {
                                    const Icon = getSkillIcon(tech.name);

                                    return (
                                        <div
                                            key={tech.name}
                                            className="flex min-w-0 items-start justify-between gap-3 rounded-2xl border border-border/50 bg-background/35 p-4 transition-colors duration-200 hover:border-emerald-500/30 hover:bg-background/60"
                                        >
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-sm font-semibold text-foreground">{tech.name}</h4>

                                                {tech.description && (
                                                    <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                                                        {tech.description}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl apple-glass-subtle text-emerald-700 transition-transform duration-300 group-hover:scale-105 dark:text-emerald-400">
                                                <Icon className="size-5" aria-hidden="true" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-6 flex flex-col gap-4 rounded-3xl apple-glass p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                    <div className="flex items-start gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl apple-glass-subtle text-emerald-700 dark:text-emerald-400">
                            <Code2 className="size-5" />
                        </div>

                        <div>
                            <h3 className="font-semibold text-foreground">Always learning, always improving.</h3>
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                เรียนรู้เทคโนโลยีใหม่และพัฒนาวิธีทำงานให้ดีขึ้นอย่างต่อเนื่อง
                            </p>
                        </div>
                    </div>

                    <a
                        href="#projects"
                        className={cx("inline-flex min-h-10 shrink-0 items-center gap-2 self-start rounded-full apple-glass-subtle px-4 py-2 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:self-center", glassHover)}
                    >
                        ดูผลงานของฉัน
                        <ArrowUpRight className="size-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
