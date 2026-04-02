import type { Content } from "@/content/he";
import { motion } from "motion/react";
import { Star } from "lucide-react";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="size-[13px] fill-[#D6A74A] text-[#D6A74A]" />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <div className="size-9 rounded-full bg-[#D6A74A]/12 flex items-center justify-center text-sm font-bold text-[#D6A74A] shrink-0">
      {name.charAt(0)}
    </div>
  );
}

export function Testimonials({ content }: { content: Content }) {
  const [featured, ...rest] = content.testimonials.items;

  return (
    <section id="testimonials" className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 right-[-8%] h-[400px] w-[400px] rounded-full bg-[#123CFF]/6 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
        {/* ── Header ── */}
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
            className="mt-3 text-white/50 max-w-xl mx-auto"
          >
            {content.testimonials.subtitle}
          </motion.p>
        </div>

        <div className="space-y-5">
          {/* ── Featured testimonial ── */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-[#D6A74A]/15 bg-[#D6A74A]/[0.03] p-8 md:p-10 relative overflow-hidden"
            >
              {/* Decorative quote mark */}
              <div
                aria-hidden="true"
                className="absolute top-4 left-8 text-[7rem] leading-none text-[#D6A74A]/8 select-none font-black"
              >
                "
              </div>

              <div className="relative">
                <Stars />
                <p className="mt-5 text-xl md:text-2xl leading-relaxed text-white/80 font-light">
                  &ldquo;{featured.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/8">
                  <Avatar name={featured.name} />
                  <div className="text-sm font-medium text-white/80">{featured.name}</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Supporting testimonials ── */}
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((t, idx) => (
              <motion.div
                key={t.name + t.text.slice(0, 8)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl border border-white/8 bg-white/[0.025] p-6 flex flex-col hover:border-white/15 transition-colors duration-300"
              >
                <Stars />
                <p className="mt-4 text-sm leading-relaxed text-white/65 flex-1 font-light">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-3">
                  <Avatar name={t.name} />
                  <div className="text-sm font-medium text-white/80">{t.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
