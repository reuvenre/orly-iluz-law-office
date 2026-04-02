import type { Content } from "@/content/he";
import { motion } from "motion/react";

export function About({ content }: { content: Content }) {
  return (
    <section id="about" className="relative">
      {/* Gold glow — bottom right */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-[-10%] h-[400px] w-[500px] rounded-full bg-[#D6A74A]/7 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
        <div className="grid gap-14 md:grid-cols-12 md:items-start">
          {/* ── Text column ── */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#D6A74A] mb-3"
            >
              עלינו
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-3xl font-bold text-white md:text-4xl leading-tight"
            >
              {content.about.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mt-3 text-white/55"
            >
              {content.about.subtitle}
            </motion.p>

            <div className="mt-6 space-y-4">
              {content.about.body.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
                  className="text-white/65 leading-relaxed text-sm md:text-base"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          {/* ── Highlights grid ── */}
          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {content.about.highlights.map((h, idx) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                    className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 hover:border-[#D6A74A]/25 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="inline-flex size-10 items-center justify-center rounded-xl bg-[#D6A74A]/10 text-[#D6A74A] mb-3">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-semibold text-white">{h.title}</h3>
                    <p className="mt-1.5 text-sm text-white/55 leading-relaxed">
                      {h.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
