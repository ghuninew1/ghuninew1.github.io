import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import HeroObject from "./HeroObject";

export default function HeroScene() {
    const container = useRef(null);
    const [visible, setVisible] = useState(true);
    const [pageVisible, setPageVisible] = useState(() => !document.hidden);
    const reduced = useReducedMotion();
    useEffect(() => {
        const element = container.current;
        if (!element || typeof IntersectionObserver === "undefined") return;
        const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
        observer.observe(element);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const update = () => setPageVisible(!document.hidden);
        document.addEventListener("visibilitychange", update);
        return () => document.removeEventListener("visibilitychange", update);
    }, []);
    return (
        <div ref={container} aria-hidden="true" className="pointer-events-none absolute -inset-8 z-10 sm:-inset-10">
            <Canvas dpr={[1, 1.5]} frameloop={reduced || !visible || !pageVisible ? "demand" : "always"} camera={{ position: [0, 0, 4], fov: 35 }} gl={{ alpha: true, antialias: true }}>
                <ambientLight intensity={1.4} />
                <directionalLight position={[3, 4, 5]} intensity={2} />
                <HeroObject reduced={reduced} />
            </Canvas>
        </div>
    );
}
