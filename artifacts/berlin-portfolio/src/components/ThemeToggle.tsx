import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useCursor } from "@/contexts/CursorContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { setCursorType } = useCursor();

  return (
    <motion.button
      data-testid="theme-toggle"
      onClick={toggleTheme}
      onMouseEnter={() => setCursorType("click")}
      onMouseLeave={() => setCursorType("default")}
      className="fixed top-8 left-8 z-40 flex items-center gap-2.5 px-3.5 py-2 bg-background/80 backdrop-blur-xl border border-border shadow-lg hover:border-primary transition-colors"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 45, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25 }}
        >
          {theme === "dark" ? (
            <Sun className="w-3.5 h-3.5 text-primary" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-primary" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </motion.button>
  );
}
