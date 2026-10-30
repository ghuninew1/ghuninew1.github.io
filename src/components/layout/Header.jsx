import { NavHighlight } from "./NavHighlight";
import { useNavHighlight } from "./useNavHighlight";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cx } from "../../utils/cx";
import ThemeToggle from "../../theme/ThemeToggle";
import { navigation } from "../../data/portfolioData";
import { Link } from "react-router-dom";
import { useActiveSection } from "../../hooks/useActiveSection";
import { Github } from "../../utils/github";
import Logo from "../../assets/logo.avif";
import LogoFull from "../../assets/GhuniNew_full_color.avif";
import GlassButton from "../GlassButton";

const Header = () => {
    const activeSection = useActiveSection();
    const { highlight, ...highlightEvents } = useNavHighlight();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Scroll direction detection for auto-hide / auto-show
    useEffect(() => {
        const handleScrollEvent = () => {
            const currentScrollY = window.scrollY;

            // Always keep header visible when near the top of the page
            if (currentScrollY <= 60) {
                setIsVisible(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            // If mobile menu is open, don't hide the header while scrolling
            if (isMobileMenuOpen) {
                lastScrollY.current = currentScrollY;
                return;
            }

            // Scroll threshold to prevent flickering on tiny shifts
            const diff = currentScrollY - lastScrollY.current;
            if (Math.abs(diff) < 8) return;

            if (diff > 0 && currentScrollY > 100) {
                // Scrolling down -> hide
                setIsVisible(false);
            } else if (diff < 0) {
                // Scrolling up -> show
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScrollEvent, { passive: true });
        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, [isMobileMenuOpen]);

    // Close mobile menu on Escape key press
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScroll = (event, targetId) => {
        event.preventDefault();

        document.getElementById(targetId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={cx(
                "sticky top-0 z-30",
                "apple-glass border-b",
                "transition-transform duration-300 ease-out",
                isVisible ? "translate-y-0" : "-translate-y-full shadow-none",
            )}
        >
            <div
                className={cx(
                    "mx-auto flex h-16 max-w-7xl items-center",
                    "justify-between gap-3 px-4 sm:px-8 lg:px-12",
                )}
            >
                {/* Logo */}
                <Link
                    to="#home"
                    aria-label="Ghuninew — Home"
                    onClick={(event) => handleScroll(event, "home")}
                    className={cx(
                        "group flex shrink-0 items-center gap-2.5",
                        "rounded-xl p-1.5 focus-visible:outline-none",
                        "focus-visible:ring-2 focus-visible:ring-ring",
                        "transition-all duration-200",
                        activeSection === "home" ? "text-emerald-600 dark:text-emerald-300" : "text-foreground/80 hover:text-emerald-600 dark:hover:text-emerald-400",
                    )}
                >
                    <span
                        className={cx(
                            "flex size-9 items-center justify-center rounded-xl md:hidden",
                            // "apple-glass-subtle text-violet-500 dark:text-violet-400",
                            // "transition-all duration-300 group-hover:scale-105 group-hover:border-violet-400/40",
                        )}
                    >
                        <img src={Logo} alt="GhuniNew" className="w-full"/>
                    </span>

                    <span className="text-sm font-semibold tracking-tight items-center hidden md:flex">
                        <img src={LogoFull} alt="GhuniNew"  height={20} className="w-full h-9 mr-2" />
                    </span>
                </Link>

                {/* Desktop Navigation Pill */}
                <nav aria-label="Main navigation" {...highlightEvents} className="relative hidden items-center gap-1 rounded-full px-3 py-1.5 apple-glass-subtle lg:flex">
                    <NavHighlight highlight={highlight} />
                    {navigation.map(({ label, href }) => {
                        const isActive = activeSection === href.slice(1);
                        return (
                            <Link
                                key={href}
                                data-nav-highlight
                                to={href}
                                aria-current={isActive ? "location" : undefined}
                                onClick={(event) => handleScroll(event, href.slice(1))}
                                className={cx(
                                    "relative rounded-full px-3.5 py-1 text-sm font-medium",
                                    "transition-all duration-200",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                    isActive
                                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shadow-sm"
                                        : "text-muted-foreground hover:text-foreground",
                                )}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Actions & Mobile Hamburger */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
                    <ThemeToggle />

                    <Link
                        to="https://github.com/ghuninew1"
                        target="_blank"
                        rel="noreferrer"
                        className={cx(
                            "inline-flex h-9 items-center gap-2 rounded-full",
                            "apple-glass-subtle px-3 sm:px-4",
                            "text-sm font-medium",
                            "transition-all duration-200",
                            "hover:scale-[1.02] hover:border-emerald-400/50 hover:text-emerald-600 dark:hover:text-emerald-400",
                            "focus-visible:outline-none",
                            "focus-visible:ring-2 focus-visible:ring-ring",
                        )}
                    >
                        <Github size={20} aria="true" />
                        <span className="hidden sm:inline">GitHub</span>
                    </Link>

                    {/* Mobile Liquid Glass Menu Toggle */}
                    <GlassButton
                        type="button"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        className={cx(
                            "flex size-9 items-center justify-center rounded-full lg:hidden",
                            "apple-glass-subtle text-foreground/80",
                            "transition-all duration-200 active:scale-95",
                            "hover:text-emerald-600 dark:hover:text-emerald-400",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        )}
                    >
                        {isMobileMenuOpen ? (
                            <X size={19} className="animate-zoomIn" aria-hidden="true" />
                        ) : (
                            <Menu size={19} aria-hidden="true" />
                        )}
                    </GlassButton>
                </div>
            </div>

            {/* Mobile Liquid Glass Navigation Panel */}
            <div
                className={cx(
                    "overflow-hidden transition-all duration-300 ease-out lg:hidden",
                    isMobileMenuOpen ? "max-h-96 opacity-100 py-3 border-t border-white/10" : "max-h-0 opacity-0 py-0 border-t-0 pointer-events-none",
                )}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-8">
                    <div className="rounded-2xl apple-glass-subtle p-2 space-y-1">
                        {navigation.map(({ label, href, icon: Icon }) => {
                            const isActive = activeSection === href.slice(1);
                            return (
                                <Link
                                    key={href}
                                    to={href}
                                    aria-current={isActive ? "location" : undefined}
                                    onClick={(event) => handleScroll(event, href.slice(1))}
                                    className={cx(
                                        "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium",
                                        "transition-all duration-200",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                        "active:scale-[0.98]",
                                        isActive
                                            ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shadow-sm border border-emerald-500/20"
                                            : "text-muted-foreground hover:bg-white/40 dark:hover:bg-white/10 hover:text-foreground",
                                    )}
                                >
                                    {Icon && <Icon size={17} aria-hidden="true" />}
                                    <span>{label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
