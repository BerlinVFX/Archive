import { motion } from "framer-motion";

const INTL_PAYMENTS = [
  { name: "PayPal", color: "#003087", bg: "#eef5ff", note: null },
  { name: "Wise", color: "#163300", bg: "#eefce8", note: null },
  { name: "Redotpay", color: "#FF3B3B", bg: "#fff0f0", note: "USDT only" },
  { name: "Binance", color: "#F0B90B", bg: "#fffbe8", note: "USDT only" },
  { name: "Bybit", color: "#F7A600", bg: "#fffce8", note: "USDT only" },
];

const TUN_PAYMENTS = [
  { name: "Flouci", color: "#3B82F6", bg: "#eff6ff" },
  { name: "D17", color: "#EF4444", bg: "#fef2f2" },
  { name: "Virement Bancaire", color: "#10B981", bg: "#ecfdf5" },
];

export default function Services() {
  return (
    <section
      id="services"
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
            Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Payment Methods
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                International
              </p>
              <div className="space-y-0">
                {INTL_PAYMENTS.map((method, i) => (
                  <motion.div
                    key={method.name}
                    className="flex items-center justify-between py-4 border-t border-border last:border-b"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: method.color }}
                      />
                      <span className="font-mono text-sm text-foreground">
                        {method.name}
                      </span>
                    </div>
                    {method.note && (
                      <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">
                        {method.note}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-6 flex items-start gap-3 p-4 border border-dashed border-primary/30 bg-primary/5"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="mt-0.5 w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full border border-primary/50 text-primary font-bold text-[9px]">
                !
              </span>
              <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
                <span className="text-primary">INTL CRYPTO — </span>
                Redotpay, Binance & Bybit payments are accepted in{" "}
                <span className="text-foreground font-bold">USDT only</span>. No
                other crypto currency accepted.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                Tunisia
              </p>
              <div className="space-y-0">
                {TUN_PAYMENTS.map((method, i) => (
                  <motion.div
                    key={method.name}
                    className="flex items-center gap-3 py-4 border-t border-border last:border-b"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 + 0.1 }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: method.color }}
                    />
                    <span className="font-mono text-sm text-foreground">
                      {method.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-6 flex items-start gap-3 p-4 border border-dashed border-primary/30 bg-primary/5"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="mt-0.5 w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full border border-primary/50 text-primary font-bold text-[9px]">
                !
              </span>
              <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
                <span className="text-primary">TUN CLIENTS — </span>
                Transfers via Flouci, D17, or direct bank transfer (virement
                bancaire). Contact me to get full details.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
