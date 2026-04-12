import { useEffect, useRef } from "react";
import type { Content } from "@/content/he";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { ArrowDown } from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";

const stats = [
  { to: 10, suffix: "+", label: "שנות ניסיון" },
  { to: 50000, suffix: "+", label: "עסקאות הושלמו" },
  { to: 100, suffix: "%", label: "ליווי אישי" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `${Math.round(v)}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
    return controls.stop;
  }, [inView, count, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Hero({ content }: { content: Content }) {
  // Split headline on " — " for the gold shimmer treatment
  const headlineParts = content.hero.headline.split(" — ");
  const headlineMain = headlineParts[0] ?? content.hero.headline;
  const headlineGold = headlineParts[1];

  return (
    <section
      id="top"
      className="relative overflow-hidden flex items-center min-h-[calc(100vh-56px)]"
    >
      {/* ── Backdrop orbs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[750px] w-[1100px] rounded-full bg-[#123CFF]/15 blur-[160px]" />
        <div className="absolute bottom-[-15%] right-[-18%] h-[500px] w-[500px] rounded-full bg-[#D6A74A]/10 blur-[120px]" />
        <div className="absolute top-[25%] left-[-15%] h-[350px] w-[350px] rounded-full bg-[#D6A74A]/7 blur-[100px]" />
        <HeroBackground />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-24 md:py-32 w-full flex flex-col items-center text-center relative">
        {/* ── Logo ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center items-center mb-8"
        >
          <img
            src="/logo-orly.png"
            alt="אורלי אילוז משרד עורכי דין"
            width={480}
            height={200}
            loading="eager"
            decoding="sync"
            className="hero-logo w-auto object-contain -translate-x-6"
          />
        </motion.div>

        {/* ── Headline (serif + shimmer) ── */}
        {headlineMain && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.07 }}
            className="text-[2.8rem] font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-[4.75rem]"
          >
            {headlineMain}
            {headlineGold && (
              <>
                {" — "}
                <span className="gold-shimmer">{headlineGold}</span>
              </>
            )}
          </motion.h1>
        )}

        {/* ── Subheadline ── */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl font-light"
        >
          {content.hero.subheadline}
        </motion.p>


        {/* ── Trust badges ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {content.hero.trustBadges.map((b) => (
            <span
              key={b}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/55"
            >
              <span className="size-1 rounded-full bg-[#D6A74A]" />
              {b}
            </span>
          ))}
        </motion.div>

        {/* ── Animated stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-16 pt-8 border-t border-white/8 grid grid-cols-3 gap-4 max-w-xs mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-[#D6A74A] tabular-nums font-display">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-white/45">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Scroll hint ── */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 inline-flex flex-col items-center text-white/25 hover:text-white/50 transition-colors"
          aria-label="גלול לשירותים"
        >
          <ArrowDown className="size-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
