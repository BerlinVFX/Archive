import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";

interface CookieConsentProps {
  onAccept: () => void;
}

export default function CookieConsent({ onAccept }: CookieConsentProps) {
  const [visible, setVisible] = useState(true);
  const { setCursorType } = useCursor();

  const accept = () => {
    setVisible(false);
    setTimeout(onAccept, 500);
  };

  const leave = () => {
    window.location.href = "https://google.com";
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="relative w-full max-w-md bg-card border border-border shadow-2xl p-8 text-center"
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-lg shadow-primary/20">
                <img
                  src="/berlin-about.png"
                  alt="BERLIN"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold mb-4 text-center">
              Classified Creative Material
            </h2>

            <div className="space-y-4 text-sm text-muted-foreground mb-8 text-center leading-relaxed">
              <p>
                You are about to access the internal portfolio of BERLIN. This site
                contains highly intentional design, undocumented technical experiments,
                and proprietary aesthetics.
              </p>
              <p>
                By proceeding, you acknowledge that you are ready for a non-standard web
                experience. All rights reserved. © {new Date().getFullYear()} BERLIN.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                className="w-full px-6 py-3 border border-border text-foreground font-mono text-xs uppercase tracking-widest hover:bg-muted transition-colors"
                onClick={leave}
                onMouseEnter={() => setCursorType("click")}
                onMouseLeave={() => setCursorType("default")}
              >
                Leave Website
              </button>
              <button
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors"
                onClick={accept}
                onMouseEnter={() => setCursorType("click")}
                onMouseLeave={() => setCursorType("default")}
              >
                I Agree
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
