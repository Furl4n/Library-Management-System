import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({children}: AppLayoutProps){
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    );
}