import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { CursorProvider } from "@/contexts/CursorContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Cursor from "@/components/Cursor";
import LoadingScreen from "@/components/LoadingScreen";
import CookieConsent from "@/components/CookieConsent";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";
import CommandMenu from "@/components/CommandMenu";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (loading || !accepted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading, accepted]);

  return (
    <main className="relative bg-background min-h-screen text-foreground">
      {/* Custom cursor — desktop only (hidden on mobile via CSS) */}
      <Cursor />

      {/* Loading screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Cookie consent */}
      <AnimatePresence>
        {!loading && !accepted && <CookieConsent onAccept={() => setAccepted(true)} />}
      </AnimatePresence>

      {/* Main content — shown after loading + cookie consent */}
      {!loading && accepted && (
        <>
          <ScrollProgress />
          <ThemeToggle />
          <CommandMenu />
          <Navbar />
          <div className="flex flex-col">
            <Hero />
            <About />
            <Work />
            <Services />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <Portfolio />
      </CursorProvider>
    </ThemeProvider>
  );
}
