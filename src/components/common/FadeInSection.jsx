import { useRef } from "react";
import useObserver from "../../hooks/useObserver";

export default function FadeInSection({
    children,
    className = "",
    rootMargin = "0px 0px -100px 0px",
    threshold = 0.15,
    distance = 48, // pixels to translate
}) {
    const ref = useRef(null);
    const isVisible = useObserver(ref, rootMargin, threshold);

    return (
        <div
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0px)" : `translateY(${distance}px)`,
                transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "opacity, transform",
            }}
            className={className}
        >
            {children}
        </div>
    );
}
