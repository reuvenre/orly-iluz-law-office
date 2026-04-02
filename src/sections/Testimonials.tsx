import type { Content } from "@/content/he";
import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Testimonials({ content }: { content: Content }) {
  return (
    <section id="testimonials" className="relative">
      {/* Blue glow — left */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] h-[400px] w-[400px] rounded-full bg-[#123CFF]/7 blur-[110px]" />
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
            לקוחות ממליצים
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl font-bold text-white md:text-4xl"
          >
            {content.testimonials.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-3 text-white/55 max-w-xl mx-auto"
          >
            {content.testimonials.subtitle}
          </motion.p>
        </div>

        {/* ── Testimonial cards ── */}
        <div className="grid gap-5 md:grid-cols-3">
          {content.testimonials.items.map((t, idx) => (
            <motion.div
              key={t.name + t.text.slice(0, 8)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/8 bg-white/[0.025] p-6 flex flex-col hover:border-white/15 hover:bg-white/[0.045] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-[14px] fill-[#D6A74A] text-[#D6A74A]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-white/70 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-3">
                <div className="size-9 rounded-full bg-[#D6A74A]/12 flex items-center justify-center text-sm font-bold text-[#D6A74A] shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div className="text-sm font-medium text-white/85">{t.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
