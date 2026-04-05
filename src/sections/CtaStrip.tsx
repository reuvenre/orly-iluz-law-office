import { Button } from "@/components/ui/button";
import type { Content } from "@/content/he";
import { motion } from "motion/react";

export function CtaStrip({ content }: { content: Content }) {
  return (
    <section className="relative overflow-hidden">
      {/* Gold glow center */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[700px] rounded-full bg-[#D6A74A]/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-20 md:py-28 text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold tracking-[0.18em] uppercase text-[#D6A74A] mb-5"
        >
          מוכנים להתחיל?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="text-3xl font-bold text-white md:text-5xl leading-tight"
        >
          העסקה הבאה שלכם —<br />
          <span className="gold-shimmer">בידיים הנכונות.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-5 text-white/50 max-w-md mx-auto font-light"
        >
          שיחת ייעוץ ראשונית — ללא התחייבות.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="px-10 shadow-lg shadow-[#D6A74A]/20"
          >
            <a href="#contact">{content.hero.ctaPrimary}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8">
            <a
              href={`https://wa.me/${content.links.whatsappNumberE164}?text=${encodeURIComponent(content.links.whatsappPrefill)}`}
              target="_blank"
              rel="noreferrer"
            >
              {content.hero.ctaSecondary}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
