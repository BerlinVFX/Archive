import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Briefcase, GraduationCap, CreditCard, Globe } from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPaypal,
  SiBinance,
} from "react-icons/si";
import { useCursor } from "@/contexts/CursorContext";

type SkillType = {
  name: string;
  Icon: React.ComponentType<{ style?: React.CSSProperties; className?: string }> | null;
  color: string;
  pct: number;
};

const SKILLS: SkillType[] = [
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

const TYPE_STYLES: Record<string, string> = {
  "Full-time": "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  "Part-time": "bg-amber-500/10 text-amber-500 border-amber-500/30",
  "Temp-time": "bg-sky-500/10 text-sky-500 border-sky-500/30",
};

const INTL_PAYMENTS = [
  { name: "PayPal", Icon: SiPaypal, color: "#003087", note: null, bg: "#003087" },
  { name: "Wise", Icon: null, color: "#9FE870", note: null, bg: "#163300" },
  { name: "Redotpay", Icon: null, color: "#FF3B3B", note: "USDT only", bg: "#1a0000" },
  { name: "Binance", Icon: SiBinance, color: "#F0B90B", note: "USDT only", bg: "#181a20" },
  { name: "Bybit", Icon: null, color: "#F7A600", note: "USDT only", bg: "#1a1200" },
];

const LOCAL_PAYMENTS = [
  { name: "Flouci", color: "#3B82F6", bg: "#0f1a2e" },
  { name: "D17", color: "#EF4444", bg: "#1a0808" },
  { name: "Virement Bancaire", color: "#10B981", bg: "#061a12" },
];

function SkillBar({ skill, index }: { skill: SkillType; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          {skill.Icon ? (
            <skill.Icon style={{ color: skill.color }} className="w-4 h-4 flex-shrink-0" />
          ) : (
            <span
              className="w-4 h-4 flex-shrink-0 font-mono text-[9px] font-bold flex items-center justify-center"
              style={{ color: skill.color }}
            >
              {skill.name.slice(0, 2)}
            </span>
          )}
          <span className="font-mono text-[11px] uppercase tracking-wider text-foreground">
            {skill.name}
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">{skill.pct}%</span>
      </div>
      <div className="h-[3px] bg-border overflow-hidden">
        <motion.div
          className="h-full origin-left"
          style={{ background: skill.color }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: skill.pct / 100 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { setCursorType } = useCursor();

  return (
    <section
      id="experience"
      className="py-24 lg:py-32 px-6 md:px-16 lg:px-24 border-t border-border overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            Background
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Skills & Experience
          </h2>
        </motion.div>

        {/* Skills + Experience grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Code className="w-4 h-4 text-primary" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Software Skills
              </p>
            </div>
            <div className="space-y-5">
              {SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>

            <div className="mt-10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                Area of Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {EXPERTISE.map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1.5 border border-border bg-card font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    onMouseEnter={() => setCursorType("default")}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Work Experience + Education */}
          <div className="space-y-10">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-4 h-4 text-primary" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Work Experience
                </p>
              </div>
              <div className="relative pl-5 border-l border-border space-y-8">
                {EXPERIENCE.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="relative group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    <span className="absolute -left-[22px] top-1 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300" />
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {exp.period}
                      </span>
                      <span className="font-mono text-[9px] text-muted-foreground/60">
                        · {exp.duration}
                      </span>
                      <span
                        className={`px-2 py-0.5 border text-[9px] font-mono rounded-sm ${TYPE_STYLES[exp.type] ?? ""}`}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="font-serif text-[15px] font-bold text-foreground mb-0.5">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-[10px] text-muted-foreground mb-2">
                      {exp.org}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-muted border border-border font-mono text-[9px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-4 h-4 text-primary" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Education
                </p>
              </div>
              <div className="relative pl-5 border-l border-border space-y-7">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="relative group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    <span className="absolute -left-[22px] top-1 w-3.5 h-3.5 rounded-full border-2 border-border bg-background group-hover:border-primary transition-colors duration-300" />
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {edu.period}
                      </span>
                      <span className="px-2 py-0.5 bg-primary/10 border border-primary/30 font-mono text-[9px] text-primary">
                        {edu.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-[15px] font-bold text-foreground mb-0.5">
                      {edu.title}
                    </h3>
                    <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">
                      {edu.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-10">
            <CreditCard className="w-4 h-4 text-primary" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Payment Methods
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* International */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  International
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {INTL_PAYMENTS.map((p, i) => (
                  <motion.div
                    key={p.name}
                    className="group relative flex items-center justify-between px-5 py-4 border border-border bg-card overflow-hidden hover:border-opacity-60 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    onMouseEnter={() => setCursorType("default")}
                  >
                    <span
                      className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: p.color }}
                    />
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(to right, ${p.bg}80, transparent)`,
                      }}
                    />
                    <div className="relative flex items-center gap-3">
                      {p.Icon ? (
                        <p.Icon style={{ color: p.color }} className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <span
                          className="w-5 h-5 flex-shrink-0 font-mono text-[9px] font-bold flex items-center"
                          style={{ color: p.color }}
                        >
                          {p.name.slice(0, 3).toUpperCase()}
                        </span>
                      )}
                      <span className="font-mono text-xs text-foreground">{p.name}</span>
                    </div>
                    {p.note && (
                      <span className="relative font-mono text-[9px] text-muted-foreground">
                        {p.note}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Local */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3.5 h-3.5 flex items-center justify-center font-mono text-[9px] text-muted-foreground">
                  TN
                </span>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Tunisia / Local
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {LOCAL_PAYMENTS.map((p, i) => (
                  <motion.div
                    key={p.name}
                    className="group relative flex items-center gap-3 px-5 py-4 border border-border bg-card overflow-hidden cursor-default"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    onMouseEnter={() => setCursorType("default")}
                  >
                    <span
                      className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: p.color }}
                    />
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(to right, ${p.bg}80, transparent)`,
                      }}
                    />
                    <span
                      className="relative w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: p.color }}
                    />
                    <span className="relative font-mono text-xs text-foreground">
                      {p.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
