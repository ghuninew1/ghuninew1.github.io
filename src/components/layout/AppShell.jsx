import { useEffect, useState } from "react";
import { cx } from "../../utils/cx";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppShell = ({ children }) => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
        if (!isMobileNavOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMobileNavOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMobileNavOpen]);

    return (
        <div
            className={cx(
                "relative isolate min-h-screen overflow-clip",
                "bg-background text-foreground antialiased",
                "selection:bg-emerald-500/30 selection:text-foreground",
            )}
        >
            {/* Ambient background fluid mesh glow for Apple liquid glass refraction */}
            <div
                aria-hidden="true"
                className={cx(
                    "pointer-events-none fixed -left-40 top-10 -z-10",
                    "size-[500px] rounded-full bg-gradient-to-tr from-emerald-600/20 to-lime-500/10 blur-[120px]",
                    "opacity-75 dark:opacity-40 animate-pulse",
                )}
            />

            <div
                aria-hidden="true"
                className={cx(
                    "pointer-events-none fixed -right-40 top-1/3 -z-10",
                    "size-[550px] rounded-full bg-gradient-to-bl from-emerald-600/15 via-green-500/10 to-lime-400/10 blur-[140px]",
                    "opacity-75 dark:opacity-35",
                )}
            />

            <div
                aria-hidden="true"
                className={cx(
                    "pointer-events-none fixed left-1/4 bottom-10 -z-10",
                    "size-[450px] rounded-full bg-gradient-to-tr from-lime-500/12 to-emerald-400/10 blur-[130px]",
                    "opacity-60 dark:opacity-25",
                )}
            />

            <Header />

            <Sidebar
                isMobileOpen={isMobileNavOpen}
                onMobileOpen={() => setIsMobileNavOpen(true)}
                onMobileClose={() => setIsMobileNavOpen(false)}
            />

            <main id="main-content" className="min-w-0 min-h-0 flex-1 overflow-hidden">
                {children}
            </main>

            <footer className={cx("border-t border-border/50", "px-5 py-6 sm:px-8 lg:px-12")}>
                <div
                    className={cx(
                        "mx-auto flex max-w-7xl flex-col gap-3 items-center",
                        "text-xs text-muted-foreground",
                        "md:flex-row md:items-center md:justify-between justify-center ",
                    )}
                >
                    <p>© {new Date().getFullYear()} GhuniNew. All rights reserved.</p>

                    <p className="flex items-center gap-2">
                        Built with React &amp; Tailwind CSS
                        <span aria-hidden="true" className="text-emerald-500">
                            ◆
                        </span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default AppShell;
