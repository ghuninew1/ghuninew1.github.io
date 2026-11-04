import { motion, useReducedMotion } from "motion/react";

export default function MotionReveal({ children, className, distance = 24, direction = "y", delay = 0 }) {
    const reduced = useReducedMotion();
    return (
        <motion.div
            className={className}
            initial={reduced ? false : { opacity: 0, [direction]: distance }}
            whileInView={{ opacity: 1, [direction]: 0 }}
            viewport={{ amount: 0.15 }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
