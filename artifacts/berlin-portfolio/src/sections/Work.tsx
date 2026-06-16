import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useCursor } from "@/contexts/CursorContext";

const PROJECTS = [
  {
    id: 1,
    title: "VINTAGEVERSE",
    category: "E-Commerce",
    year: "2024",
    image: "/project-1.jpg",
    imgPos: "object-top",
    url: "https://vintageverse.tn/en",
    tech: ["Shopify", "Liquid", "CSS", "JavaScript"],
    summary:
      "A curated vintage fashion e-commerce store for the Tunisian market — featuring a clean editorial layout, multi-currency support, and a seamless mobile-first shopping experience.",
  },
  {
    id: 2,
    title: "SOLINOTES",
    category: "Perfume E-Commerce",
    year: "2024",
    image: "/project-2.jpg",
    imgPos: "object-top",
    url: "https://solinotes.com/",
    tech: ["Shopify", "Liquid", "Raleway", "Jost"],
    summary:
      "Premium French perfume brand storefront built on Shopify — featuring a refined typographic identity, elegant product pages, and a fully localised French shopping experience.",
  },
  {
    id: 3,
    title: "LITTLES",
    category: "Baby & Kids Brand",
    year: "2024",
    image: "/project-3.jpg",
    imgPos: "object-center",
    url: "https://ilovelittles.com/",
    tech: ["WordPress", "Elementor", "WooCommerce", "CSS"],
    summary:
      "Warm, playful e-commerce site for a baby and children's product brand — built on WordPress with Elementor for rich storytelling layouts and a welcoming parent-focused UX.",
  },
  {
    id: 4,
    title: "EMBRACE",
    category: "Beverage Brand",
    year: "2024",
    image: "/project-4.jpg",
    imgPos: "object-center",
    url: "https://www.drinkembrace.eu/",
    tech: ["Webflow", "GSAP", "Google Fonts", "CSS"],
    summary:
      "Bold brand site for a European beverage co-founded by 47 people across Europe — built in Webflow with expressive visuals, a rich founder story, and smooth scroll interactions.",
  },
  {
    id: 5,
    title: "BERLIN PORTFOLIO",
    category: "Personal Portfolio",
    year: "2024",
    image: "/project-5.jpg",
    imgPos: "object-center",
    url: "https://berlinvfx.github.io/portfolio/",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    summary:
      "A bold, animated personal portfolio — the earlier version of this very site — showcasing creative development work with cinematic transitions, custom cursor, and editorial design.",
    customCard: true,
  },
  {
    id: 6,
    title: "MONTANA PARFUM",
    category: "Luxury Perfume",
    year: "2023",
    image: "/project-6.jpg",
    imgPos: "object-top",
    url: "https://www.montana-parfum.com/",
    tech: ["WordPress", "WooCommerce", "Elementor", "React"],
    summary:
      "Elegant luxury perfume e-commerce store built on WordPress + WooCommerce — featuring a sophisticated visual identity, wishlist functionality, and a rich product catalogue.",
  },
];

export default function Work() {
  const { setCursorType } = useCursor();
  const [selected, setSelected] = useState<(typeof PROJECTS)[0] | null>(null);

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 px-6 md:px-16 lg:px-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-end justify-between mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
              Projects
            </h2>
          </div>
          <span className="font-mono text-sm text-muted-foreground hidden md:block">
            2022 — 2026
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              data-testid={`card-project-${project.id}`}
              className="group cursor-none bg-card border border-border overflow-hidden hover:border-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setSelected(project)}
              onMouseEnter={() => setCursorType("visit")}
              onMouseLeave={() => setCursorType("default")}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {project.customCard ? (
                  <div className="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                    <img
                      src={project.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-20 scale-105"
                    />
                    <div className="relative z-10 text-center pointer-events-none">
                      <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/70 mb-3">
                        Personal Portfolio · 2024
                      </p>
                      <h3 className="font-serif text-5xl font-bold text-white tracking-tight leading-none">
                        BERLIN
                      </h3>
                      <div className="mt-3 flex items-center justify-center gap-2">
                        <span className="h-px w-8 bg-primary/50" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                          Creative Developer
                        </span>
                        <span className="h-px w-8 bg-primary/50" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.imgPos ?? "object-top"}`}
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/55 transition-all duration-400 flex items-center justify-center">
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-background font-mono text-xs uppercase tracking-widest">
                      View Case
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-background" />
                  </div>
                </div>

                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border border-border px-2.5 py-1">
                  <span className="font-mono text-[9px] text-muted-foreground">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <div className="w-9 h-9 border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="relative w-full max-w-4xl bg-card border border-border shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[85vh]"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
              <button
                data-testid="modal-close"
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-background/70 border border-border rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                onClick={() => setSelected(null)}
                onMouseEnter={() => setCursorType("click")}
                onMouseLeave={() => setCursorType("default")}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="md:w-3/5 h-64 md:h-auto overflow-hidden flex-shrink-0">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="md:w-2/5 p-8 flex flex-col justify-center overflow-y-auto">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">
                  {selected.category}
                </span>
                <h3 className="font-serif text-3xl font-bold mb-4">{selected.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {selected.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-muted border border-border font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors"
                  onMouseEnter={() => setCursorType("click")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  Visit Live Site
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
