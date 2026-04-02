import type { Content } from "@/content/he";
import { motion } from "motion/react";

export function Services({ content }: { content: Content }) {
  return (
    <section id="services" className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#123CFF]/6 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#D6A74A] mb-3"
          >
            שירותינו
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl font-bold text-white md:text-4xl"
          >
            {content.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-3 text-white/50 max-w-xl mx-auto"
          >
            {content.services.subtitle}
          </motion.p>
        </div>

        {/* ── Cards ── */}
        <div className="grid gap-5 md:grid-cols-3">
          {content.services.items.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.09 }}
                whileHover={{ y: -4, scale: 1.01 }}
                style={{ transformPerspective: 800 }}
                className="group relative rounded-2xl border border-white/8 bg-white/[0.025] p-7 cursor-default
                           hover:border-[#D6A74A]/35 hover:bg-white/[0.05]
                           transition-colors duration-300"
              >
                {/* Background number */}
                <div className="absolute top-5 left-5 text-[3.5rem] font-black text-white/[0.03] select-none leading-none tabular-nums font-display">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Top gold accent line */}
                <div className="absolute top-0 right-6 left-6 h-px bg-gradient-to-r from-transparent via-[#D6A74A]/0 to-transparent group-hover:via-[#D6A74A]/30 transition-all duration-500" />

                {/* Icon */}
                <div className="relative inline-flex size-12 items-center justify-center rounded-xl bg-[#D6A74A]/10 text-[#D6A74A] mb-5 group-hover:bg-[#D6A74A]/18 transition-colors duration-300">
                  <Icon className="size-6" />
                </div>

                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed font-light">{s.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-white/60">
                      <span className="mt-[5px] size-1.5 shrink-0 rounded-full bg-[#D6A74A]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
