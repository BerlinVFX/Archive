import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useCursor } from "@/contexts/CursorContext";

export default function Hero() {
  const { setCursorType } = useCursor();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Code snippet card — top right */}
      <motion.div
        className="absolute top-28 right-[8%] w-48 h-32 sm:w-72 sm:h-48 border border-border bg-card/60 backdrop-blur-md rounded-lg shadow-2xl flex flex-col overflow-hidden"
        initial={{ y: 60, opacity: 0, rotate: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 5 }}
        transition={{ delay: 0.5, duration: 1.2, type: "spring", damping: 20 }}
        style={{ zIndex: 0 }}
      >
        <div className="h-8 border-b border-border flex items-center px-3 gap-2 bg-muted/50 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-primary/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="ml-2 flex-1 h-4 rounded bg-border/50" />
        </div>
        <div className="flex-1 p-4 font-mono text-[10px] text-muted-foreground leading-relaxed overflow-hidden">
          <span className="text-primary">function</span>{" "}
          <span className="text-secondary">initPortfolio</span>
          {"() {\n"}
          {"  "}
          <span className="text-primary">const</span>
          {" vibes = [\n"}
          {"    "}
          {"'editorial', 'terminal',\n"}
          {"    "}
          {"'bauhaus'\n"}
          {"  "}
          {"];\n"}
          {"  "}
          <span className="text-primary">return</span>
          {" fuse(vibes);\n"}
          {"}"}
        </div>
      </motion.div>

      {/* Design mockup card — bottom left */}
      <motion.div
        className="absolute bottom-36 left-[8%] w-32 h-40 sm:w-44 sm:h-56 shadow-2xl block bg-card border border-border backdrop-blur-md p-4"
        style={{ zIndex: 0 }}
        initial={{ y: -40, opacity: 0, rotate: 0 }}
        animate={{ y: 0, opacity: 1, rotate: -10 }}
        transition={{ delay: 0.8, duration: 1.2, type: "spring", damping: 20 }}
      >
        <div className="space-y-2">
          <div className="w-16 h-1.5 bg-primary/60 rounded-full" />
          <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
        </div>
        <div className="w-full h-24 bg-muted/50 border border-border flex items-center justify-center relative overflow-hidden mt-4">
          <div className="w-8 h-8 rounded-full border-2 border-primary/60 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
        <div className="space-y-1.5 mt-3">
          <div className="w-full h-1 bg-muted-foreground/20 rounded-full" />
          <div className="w-3/4 h-1 bg-muted-foreground/15 rounded-full" />
          <div className="w-1/2 h-1 bg-muted-foreground/10 rounded-full" />
        </div>
      </motion.div>

      {/* Main hero content */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        {/* Available badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-card/60 backdrop-blur-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Available for new projects
          </span>
        </motion.div>

        {/* BERLIN. heading */}
        <motion.h1
          className="text-7xl md:text-[9rem] lg:text-[11rem] font-serif font-bold tracking-tighter leading-none mb-6 text-foreground"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          BERLIN
          <span className="text-primary">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          I engineer digital experiences that bridge the gap between rigorous
          technical architecture and editorial magazine design.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-10"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <button
            data-testid="button-view-work"
            className="px-8 py-4 bg-foreground text-background font-mono text-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300"
            onMouseEnter={() => setCursorType("click")}
            onMouseLeave={() => setCursorType("default")}
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Archive
          </button>
          <button
            data-testid="button-about"
            className="px-8 py-4 border border-border bg-card/50 backdrop-blur-sm text-foreground font-mono text-sm uppercase tracking-widest hover:bg-muted transition-colors duration-300"
            onMouseEnter={() => setCursorType("click")}
            onMouseLeave={() => setCursorType("default")}
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Read Profile
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 opacity-50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
