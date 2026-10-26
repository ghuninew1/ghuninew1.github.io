import { cloneElement, isValidElement } from "react";
import { cx } from "../utils/cx";
import { glassHover } from "../utils/utils";

/** Shared native button with the app's Liquid Glass hover treatment. */
const GlassButton = ({ className, onPointerMove, asChild = false, children, ...props }) => {
    const glassPositionOverride = className?.split(/\s+/).includes("absolute") ? "!absolute" : null;
    const buttonClassName = className;

    const handlePointerMove = (event) => {
        if (event.pointerType === "mouse") {
            const bounds = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
            event.currentTarget.style.setProperty("--my", `${event.clientY - bounds.top}px`);
        }

        onPointerMove?.(event);
    };

    const mergedClassName = cx("glass-button", glassHover, glassPositionOverride, buttonClassName);

    if (asChild) {
        const child = children;
        if (!isValidElement(child)) return null;
        return cloneElement(child, {
            ...child.props,
            ...props,
            onPointerMove: handlePointerMove,
            className: cx(mergedClassName, child.props.className),
        });
    }

    return <button {...props} onPointerMove={handlePointerMove} className={mergedClassName}>{children}</button>;
};

export default GlassButton;
