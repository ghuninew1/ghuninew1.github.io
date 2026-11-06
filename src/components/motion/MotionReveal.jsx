import { motion, useReducedMotion } from "motion/react";
import { revealDistance, revealTransition } from "./revealMotion";

export default function MotionReveal({ children, className }) {
    const reduced = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={reduced ? false : { opacity: 0, y: revealDistance }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.15 }}
            transition={revealTransition}
        >
            {children}
        </motion.div>
    );
}
