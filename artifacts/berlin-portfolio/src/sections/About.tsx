import { motion } from "framer-motion";

const TECH_TAGS = [
  "React",
  "TypeScript",
  "Framer Motion",
  "Three.js",
  "GSAP",
  "Tailwind CSS",
  "Node.js",
  "Figma",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 px-6 md:px-16 lg:px-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-mono text-xs uppercase tracking-widest text-primary mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Photo column */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative background boxes */}
            <div
              className="absolute top-6 left-6 w-full max-w-sm aspect-[4/5] bg-primary/25"
              style={{ transform: "rotate(3deg)" }}
            />
            <div
              className="absolute top-3 left-3 w-full max-w-sm aspect-[4/5] border border-secondary/40"
              style={{ transform: "rotate(-2deg)" }}
            />

            {/* Main photo */}
            <motion.div
              className="relative w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl"
              style={{ transform: "rotate(-4deg)" }}
              whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.4 } }}
            >
              <img
                src="berlin-about.png"
                alt="BERLIN"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-foreground/5 mix-blend-multiply pointer-events-none" />
            </motion.div>

            {/* "Mufntate" badge */}
            <motion.div
              className="absolute -top-4 -right-2 lg:-right-6 bg-primary text-primary-foreground px-3 py-1.5 shadow-lg z-10"
              style={{ transform: "rotate(6deg)" }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">
                Mufntate
              </span>
            </motion.div>

            {/* Est. 2022 card */}
            <motion.div
              className="absolute -bottom-3 left-8 bg-card border border-border px-3 py-2 shadow-md z-10"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
                  Est.
                </span>
                <span className="font-serif text-lg font-bold text-foreground ml-1.5">
                  2022
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            className="flex flex-col justify-center pt-8 lg:pt-0"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              I build websites that people{" "}
              <span className="text-primary italic">remember.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a creative developer with a background in graphic design and a
                deep obsession with the web. I care about the details — the timing of an
                animation, the feel of a hover state, the weight of a heading.
              </p>
              <p>
                My work lives between engineering and aesthetics. I don&apos;t just build
                what&apos;s in the mockup — I make it feel alive. Every project gets the
                same level of attention regardless of size.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-10 pt-10 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">20+</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  Projects
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">4</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  Years
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">∞</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  Coffee
                </p>
              </div>
            </div>

            {/* Tech tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 border border-border font-mono text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
