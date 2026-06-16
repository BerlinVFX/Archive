import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { useCursor } from "@/contexts/CursorContext";

const SKILLS = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26", pct: 92 },
  { name: "CSS3", Icon: null, color: "#1572B6", pct: 90 },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", pct: 85 },
  { name: "React", Icon: SiReact, color: "#61DAFB", pct: 78 },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933", pct: 58 },
  { name: "Java", Icon: null, color: "#f89820", pct: 35 },
  { name: "C", Icon: null, color: "#A8B9CC", pct: 42 },
];

const EXPERTISE = [
  "Web Development",
  "Frontend & Backend",
  "UX / UI Design",
  "Responsive Design",
  "API Integration",
  "Version Control (Git)",
  "Database Management",
  "Deployment & Server",
  "CMS Development",
  "E-Commerce",
];

const EXPERIENCE = [
  {
    period: "2022 — 2025",
    duration: "3 yr",
    role: "CMS Developer & Shopify Specialist",
    org: "Discord Dev-Support Server",
    type: "Temp-time" as const,
    tags: ["Shopify", "Liquid", "CMS"],
  },
  {
    period: "May 2024 — Oct 2024",
    duration: "5 mos",
    role: "Client Side & Web UI Developer",
    org: "Xyous Web Programming Network",
    type: "Full-time" as const,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    period: "2024 — 2025",
    duration: "1 yr",
    role: "Product Engineer & Full-Stack Developer",
    org: "Fiverr · Upwork · Jobbers",
    type: "Part-time" as const,
    tags: ["React", "Node.js", "JavaScript"],
  },
];

const EDUCATION = [
  {
    period: "2025 — 2026",
    title: "Higher Institute of Technology",
    detail: "Mid-Level C Language Development · Tunis, Tunisia",
    badge: "82%",
  },
  {
    period: "2022 — Present",
    title: "Online & Self Education",
    detail: "HTML · CSS · JS · Java · Node.js · React · YouTube",
    badge: "4 yr",
  },
];

const TYPE_COLORS: Record<string, string> = {
  "Full-time": "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  "Part-time": "bg-amber-500/10 text-amber-500 border-amber-500/30",
  "Temp-time": "bg-sky-500/10 text-sky-500 border-sky-500/30",
};

function SkillBar({ skill, index }: { skill: typeof SKILLS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {skill.Icon ? (
            <skill.Icon style={{ color: skill.color }} className="w-3.5 h-3.5" />
          ) : (
            <span className="w-3.5 h-3.5 flex items-center justify-center font-mono text-[9px] font-bold" style={{ color: skill.color }}>
              {skill.name[0]}
            </span>
          )}
          <span className="font-mono text-xs text-foreground">{skill.name}</span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">{skill.pct}%</span>
      </div>
      <div className="h-px bg-border overflow-hidden">
        <motion.div
          className="h-full"
          style={{ background: skill.color }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: skill.pct / 100 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: index * 0.06 + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const { setCursorType } = useCursor();

  return (
    <section
      id="about"
      className="py-24 lg:py-32 px-6 md:px-16 lg:px-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            Background
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              I'm a creative developer with a background in graphic design and a
              deep obsession with the web. I care about the details — the timing
              of an animation, the feel of a hover state, the weight of a heading.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              My work lives between engineering and aesthetics. I don't just build
              what's in the mockup — I make it feel alive. Every project gets the
              same level of attention regardless of size.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6 content-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { value: "6+", label: "Projects" },
              { value: "4", label: "Years" },
              { value: "∞", label: "Coffee" },
            ].map(({ value, label }) => (
              <div key={label} className="border border-border p-5">
                <p className="font-serif text-3xl font-bold mb-1">{value}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
                Skills & Experience
              </p>
              <p className="font-serif text-2xl font-bold mb-6">Software Skills</p>
              <div className="space-y-4">
                {SKILLS.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="font-serif text-2xl font-bold mb-4">Area of Expertise</p>
              <div className="flex flex-wrap gap-2">
                {EXPERTISE.map((item) => (
                  <span
                    key={item}
                    onMouseEnter={() => setCursorType("click")}
                    onMouseLeave={() => setCursorType("default")}
                    className="px-3 py-1.5 border border-border font-mono text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div>
              <motion.p
                className="font-serif text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Work Experience
              </motion.p>
              <div className="space-y-0">
                {EXPERIENCE.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="py-6 border-t border-border last:border-b"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <p className="font-serif font-semibold text-foreground">
                          {exp.role}
                        </p>
                        <p className="font-mono text-xs text-muted-foreground mt-0.5">
                          {exp.org}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span
                          className={`inline-block font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border rounded-sm ${TYPE_COLORS[exp.type]}`}
                        >
                          {exp.type}
                        </span>
                        <p className="font-mono text-[10px] text-muted-foreground mt-1">
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                    <p className="font-mono text-[10px] text-muted-foreground mb-2">
                      {exp.period}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.p
                className="font-serif text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Education
              </motion.p>
              <div className="space-y-0">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="py-6 border-t border-border last:border-b"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-serif font-semibold text-foreground mb-0.5">
                          {edu.title}
                        </p>
                        <p className="font-mono text-xs text-muted-foreground">
                          {edu.detail}
                        </p>
                        <p className="font-mono text-[10px] text-muted-foreground mt-1">
                          {edu.period}
                        </p>
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground border border-border px-2 py-1 flex-shrink-0">
                        {edu.badge}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
