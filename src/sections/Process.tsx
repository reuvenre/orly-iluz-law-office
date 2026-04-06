import { motion } from "motion/react";
import { CalendarCheck, FileSearch, KeyRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: { num: string; title: string; desc: string; Icon: LucideIcon }[] = [
  {
    num: "01",
    Icon: CalendarCheck,
    title: "שיחת ייעוץ ראשונית",
    desc: "מבינים יחד את העסקה, עונים על שאלות, ומגדירים תוכנית פעולה מותאמת אישית.",
  },
  {
    num: "02",
    Icon: FileSearch,
    title: "בדיקות וייצוג משפטי",
    desc: "בדיקות נסח, רישומים וחוזים — ניהול מלא של המשא ומתן עם הגנה משפטית מוחלטת.",
  },
  {
    num: "03",
    Icon: KeyRound,
    title: "חתימה ומסירת המפתח",
    desc: "ליווי בחתימות, רישום הזכויות על שמכם, וסיום העסקה בשקט נפשי.",
  },
];

export function Process() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] rounded-full bg-[#D6A74A]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
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
            className="text-3xl font-bold text-white md:text-4xl"
          >
            כיצד זה עובד
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-3 text-white/50 max-w-lg mx-auto font-light"
          >
            תהליך ברור, שקוף וללא הפתעות — מהפגישה הראשונה ועד למסירת המפתח.
          </motion.p>
        </div>

        <div className="relative grid gap-0 md:grid-cols-3">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-10 right-[calc(16.67%+2rem)] left-[calc(16.67%+2rem)] h-px bg-gradient-to-l from-[#D6A74A]/20 via-[#D6A74A]/10 to-[#D6A74A]/20"
          />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-6 py-8"
            >
              {/* Number + icon stack */}
              <div className="relative mb-6">
                {/* Large editorial number */}
                <div className="text-[5rem] font-black leading-none tabular-nums text-[#D6A74A]/8 select-none">
                  {step.num}
                </div>
                {/* Icon centered over number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-10 rounded-full border border-[#D6A74A]/30 bg-[#D6A74A]/8 flex items-center justify-center text-[#D6A74A]">
                    <step.Icon className="size-4.5" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-[16rem] font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
