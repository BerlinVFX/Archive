import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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
    customCard: false,
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
    customCard: false,
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
    customCard: false,
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
    customCard: false,
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
    customCard: false,
  },
];

export default function Work() {
  const { setCursorType } = useCursor();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="py-24 lg:py-32 px-6 md:px-16 lg:px-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-end justify-between mb-14"
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
          <p className="font-mono text-xs text-muted-foreground hidden md:block">
            2022 — 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.id}
              id={`card-project-${project.id}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden border border-border bg-card hover:border-foreground/30 transition-colors duration-500"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseEnter={() => {
                setHovered(project.id);
                setCursorType("visit");
              }}
              onMouseLeave={() => {
                setHovered(null);
                setCursorType("default");
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {project.customCard ? (
                  <div className="w-full h-full bg-gradient-to-br from-background to-card flex flex-col items-center justify-center gap-3">
                    <div className="border border-border/60 p-6 space-y-2 text-center">
                      <p className="font-serif text-2xl font-bold">BERLIN</p>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                        Creative Developer
                      </p>
                    </div>
                    <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
                      Personal Portfolio · 2024
                    </p>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover ${project.imgPos} group-hover:scale-105 transition-transform duration-700`}
                  />
                )}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
                <motion.div
                  className="absolute top-4 right-4 w-9 h-9 bg-foreground text-background flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hovered === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                      {project.category}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground border border-border px-2 py-1 flex-shrink-0">
                    {project.year}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {project.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    <span>View Case</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
