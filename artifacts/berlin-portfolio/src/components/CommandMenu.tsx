import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderOpen, Mail, Download, Terminal } from "lucide-react";
import { useCursor } from "@/contexts/CursorContext";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const downloadCv = () => {
  const a = document.createElement("a");
  a.href = "/berlin-cv.png";
  a.download = "BERLIN_CV.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setCursorType } = useCursor();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const run = (action: () => void) => {
    action();
    setOpen(false);
  };

  const itemClass =
    "flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground aria-selected:bg-primary aria-selected:text-primary-foreground transition-colors outline-none";

  const actionClass =
    "flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground aria-selected:bg-secondary aria-selected:text-secondary-foreground transition-colors outline-none";

  return (
    <>
      {/* Trigger button — desktop only */}
      <div className="fixed top-8 right-8 z-40 hidden md:block">
        <button
          onClick={() => setOpen(true)}
          onMouseEnter={() => setCursorType("click")}
          onMouseLeave={() => setCursorType("default")}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border rounded bg-background/50 backdrop-blur hover:bg-muted transition-colors"
        >
          <Terminal className="w-3 h-3" />
          <span className="uppercase tracking-widest text-[10px]">Command Menu</span>
          <kbd className="font-sans px-1.5 py-0.5 bg-muted rounded text-[10px]">⌘K</kbd>
        </button>
      </div>

      {/* Dialog */}
      <AnimatePresence>
        {open && (
          <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
            >
              <Command.Input
                placeholder="Type a command or search..."
                className="w-full px-4 py-4 bg-transparent text-foreground outline-none border-b border-border font-mono text-sm placeholder:text-muted-foreground"
              />
              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground font-mono">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Navigation"
                  className="text-xs font-mono text-muted-foreground p-2 [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:px-2"
                >
                  <Command.Item onSelect={() => run(() => scrollTo("home"))} className={itemClass}>
                    <Home className="w-4 h-4" /> Home
                  </Command.Item>
                  <Command.Item onSelect={() => run(() => scrollTo("about"))} className={itemClass}>
                    <User className="w-4 h-4" /> About Me
                  </Command.Item>
                  <Command.Item onSelect={() => run(() => scrollTo("projects"))} className={itemClass}>
                    <FolderOpen className="w-4 h-4" /> Projects
                  </Command.Item>
                  <Command.Item onSelect={() => run(() => scrollTo("contact"))} className={itemClass}>
                    <Mail className="w-4 h-4" /> Contact
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="Actions"
                  className="text-xs font-mono text-muted-foreground p-2 mt-2 pt-4 border-t border-border [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:px-2"
                >
                  <Command.Item onSelect={() => run(downloadCv)} className={actionClass}>
                    <Download className="w-4 h-4" /> Download CV
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </motion.div>
          </Command.Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
