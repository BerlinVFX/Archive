import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Download, X, CheckCircle, Mail } from "lucide-react";
import { SiInstagram, SiDiscord } from "react-icons/si";
import { useCursor } from "@/contexts/CursorContext";

const SOCIAL_LINKS = [
  {
    Icon: SiInstagram,
    platform: "Instagram",
    handle: "@berlin_vfx",
    href: "https://www.instagram.com/berlin_vfx?igsh=Nzl4d3NndG1zZjU1&utm_source=qr",
    color: "group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-400",
  },
  {
    Icon: SiDiscord,
    platform: "Discord",
    handle: "ber.n",
    href: "https://discord.com/users/ber.n",
    color: "group-hover:bg-[#5865F2]",
  },
  {
    Icon: Mail,
    platform: "Email",
    handle: "berlindesignstn@gmail.com",
    href: "mailto:berlindesignstn@gmail.com",
    color: "group-hover:bg-primary",
  },
];

const INPUT_CLASS =
  "w-full bg-background border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors";

export default function Contact() {
  const { setCursorType } = useCursor();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [cvPreview, setCvPreview] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "057db199-fb51-438e-a019-16fb300d90f2",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Portfolio Message From ${form.name}`,
          to_email: "berlindesignstn@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending.");
    } finally {
      setSending(false);
    }
  };

  const downloadCv = () => {
    setCvPreview(false);
    const a = document.createElement("a");
    a.href = "/berlin-cv.png";
    a.download = "BERLIN_CV.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section
      id="contact"
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
            Contact
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    Message sent.
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    I'll get back to you within 48 hours.
                  </p>
                  <button
                    className="font-mono text-xs uppercase tracking-widest text-primary hover:underline"
                    onClick={() => setSent(false)}
                    onMouseEnter={() => setCursorType("click")}
                    onMouseLeave={() => setCursorType("default")}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        data-testid="input-name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={INPUT_CLASS}
                        placeholder="Your name"
                        onFocus={() => setCursorType("click")}
                        onBlur={() => setCursorType("default")}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        data-testid="input-email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={INPUT_CLASS}
                        placeholder="your@email.com"
                        onFocus={() => setCursorType("click")}
                        onBlur={() => setCursorType("default")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      data-testid="input-message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${INPUT_CLASS} resize-none`}
                      placeholder="Tell me about your project..."
                      onFocus={() => setCursorType("click")}
                      onBlur={() => setCursorType("default")}
                    />
                  </div>

                  <button
                    type="submit"
                    data-testid="button-submit"
                    disabled={sending}
                    className="flex items-center gap-2 px-8 py-4 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors disabled:opacity-60"
                    onMouseEnter={() => setCursorType("click")}
                    onMouseLeave={() => setCursorType("default")}
                  >
                    {sending ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-background/40 border-t-background rounded-full animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                Find me on
              </p>
              <div className="flex flex-col">
                {SOCIAL_LINKS.map(({ Icon, platform, handle, href }, i) => (
                  <motion.a
                    key={platform}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between py-5 border-t border-border last:border-b overflow-hidden"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    onMouseEnter={() => setCursorType("visit")}
                    onMouseLeave={() => setCursorType("default")}
                  >
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500 ease-out" />
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                    <div className="flex items-center gap-3 ml-3 flex-1 justify-between">
                      <span className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300 break-all text-[12px]">
                        {handle}
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M7 7h10v10"
                        />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                Resume
              </p>
              <button
                data-testid="button-download-cv"
                className="w-full group flex items-center gap-4 p-4 border border-border bg-card hover:border-primary hover:bg-primary/5 transition-colors"
                onClick={() => setCvPreview(true)}
                onMouseEnter={() => setCursorType("click")}
                onMouseLeave={() => setCursorType("default")}
              >
                <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/20 flex-shrink-0">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    PDF · 2026
                  </p>
                  <p className="font-mono text-sm text-foreground mt-0.5">
                    Download CV
                  </p>
                </div>
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {cvPreview && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setCvPreview(false)}
            />
            <motion.div
              className="relative w-full max-w-xs bg-card border border-border shadow-2xl overflow-hidden"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
              <button
                className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors"
                onClick={() => setCvPreview(false)}
                onMouseEnter={() => setCursorType("click")}
                onMouseLeave={() => setCursorType("default")}
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="p-6 border-b border-border">
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-4">
                  Preview
                </p>
                <img
                  src="/berlin-cv.png"
                  alt="BERLIN CV"
                  className="w-full border border-border"
                />
              </div>

              <div className="p-4">
                <button
                  data-testid="button-confirm-download-cv"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors"
                  onClick={downloadCv}
                  onMouseEnter={() => setCursorType("click")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}