
import { lazy, Suspense, Component } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import MotionReveal from "../components/motion/MotionReveal";

const HeroScene = lazy(() => import("../components/three/HeroScene"));
class SceneBoundary extends Component {
    state = { failed: false };
    static getDerivedStateFromError() { return { failed: true }; }
    render() { return this.state.failed ? null : this.props.children; }
}
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
    const reduced = useReducedMotion();
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const tiltX = useMotionValue(0);
    const tiltY = useMotionValue(0);
    const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24 });
    const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24 });
    const rotateX = useSpring(tiltX, { stiffness: 120, damping: 22 });
    const rotateY = useSpring(tiltY, { stiffness: 120, damping: 22 });
    const glowX = useTransform(smoothX, [-1, 1], [-4, 4]);
    const glowY = useTransform(smoothY, [-1, 1], [-4, 4]);
    const sceneX = useTransform(smoothX, [-1, 1], [-8, 8]);
    const sceneY = useTransform(smoothY, [-1, 1], [-8, 8]);
    const cardX = useTransform(smoothX, [-1, 1], [-4, 4]);
    const cardY = useTransform(smoothY, [-1, 1], [-4, 4]);
    const canMove = (event) => !reduced && event.pointerType === "mouse" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reset = () => { pointerX.set(0); pointerY.set(0); tiltX.set(0); tiltY.set(0); };
    const entrance = (delay, y = 20) => ({
        initial: reduced ? false : { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
    });
    return (
        <main className="w-full overflow-hidden">
                <div
                    className="isolate relative px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28 xl:py-32 overflow-hidden scroll-mt-24"
                    id="home"
                    onPointerMove={(event) => {
                        if (!canMove(event)) return;
                        const bounds = event.currentTarget.getBoundingClientRect();
                        pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
                        pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
                    }}
                    onPointerLeave={reset}
                >
                    <motion.div
                        aria-hidden="true"
                        style={{ x: glowX, y: glowY }}
                        animate={reduced ? undefined : { opacity: [0.85, 1, 0.85] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="-z-10 absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(99,102,241,0.12),transparent_45%),radial-gradient(ellipse_at_80%_50%,rgba(59,130,246,0.08),transparent_40%)] pointer-events-none"
                    />
                    <div className="items-center gap-10 lg:gap-16 grid lg:grid-cols-[1.15fr_0.85fr] mx-auto max-w-7xl">
                        <div>
                            <motion.div {...entrance(0)} className="inline-flex items-center gap-2.5 shadow-sm mb-7 px-4 py-2 rounded-full font-medium text-foreground/80 text-xs apple-glass-subtle">
                                <span className="relative flex size-2">
                                    <span className="inline-flex absolute bg-emerald-400 opacity-50 rounded-full size-full animate-ping motion-reduce:animate-none" />
                                    <span className="inline-flex relative bg-emerald-500 rounded-full size-2" />
                                </span>
                                IT Support · IT Technician · Web Developer
                            </motion.div>
                            <motion.p {...entrance(0.08)} className="mb-3 font-medium text-muted-foreground text-sm tracking-wide">
                                Hello, I&apos;m
                            </motion.p>
                            <motion.h1 {...entrance(0.14, 24)} className="font-semibold text-foreground text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
                                GhuniNew<motion.span className="text-emerald-500" initial={false} animate={reduced ? undefined : { textShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 16px rgba(16,185,129,0.45)", "0 0 0px rgba(16,185,129,0)"] }} transition={{ duration: 1.4, delay: 0.2 }}>.</motion.span>
                            </motion.h1>
                            <motion.p {...entrance(0.22)} className="mt-6 max-w-2xl text-foreground/80 text-xl sm:text-2xl leading-8">
                                {personalInfo.headline}
                            </motion.p>
                            <motion.p {...entrance(0.3)} className="mt-4 max-w-xl text-muted-foreground text-base leading-7">
                                {personalInfo.bio}
                            </motion.p>
                            <motion.div {...entrance(0.38)} className="flex flex-wrap items-center gap-3 mt-8">
                                <motion.div whileHover={reduced ? undefined : { scale: 1.03, y: -2 }} whileTap={reduced ? undefined : { scale: 0.98 }}><GlassButton asChild>
                                <Link
                                    to="#projects"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        document.getElementById("projects")?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" });
                                    }}
                                    className="inline-flex items-center gap-2 bg-foreground px-6 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 min-h-12 font-semibold text-background text-sm"
                                >
                                    View Projects <ArrowDown className="size-4" />
                                </Link>
                                </GlassButton></motion.div>
                                <motion.div whileHover={reduced ? undefined : { scale: 1.03, y: -2 }} whileTap={reduced ? undefined : { scale: 0.98 }}><GlassButton asChild>
                                <Link
                                    to="#contact"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        document.getElementById("contact")?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" });
                                    }}
                                    className="inline-flex items-center gap-2 px-6 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 min-h-12 font-semibold text-foreground text-sm apple-glass-subtle"
                                >
                                    Contact Me <ArrowUpRight className="size-4" />
                                </Link>
                                </GlassButton></motion.div>
                                <a
                                    href={personalInfo.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GhuniNew on GitHub"
                                    className="inline-flex justify-center items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 size-12 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors apple-glass-subtle"
                                >
                                    <Github className="size-5" />
                                </a>
                            </motion.div>
                            <motion.p {...entrance(0.45)} className="mt-5 text-muted-foreground text-xs">
                                Currently building practical tools for everyday IT work.
                            </motion.p>
                        </div>
                        <div className="relative mx-auto w-full lg:max-w-none max-w-sm">
                            <motion.div style={{ x: sceneX, y: sceneY }} className="pointer-events-none absolute inset-0 z-10"><SceneBoundary><Suspense fallback={null}><HeroScene /></Suspense></SceneBoundary></motion.div>
                            <div
                                aria-hidden="true"
                                className="absolute inset-8 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-violet-500/20 blur-3xl rounded-full"
                            />
                            <div style={{ perspective: 1000 }}>
                            <div className="profile-frame-float">
                            <motion.div
                                style={{ x: cardX, y: cardY, rotateX, rotateY, transformStyle: "preserve-3d" }}
                                onPointerMove={(event) => {
                                    if (!canMove(event)) return;
                                    const bounds = event.currentTarget.getBoundingClientRect();
                                    tiltY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 6);
                                    tiltX.set(-((event.clientY - bounds.top) / bounds.height - 0.5) * 6);
                                }}
                                onPointerLeave={() => { tiltX.set(0); tiltY.set(0); }}
                                className="relative rounded-[2rem]">
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[2rem] border border-emerald-500/20 bg-slate-900/65 shadow-xl shadow-slate-950/20" style={{ transform: "translate3d(6px, 8px, -10px)" }} />
                                <div className="rounded-[2rem] border border-border/60 bg-card/90 p-3 shadow-2xl shadow-indigo-950/10" style={{ transformStyle: "preserve-3d" }}>
                                <img
                                    src={ProfileImage}
                                    alt="GhuniNew"
                                    className="rounded-[1.5rem] w-full object-cover aspect-[4/5]"
                                    style={{ transform: "translateZ(10px)" }}
                                />
                                <div style={{ transform: "translateZ(16px)" }} className="bottom-3 absolute inset-x-3 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-6 pt-16 pb-6 rounded-b-[1.5rem] text-white">
                                    <p className="font-semibold text-lg">GhuniNew</p>
                                    <p className="mt-1 text-white/75 text-sm">
                                        Connecting IT infrastructure with modern web solutions.
                                    </p>
                                </div>
                                </div>
                            </motion.div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            <About />

            <Skills />

            <Projects />

            <Timeline />

            <MotionReveal distance={16}>
                <Contact />
            </MotionReveal>
        </main>
    );
}
