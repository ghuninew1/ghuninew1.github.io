import { useEffect, useState } from "react";

export function useObserver(ref, rootMargin = "0px", threshold = 0) {
    const [visible, setVisible] = useState(() => typeof IntersectionObserver === "undefined");

    useEffect(() => {
        const element = ref?.current;

        if (!element || typeof IntersectionObserver === "undefined") {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold,
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [ref, rootMargin, threshold]);

    return visible;
}

export default useObserver;
