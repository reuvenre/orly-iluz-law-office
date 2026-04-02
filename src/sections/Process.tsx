import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "שיחת ייעוץ ראשונית",
    desc: "מבינים יחד את העסקה, עונים על שאלות, ומגדירים תוכנית פעולה מותאמת אישית.",
    icon: "💬",
  },
  {
    num: "02",
    title: "בדיקות וייצוג משפטי",
    desc: "בדיקות נסח, רישומים וחוזים — ניהול מלא של המשא ומתן עם הגנה משפטית מוחלטת.",
    icon: "⚖️",
  },
  {
    num: "03",
    title: "חתימה ומסירת המפתח",
    desc: "ליווי בחתימות, רישום הזכויות על שמכם, וסיום העסקה בשקט נפשי.",
    icon: "🔑",
  },
];

export function Process() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] rounded-full bg-[#D6A74A]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#D6A74A] mb-3"
          >
            התהליך שלנו
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-3xl font-bold text-white md:text-4xl"
          >
            כיצד זה עובד
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-3 text-white/50 max-w-lg mx-auto"
          >
            תהליך ברור, שקוף וללא הפתעות — מהפגישה הראשונה ועד למסירת המפתח.
          </motion.p>
        </div>

        {/* ── Steps ── */}
        <div className="relative">
          {/* Connecting dashed line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[3.25rem] right-[calc(16.67%+1.5rem)] left-[calc(16.67%+1.5rem)] h-px border-t-2 border-dashed border-[#D6A74A]/18"
          />

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="relative mb-6 flex size-[6.5rem] items-center justify-center rounded-full border border-[#D6A74A]/25 bg-[#D6A74A]/6">
                  {/* Outer ring pulse */}
                  <div className="absolute inset-0 rounded-full border border-[#D6A74A]/10 scale-110" />
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="text-xl">{step.icon}</span>
                    <span className="text-xs font-bold text-[#D6A74A]/70 tabular-nums">
                      {step.num}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed max-w-[18rem]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
