import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "Initializing environment variables...",
  "Resolving dependencies...",
  "Compiling shaders...",
  "Building AST from source...",
  "Applying dark matter rendering engine...",
  "Injecting cinematic motion primitives...",
  "Baking textures...",
  "Establishing neural uplink...",
  "Finalizing BERLIN instance...",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p++;
      const pct = Math.min((p / 50) * 100, 100);
      setProgress(pct);
      if (p % 5 === 0 && p / 5 < MESSAGES.length) {
        setLines((prev) => [...prev, MESSAGES[Math.floor(p / 5)]]);
      }
      if (p >= 50) {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-primary font-mono"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className="w-full max-w-2xl px-6">
        <div className="mb-8 text-sm opacity-80 h-32 overflow-hidden flex flex-col justify-end">
          <AnimatePresence>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-1 text-muted-foreground"
              >
                <span className="text-secondary mr-2">&gt;</span>
                {line}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-between mb-2 text-xs uppercase tracking-widest">
          <span>BERLIN OS v1.0.0</span>
          <span>{Math.floor(progress)}%</span>
        </div>

        <div className="h-1 w-full bg-muted overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
