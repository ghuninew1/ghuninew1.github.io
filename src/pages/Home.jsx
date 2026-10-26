
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
        <main className="w-full overflow-hidden">
            <FadeInSection>
                <div
                    className="isolate relative px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28 xl:py-32 overflow-hidden scroll-mt-24"
                    id="home"
                >
                    <div
                        aria-hidden="true"
                        className="-z-10 absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(99,102,241,0.12),transparent_45%),radial-gradient(ellipse_at_80%_50%,rgba(59,130,246,0.08),transparent_40%)] pointer-events-none"
                    />
                    <div className="items-center gap-10 lg:gap-16 grid lg:grid-cols-[1.15fr_0.85fr] mx-auto max-w-7xl">
                        <div>
                            <div className="inline-flex items-center gap-2.5 shadow-sm mb-7 px-4 py-2 rounded-full font-medium text-foreground/80 text-xs apple-glass-subtle">
                                <span className="relative flex size-2">
                                    <span className="inline-flex absolute bg-emerald-400 opacity-50 rounded-full size-full animate-ping motion-reduce:animate-none" />
                                    <span className="inline-flex relative bg-emerald-500 rounded-full size-2" />
                                </span>
                                IT Support · IT Technician · Web Developer
                            </div>
                            <p className="mb-3 font-medium text-muted-foreground text-sm tracking-wide">
                                Hello, I&apos;m
                            </p>
                            <h1 className="font-semibold text-foreground text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
                                GhuniNew<span className="text-emerald-500">.</span>
                            </h1>
                            <p className="mt-6 max-w-2xl text-foreground/80 text-xl sm:text-2xl leading-8">
                                {personalInfo.headline}
                            </p>
                            <p className="mt-4 max-w-xl text-muted-foreground text-base leading-7">
                                {personalInfo.bio}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 mt-8">
                                <GlassButton asChild>
                                <Link
                                    to="#projects"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="inline-flex items-center gap-2 bg-foreground px-6 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 min-h-12 font-semibold text-background text-sm"
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
                                    className="inline-flex items-center gap-2 px-6 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 min-h-12 font-semibold text-foreground text-sm apple-glass-subtle"
                                >
                                    Contact Me <ArrowUpRight className="size-4" />
                                </Link>
                                </GlassButton>
                                <a
                                    href={personalInfo.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GhuniNew on GitHub"
                                    className="inline-flex justify-center items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 size-12 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors apple-glass-subtle"
                                >
                                    <Github className="size-5" />
                                </a>
                            </div>
                            <p className="mt-5 text-muted-foreground text-xs">
                                Currently building practical tools for everyday IT work.
                            </p>
                        </div>
                        <div className="relative mx-auto w-full lg:max-w-none max-w-sm">
                            <div
                                aria-hidden="true"
                                className="absolute inset-8 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-violet-500/20 blur-3xl rounded-full"
                            />
                            <div className="relative bg-card/70 shadow-2xl shadow-indigo-950/10 backdrop-blur-xl p-3 border border-border/60 rounded-[2rem] overflow-hidden">
                                <img
                                    src={ProfileImage}
                                    alt="GhuniNew"
                                    className="rounded-[1.5rem] w-full object-cover aspect-[4/5]"
                                />
                                <div className="bottom-3 absolute inset-x-3 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-6 pt-16 pb-6 rounded-b-[1.5rem] text-white">
                                    <p className="font-semibold text-lg">GhuniNew</p>
                                    <p className="mt-1 text-white/75 text-sm">
                                        Connecting IT infrastructure with modern web solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <About />
            </FadeInSection>

            <FadeInSection>
                <Skills />
            </FadeInSection>

            <FadeInSection>
                <Projects />
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
