import { motion } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";

interface CookieConsentProps {
  onAccept: () => void;
}

export default function CookieConsent({ onAccept }: CookieConsentProps) {
  const { setCursorType } = useCursor();

  const handleLeave = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9980] bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="w-full max-w-md bg-card border border-border p-8 md:p-10"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-5">
            Classified Creative Material
          </p>
          <h2 className="font-serif text-2xl font-bold mb-4">
            Access Notice
          </h2>
          <p className="font-mono text-xs text-muted-foreground leading-relaxed">
            You are about to access the internal portfolio of BERLIN. This site
            contains highly intentional design, undocumented technical
            experiments, and proprietary aesthetics.
          </p>
        </div>
        <p className="font-mono text-[10px] text-muted-foreground/60 mb-6">
          By proceeding, you acknowledge that you are ready for a non-standard
          web experience. All rights reserved. © {new Date().getFullYear()}
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleLeave}
            onMouseEnter={() => setCursorType("click")}
            onMouseLeave={() => setCursorType("default")}
            className="flex-1 py-3 border border-border font-mono text-xs uppercase tracking-widest text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
          >
            Leave Website
          </button>
          <button
            onClick={onAccept}
            onMouseEnter={() => setCursorType("click")}
            onMouseLeave={() => setCursorType("default")}
            className="flex-1 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors"
          >
            I Agree
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
