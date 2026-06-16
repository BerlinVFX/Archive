import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useCursor } from "@/contexts/CursorContext";

export default function Hero() {
  const { setCursorType } = useCursor();

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-32 pb-12"
    >
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-primary">●</span>&nbsp;&nbsp;Available for new projects
          </motion.p>

          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-serif text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.9] tracking-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              I build
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-serif text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.9] tracking-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              websites that
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              className="font-serif text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.9] tracking-tight italic"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              people{" "}
              <span className="not-italic text-muted-foreground/50">remember.</span>
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <motion.p
              className="font-mono text-xs text-muted-foreground leading-relaxed max-w-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              I engineer digital experiences that bridge the gap between rigorous
              technical architecture and editorial magazine design.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <button
                id="button-view-work"
                onClick={scrollToWork}
                onMouseEnter={() => setCursorType("click")}
                onMouseLeave={() => setCursorType("default")}
                className="px-7 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors"
              >
                View Archive
              </button>
              <button
                id="button-about"
                onClick={scrollToAbout}
                onMouseEnter={() => setCursorType("click")}
                onMouseLeave={() => setCursorType("default")}
                className="px-7 py-3.5 border border-border font-mono text-xs uppercase tracking-widest text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
              >
                Read Profile
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex items-center gap-3 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <ArrowDown className="w-3.5 h-3.5 text-muted-foreground animate-bounce" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
      </motion.div>

      <div className="absolute bottom-12 right-6 md:right-16 lg:right-24 hidden lg:flex flex-col items-end gap-6">
        {[
          { value: "6+", label: "Projects" },
          { value: "4", label: "Years" },
          { value: "∞", label: "Coffee" },
        ].map(({ value, label }, i) => (
          <motion.div
            key={label}
            className="text-right"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
          >
            <p className="font-serif text-2xl font-bold">{value}</p>
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
