import type { ReactNode } from "react";
import Footer from "@/core/components/footer";
import Header from "@/core/components/header";

export default function App({ children } : { children: ReactNode }) {
    const NO_HEADERS_PAGES = ["/registration"];
    const currentPage = window.location.pathname;
    
    return (
        <>
            {!(NO_HEADERS_PAGES.includes(currentPage)) && <Header /> }
                <main className="min-h-screen">
                    {children}
                </main>
            {!(NO_HEADERS_PAGES.includes(currentPage)) && <Footer /> }
        </>
    )
}
