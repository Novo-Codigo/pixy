import type { ReactNode } from "react";
import Footer from "./core/components/footer";
import Header from "./core/components/header";

export default function App({ children } : { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}
