import { motion, useReducedMotion } from "motion/react";
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
    const reduced = useReducedMotion();
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
        <section id="skills" className="px-5 sm:px-8 lg:px-12 py-20 lg:py-28 scroll-mt-24">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                    className="lg:items-end gap-6 grid lg:grid-cols-[1fr_0.7fr]"
                >
                    <div className="max-w-2xl">
                        <p className="mb-3 font-semibold text-emerald-700 dark:text-emerald-400 text-sm uppercase tracking-[0.2em]">
                            Skills & Technologies
                        </p>

                        <h2 className="font-semibold text-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                            Tools I use to build and solve.
                        </h2>
                    </div>

                    <p className="lg:justify-self-end max-w-xl text-muted-foreground leading-7">
                        เทคโนโลยีและเครื่องมือที่ใช้ในการพัฒนาเว็บ ดูแลระบบ IT และแก้ไขปัญหาในการทำงานจริง
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.1 }}
                    variants={{ visible: { transition: { delayChildren: 0.12, staggerChildren: 0.06 } } }}
                    className="gap-5 grid lg:grid-cols-2 mt-10 sm:mt-12"
                >
                    {categoryEntries.map(([category, skills], index) => (
                        <motion.article
                            key={category}
                            variants={{ hidden: { opacity: 0, y: reduced ? 0 : 24 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={reduced ? undefined : { y: -5, scale: 1.01 }}
                            transition={{ duration: 0.55 }}
                            className={cx(
                                "group flex min-w-0 flex-col rounded-xl apple-glass apple-glass-interactive p-5 sm:p-7",
                                index === 0 && categoryEntries.length % 2 !== 0 ? "lg:col-span-2" : "",
                            )}
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center rounded-xl size-11 text-emerald-700 dark:text-emerald-400 motion-safe:group-hover:scale-105 transition-transform duration-300 shrink-0 apple-glass-subtle">
                                        <Layers3 className="size-5" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-foreground text-lg tracking-tight">
                                            {category}
                                        </h3>
                                        <p className="mt-1 text-muted-foreground text-xs">
                                            {skills.length} {skills.length === 1 ? "technology" : "technologies"}
                                        </p>
                                    </div>
                                </div>

                                <span className="font-medium tabular-nums text-muted-foreground/50 text-sm">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="gap-3 grid sm:grid-cols-2 mt-6">
                                {skills.map((tech) => {
                                    const Icon = getSkillIcon(tech.name);

                                    return (
                                        <div
                                            key={tech.name}
                                            className="flex justify-between items-start gap-3 bg-background/35 hover:bg-background/60 p-4 border border-border/50 hover:border-emerald-500/30 rounded-xl min-w-0 transition-colors duration-200"
                                        >
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-foreground dark:group-hover:text-emerald-400 group-hover:text-emerald-700 text-sm transition-colors duration-200">
                                                    {tech.name}
                                                </h4>

                                                {tech.description && (
                                                    <p className="mt-1.5 text-muted-foreground text-xs leading-5">
                                                        {tech.description}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="flex justify-center items-center rounded-xl size-10 text-emerald-700 dark:text-emerald-400 motion-safe:group-hover:scale-105 transition-transform duration-300 shrink-0 apple-glass-subtle">
                                                <Icon className="size-5" aria-hidden="true" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4 mt-6 p-5 sm:p-7 rounded-xl apple-glass">
                    <div className="flex items-start gap-3">
                        <div className="flex justify-center items-center rounded-xl size-10 text-emerald-700 dark:text-emerald-400 shrink-0 apple-glass-subtle">
                            <Code2 className="size-5" />
                        </div>

                        <div>
                            <h3 className="font-semibold text-foreground">Always learning, always improving.</h3>
                            <p className="mt-1 text-muted-foreground text-sm leading-6">
                                เรียนรู้เทคโนโลยีใหม่และพัฒนาวิธีทำงานให้ดีขึ้นอย่างต่อเนื่อง
                            </p>
                        </div>
                    </div>

                    <a
                        href="#projects"
                        className={cx(
                            "inline-flex min-h-10 shrink-0 items-center gap-2 self-start rounded-full apple-glass-subtle px-4 py-2 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:self-center",
                            glassHover,
                        )}
                    >
                        ดูผลงานของฉัน
                        <ArrowUpRight className="size-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
