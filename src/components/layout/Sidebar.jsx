import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cx } from "../../utils/cx";
import { navigation } from "../../data/portfolioData";
import { Link } from "react-router-dom";
import { useActiveSection } from "../../hooks/useActiveSection";

const Sidebar = ({ isMobileOpen, onMobileOpen, onMobileClose }) => {
    const activeSection = useActiveSection();

    useEffect(() => {
        if (!isMobileOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMobileOpen]);

    const handleScroll = (event, targetId) => {
        event.preventDefault();

        document.getElementById(targetId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        onMobileClose();
    };

    return (
        <>
            {/* Desktop floating navigation */}
            <aside
                aria-label="Section navigation"
                className={cx(
                    "fixed left-4 top-1/2 z-40 hidden",
                    "-translate-y-1/2 lg:block xl:left-6 animate-fadeInLeft",
                )}
            >
                <nav
                    aria-label="Portfolio sections"
                    className={cx(
                        "flex flex-col items-center gap-2 rounded-2xl p-2",
                        "apple-glass border shadow-2xl",
                    )}
                >
                    {navigation.map(({ label, href, icon: Icon }) => {
                        const isActive = activeSection === href.slice(1);
                        return (
                            <Link
                                key={href}
                                to={href}
                                title={label}
                                onClick={(event) => handleScroll(event, href.slice(1))}
                                aria-current={isActive ? "location" : undefined}
                                className={cx(
                                    "group relative flex size-11 items-center",
                                    "justify-center rounded-xl",
                                    "transition-all duration-200",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                                    "active:scale-90",
                                    isActive
                                        ? "bg-white/80 dark:bg-white/20 text-violet-600 dark:text-violet-300 shadow-sm border border-white/40 dark:border-white/10"
                                        : "text-muted-foreground hover:bg-white/40 dark:hover:bg-white/10 hover:text-foreground",
                                )}
                            >
                                <Icon size={19} aria-hidden="true" />

                                <span
                                    className={cx(
                                        "pointer-events-none absolute left-full ml-3",
                                        "whitespace-nowrap rounded-xl px-3 py-1.5",
                                        "apple-glass text-xs font-medium",
                                        "text-foreground shadow-xl",
                                        "opacity-0 translate-x-1",
                                        "transition-all duration-200",
                                        "group-hover:translate-x-0 group-hover:opacity-100",
                                        "group-focus-visible:translate-x-0",
                                        "group-focus-visible:opacity-100",
                                    )}
                                >
                                    {label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Mobile floating menu button */}
            <div className="fixed bottom-5 left-4 z-50 lg:hidden animate-fadeInUp">
                <button
                    type="button"
                    onClick={onMobileOpen}
                    aria-label="Open section navigation"
                    aria-expanded={isMobileOpen}
                    aria-controls="mobile-section-navigation"
                    className={cx(
                        "flex size-12 items-center justify-center rounded-2xl",
                        "apple-glass text-foreground",
                        "shadow-xl transition-all duration-200",
                        "hover:scale-105 active:scale-95",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                    )}
                >
                    {isMobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
                </button>
            </div>

            {/* Mobile navigation overlay */}
            <div
                className={cx(
                    "fixed inset-0 z-40 lg:hidden animate-fadeInUp",
                    "transition-[visibility] duration-200",
                    isMobileOpen ? "visible" : "invisible",
                )}
                aria-hidden={!isMobileOpen}
                inert={!isMobileOpen}
            >
                <button
                    type="button"
                    aria-label="Close section navigation"
                    tabIndex={isMobileOpen ? 0 : -1}
                    onClick={onMobileClose}
                    className={cx(
                        "absolute inset-0 bg-black/40 backdrop-blur-sm",
                        "transition-opacity duration-200",
                        isMobileOpen ? "opacity-100" : "opacity-0",
                    )}
                />

                <nav
                    id="mobile-section-navigation"
                    aria-label="Portfolio sections"
                    className={cx(
                        "absolute bottom-20 left-4 w-64 max-w-[calc(100vw-2rem)]",
                        "rounded-3xl apple-glass p-3 shadow-2xl",
                        "transition-all duration-200 ease-out",
                        isMobileOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0",
                    )}
                >
                    <p className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Navigate
                    </p>

                    <div className="space-y-1">
                        {navigation.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={href}
                                to={href}
                                onClick={(event) => handleScroll(event, href.slice(1))}
                                tabIndex={isMobileOpen ? 0 : -1}
                                aria-current={activeSection === href.slice(1) ? "location" : undefined}
                                aria-label={label}
                                className={cx(
                                    "flex min-h-11 items-center gap-3 rounded-xl px-3",
                                    "text-sm text-muted-foreground",
                                    "transition-colors duration-200",
                                    "hover:bg-violet-500/10 hover:text-violet-400",
                                    "focus-visible:outline-none",
                                    "focus-visible:ring-2 focus-visible:ring-violet-400",
                                    "active:scale-95",
                                    "transition-colors duration-200",
                                    activeSection === href.slice(1)
                                        ? "text-violet-500"
                                        : "text-gray-500 hover:text-violet-400",
                                )}
                            >
                                <Icon size={18} aria-hidden="true" />
                                <span>{label}</span>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
