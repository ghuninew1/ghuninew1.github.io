
import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "lucide-react";
import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home";


function NotFoundPage() {
    return (
        <div className="mx-auto max-w-7xl">
            <Loader className="animate-spin" />
            <h2 className="text-2xl font-semibold tracking-tight">Page not found</h2>
            <p className="mt-2 text-sm text-muted-foreground">The page you are looking for does not exist.</p>
        </div>
    );
}


function App() {
    const progressRef = useRef(null);

    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
        };
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        return () => {
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <>
        <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
        <Routes>
            <Route
                path="/"
                element={
                    <AppShell>
                        <Home  />
                    </AppShell>
                }
            />

            <Route
                path="*"
                element={
                    <AppShell>
                        <NotFoundPage />
                    </AppShell>
                }
            />
        </Routes>
        </>
    );
}

export default App;
