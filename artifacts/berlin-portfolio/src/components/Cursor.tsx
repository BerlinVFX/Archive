import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointer2, ArrowUpRight } from "lucide-react";
import { useCursor } from "@/contexts/CursorContext";

export default function Cursor() {
  const { cursorType } = useCursor();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block"
      animate={{ x: pos.x - 16, y: pos.y - 16 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    >
      <AnimatePresence mode="wait">
        {cursorType === "default" && (
          <motion.div
            key="default"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="w-8 h-8 rounded-full border border-primary bg-primary/20 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        )}
        {cursorType === "explore" && (
          <motion.div
            key="explore"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="w-20 h-20 rounded-full bg-secondary/80 backdrop-blur-md flex items-center justify-center text-secondary-foreground font-mono text-xs uppercase tracking-widest"
          >
            Explore
          </motion.div>
        )}
        {cursorType === "click" && (
          <motion.div
            key="click"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="w-12 h-12 rounded-full bg-primary backdrop-blur-sm flex items-center justify-center text-primary-foreground"
          >
            <MousePointer2 className="w-5 h-5" />
          </motion.div>
        )}
        {cursorType === "visit" && (
          <motion.div
            key="visit"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="w-16 h-16 rounded-full bg-background border border-primary flex items-center justify-center text-primary"
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
