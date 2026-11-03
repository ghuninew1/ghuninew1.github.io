import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function HeroObject({ reduced }) {
    const primary = useRef();
    const accent = useRef();
    const ring = useRef();
    const pointer = useRef({ x: 0, y: 0 });
    const { viewport } = useThree();
    const size = Math.min(viewport.width, viewport.height);

    useEffect(() => {
        if (reduced || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        const move = (event) => {
            pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
            pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
        };
        const reset = () => { pointer.current.x = 0; pointer.current.y = 0; };
        window.addEventListener("pointermove", move, { passive: true });
        window.addEventListener("pointerleave", reset);
        return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerleave", reset); };
    }, [reduced]);

    useFrame((state, delta) => {
        if (reduced || !primary.current || !accent.current || !ring.current) return;
        const elapsed = state.clock.elapsedTime;
        const step = Math.min(delta, 0.05);
        primary.current.rotation.y += step * 0.16;
        primary.current.rotation.x += (-pointer.current.y * 0.12 - primary.current.rotation.x) * 0.025;
        primary.current.position.y = viewport.height * 0.35 + Math.sin(elapsed * 0.6) * size * 0.012;
        accent.current.rotation.y -= step * 0.1;
        accent.current.rotation.z += step * 0.06;
        accent.current.position.y = -viewport.height * 0.2 + Math.sin(elapsed * 0.48 + 1.7) * size * 0.01;
        ring.current.rotation.z += step * 0.08;
        ring.current.position.y = -viewport.height * 0.38 + Math.sin(elapsed * 0.4 + 3) * size * 0.008;
    });

    return (
        <>
            <mesh ref={primary} position={[viewport.width * 0.37, viewport.height * 0.35, 0]} rotation={[0.2, 0.4, 0]}>
                <icosahedronGeometry args={[size * 0.16, 1]} />
                <meshPhysicalMaterial color="#79cbb6" metalness={0.35} roughness={0.3} transparent opacity={0.58} />
            </mesh>
            <mesh ref={accent} position={[-viewport.width * 0.39, -viewport.height * 0.2, 0]} rotation={[0.3, 0.5, 0]}>
                <octahedronGeometry args={[size * 0.12, 0]} />
                <meshBasicMaterial color="#84bdb9" wireframe transparent opacity={0.48} />
            </mesh>
            <mesh ref={ring} position={[viewport.width * 0.39, -viewport.height * 0.38, 0]} rotation={[0.8, 0.3, 0]}>
                <torusGeometry args={[size * 0.075, size * 0.009, 6, 28]} />
                <meshStandardMaterial color="#77b9bb" metalness={0.4} roughness={0.35} transparent opacity={0.65} />
            </mesh>
        </>
    );
}
