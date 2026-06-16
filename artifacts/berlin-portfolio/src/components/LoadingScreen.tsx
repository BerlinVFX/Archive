import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "Resolving dependencies...",
  "Compiling shaders...",
  "Baking textures...",
  "Building AST from source...",
  "Applying dark matter rendering engine...",
  "Establishing neural uplink...",
  "Injecting cinematic motion primitives...",
  "Finalizing BERLIN instance...",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let step = 0;
    const total = MESSAGES.length;

    const interval = setInterval(() => {
      if (step < total) {
        setLines((prev) => [...prev, MESSAGES[step]]);
        setProgress(Math.round(((step + 1) / total) * 100));
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => onComplete(), 600);
      }
    }, 260);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9990] bg-background flex flex-col justify-between p-8 md:p-14"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          BERLIN OS v1.0.0
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {progress}%
        </span>
      </div>

      <div className="space-y-1.5">
        <AnimatePresence>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: i === lines.length - 1 ? 1 : 0.35, x: 0 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-xs text-foreground"
            >
              <span className="text-primary mr-2">›</span>
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="space-y-3">
        <div className="w-full h-px bg-border overflow-hidden">
          <motion.div
            className="h-full bg-foreground"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <div className="flex items-end justify-between">
          <p className="font-serif text-4xl md:text-6xl font-bold tracking-tight">
            BERLIN
          </p>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Creative Developer
          </span>
        </div>
      </div>
    </motion.div>
  );
}
