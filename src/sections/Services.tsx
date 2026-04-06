import type { Content } from "@/content/he";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export function Services({ content }: { content: Content }) {
  return (
    <section id="services" className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#123CFF]/6 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
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
            className="mt-3 text-white/50 max-w-xl mx-auto font-light"
          >
            {content.services.subtitle}
          </motion.p>
        </div>

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
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-7 cursor-default hover:border-[#D6A74A]/30 transition-all duration-300"
              >
                {/* Watermark icon — large, bottom-left corner */}
                <div className="absolute -bottom-4 -left-4 text-[#D6A74A]/[0.06] group-hover:text-[#D6A74A]/[0.1] transition-colors duration-500">
                  <Icon strokeWidth={0.8} className="size-36" />
                </div>

                {/* Top accent line on hover */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D6A74A]/0 to-transparent group-hover:via-[#D6A74A]/40 transition-all duration-500" />

                {/* Index number */}
                <div className="text-xs font-bold text-[#D6A74A]/40 tracking-[0.2em] mb-5">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">{s.title}</h3>
                <p className="mt-2.5 text-sm text-white/50 leading-relaxed font-light">
                  {s.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-white/60 font-light">
                      <span className="mt-[6px] size-1 shrink-0 rounded-full bg-[#D6A74A]/60" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-end">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs text-[#D6A74A]/50 group-hover:text-[#D6A74A] transition-colors duration-300"
                  >
                    לפרטים נוספים
                    <ArrowLeft className="size-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
