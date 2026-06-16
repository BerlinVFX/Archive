import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useCursor } from "@/contexts/CursorContext";
import { useTheme } from "@/contexts/ThemeContext";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { setCursorType } = useCursor();
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = NAV_ITEMS.map((n) => n.id);
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : ""}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 h-16">
          <button
            onClick={() => scrollTo("hero")}
            onMouseEnter={() => setCursorType("click")}
            onMouseLeave={() => setCursorType("default")}
            className="font-serif font-bold text-lg tracking-tight"
          >
            BERLIN
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => setCursorType("click")}
                onMouseLeave={() => setCursorType("default")}
                className={`font-mono text-[11px] uppercase tracking-widest transition-colors ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="block h-px bg-foreground mt-0.5"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              onMouseEnter={() => setCursorType("click")}
              onMouseLeave={() => setCursorType("default")}
              className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              onMouseEnter={() => setCursorType("click")}
              onMouseLeave={() => setCursorType("default")}
              className="md:hidden flex flex-col gap-1.5 w-6"
            >
              <span className={`block h-px bg-foreground transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-background pt-16 flex flex-col justify-center px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => setCursorType("click")}
                onMouseLeave={() => setCursorType("default")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="py-5 border-b border-border text-left font-serif text-3xl font-bold hover:text-primary transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
