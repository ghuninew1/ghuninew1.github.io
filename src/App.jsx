
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

    return (
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
    );
}

export default App;
