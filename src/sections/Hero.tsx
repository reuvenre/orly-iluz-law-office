import type { Content } from "@/content/he";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowDown, MessageCircle } from "lucide-react";

const stats = [
  { num: "10+", label: "שנות ניסיון" },
  { num: "200+", label: "עסקאות הושלמו" },
  { num: "100%", label: "ליווי אישי" },
];

export function Hero({ content }: { content: Content }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden flex items-center min-h-[calc(100vh-56px)]"
    >
      {/* ── Backdrop orbs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-[#123CFF]/18 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-15%] h-[450px] w-[450px] rounded-full bg-[#D6A74A]/12 blur-[110px]" />
        <div className="absolute top-[30%] left-[-12%] h-[320px] w-[320px] rounded-full bg-[#D6A74A]/8 blur-[90px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-24 md:py-32 w-full text-center">
        {/* ── Label pill ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D6A74A]/30 bg-[#D6A74A]/8 px-4 py-1.5 text-xs font-medium tracking-wide text-[#D6A74A] mb-7"
        >
          <span className="size-1.5 rounded-full bg-[#D6A74A] animate-pulse" />
          משרד עורכי דין — נדל״ן
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-[4.25rem]"
        >
          {content.hero.headline}
        </motion.h1>

        {/* ── Subheadline ── */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.13 }}
          className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          {content.hero.subheadline}
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <Button asChild size="lg" variant="secondary" className="px-8 shadow-lg shadow-[#D6A74A]/15">
            <a href="#contact">{content.hero.ctaPrimary}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8">
            <a href="#contact">
              <MessageCircle className="size-4" />
              {content.hero.ctaSecondary}
            </a>
          </Button>
        </motion.div>

        {/* ── Trust badges ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {content.hero.trustBadges.map((b) => (
            <span
              key={b}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60"
            >
              <span className="size-1 rounded-full bg-[#D6A74A]" />
              {b}
            </span>
          ))}
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-16 pt-8 border-t border-white/8 grid grid-cols-3 gap-4 max-w-sm mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-[#D6A74A] tabular-nums">
                {s.num}
              </div>
              <div className="mt-1 text-xs text-white/50">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Scroll hint ── */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 inline-flex flex-col items-center text-white/30 hover:text-white/55 transition-colors"
          aria-label="גלול לשירותים"
        >
          <ArrowDown className="size-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
