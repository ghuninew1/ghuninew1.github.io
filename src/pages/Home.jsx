
import FadeInSection from "../components/common/FadeInSection";
import ProfileImage from "../assets/profile.avif";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Timeline from "../components/sections/Timeline";
import Contact from "../components/sections/Contact";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Github } from "../utils/github";
import GlassButton from "../components/GlassButton";

export default function Home() {
    return (
        <main className="overflow-hidden w-full">
            <FadeInSection>
                <div
                    className="relative isolate scroll-mt-24 overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:py-32"
                    id="home"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_30%,rgba(99,102,241,0.12),transparent_45%),radial-gradient(ellipse_at_80%_50%,rgba(59,130,246,0.08),transparent_40%)]"
                    />
                    <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                        <div>
                            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full apple-glass-subtle px-4 py-2 text-xs font-medium text-foreground/80 shadow-sm">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50 motion-reduce:animate-none" />
                                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                                </span>
                                IT Support · IT Technician · Web Developer
                            </div>
                            <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground">
                                Hello, I&apos;m
                            </p>
                            <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
                                GhuniNew<span className="text-emerald-500">.</span>
                            </h1>
                            <p className="mt-6 max-w-2xl text-xl leading-8 text-foreground/80 sm:text-2xl">
                                {personalInfo.headline}
                            </p>
                            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                                {personalInfo.bio}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <GlassButton asChild>
                                <Link
                                    to="#projects"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                                >
                                    View Projects <ArrowDown className="size-4" />
                                </Link>
                                </GlassButton>
                                <GlassButton asChild>
                                <Link
                                    to="#contact"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="inline-flex min-h-12 items-center gap-2 rounded-full apple-glass-subtle px-6 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                                >
                                    Contact Me <ArrowUpRight className="size-4" />
                                </Link>
                                </GlassButton>
                                <a
                                    href={personalInfo.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GhuniNew on GitHub"
                                    className="inline-flex size-12 items-center justify-center rounded-full apple-glass-subtle text-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                                >
                                    <Github className="size-5" />
                                </a>
                            </div>
                            <p className="mt-5 text-xs text-muted-foreground">
                                Currently building practical tools for everyday IT work.
                            </p>
                        </div>
                        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                            <div
                                aria-hidden="true"
                                className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-violet-500/20 blur-3xl"
                            />
                            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 p-3 shadow-2xl shadow-indigo-950/10 backdrop-blur-xl">
                                <img
                                    src={ProfileImage}
                                    alt="GhuniNew"
                                    className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                                />
                                <div className="absolute inset-x-3 bottom-3 rounded-b-[1.5rem] bg-gradient-to-t from-black/75 via-black/35 to-transparent px-6 pb-6 pt-16 text-white">
                                    <p className="text-lg font-semibold">GhuniNew</p>
                                    <p className="mt-1 text-sm text-white/75">
                                        Connecting IT infrastructure with modern web solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <Projects />
            </FadeInSection>

            <FadeInSection>
                <About />
            </FadeInSection>

            <FadeInSection>
                <Skills />
            </FadeInSection>

            <FadeInSection>
                <Timeline />
            </FadeInSection>

            <FadeInSection>
                <Contact />
            </FadeInSection>
        </main>
    );
}
