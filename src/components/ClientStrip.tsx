/**
 * ClientStrip — auto-advancing photo gallery with spotlight center card.
 *
 * HOW TO ADD PHOTOS:
 * 1. Drop image files into /public/clients/  (jpg, png, webp)
 * 2. Add an entry to the PHOTOS array below.
 * 3. Save — done.
 */

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const PHOTOS: { src: string; label?: string }[] = [
  { src: "/clients/pic1.jpg" },
  { src: "/clients/pic2.jpg" },
  { src: "/clients/pic3.jpg" },
  { src: "/clients/pic4.jpg" },
  { src: "/clients/pic5.jpg" },
  { src: "/clients/pic6.jpg" },
  { src: "/clients/pic7.jpg" },
];

const INTERVAL = 4000;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export function ClientStrip() {
  const count = PHOTOS.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback(
    (delta: number) => {
      setActive((prev) => mod(prev + delta, count));
    },
    [count],
  );

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(id);
  }, [paused, go]);

  const indices = [-1, 0, 1].map((offset) => mod(active + offset, count));

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.92 }),
  };

  return (
    <div
      className="relative py-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Title */}
      <div className="text-center mb-10">
        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#D6A74A]/60">
          עסקאות שהושלמו
        </span>
      </div>

      {/* Gallery */}
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-3 gap-4 items-center">
          {indices.map((photoIdx, slotIdx) => {
            const isCenter = slotIdx === 1;
            const photo = PHOTOS[photoIdx];
            return (
              <motion.div
                key={photoIdx}
                layout
                animate={{
                  scale: isCenter ? 1 : 0.88,
                  opacity: isCenter ? 1 : 0.45,
                  filter: isCenter ? "blur(0px)" : "blur(1.5px)",
                }}
                transition={{ duration: 0.5, ease: [0.32, 0, 0.67, 0] }}
                className={`relative overflow-hidden rounded-2xl border cursor-pointer
                  ${isCenter
                    ? "aspect-[4/3] border-[#D6A74A]/25 shadow-2xl shadow-black/40"
                    : "aspect-[4/3] border-white/8"
                  }`}
                onClick={() => {
                  if (slotIdx === 0) go(-1);
                  if (slotIdx === 2) go(1);
                }}
              >
                <img
                  src={photo.src}
                  alt="עסקה שהושלמה"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    (e.currentTarget.parentElement as HTMLElement).classList.add("placeholder-card");
                  }}
                />

                {/* Gradient overlay on center */}
                {isCenter && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                )}

                {/* Center card gold bottom border glow */}
                {isCenter && (
                  <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D6A74A]/60 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Prev / Next buttons */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="הקודם"
          className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-5 size-9 rounded-full border border-white/10 bg-[#070b18]/80 backdrop-blur flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-all"
        >
          <ChevronRight className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="הבא"
          className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-5 size-9 rounded-full border border-white/10 bg-[#070b18]/80 backdrop-blur flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition-all"
        >
          <ChevronLeft className="size-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-7">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`תמונה ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === active
                ? "w-5 h-1.5 bg-[#D6A74A]"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Collaboration note */}
      <p className="text-center mt-7 text-xs text-white/35 font-light tracking-wide">
        המשרד עובד בשיתוף פעולה עם כלל משרדי התיווך בארץ
      </p>

      {/* Placeholder fallback style */}
      <style>{`
        .placeholder-card {
          background: linear-gradient(135deg, rgba(214,167,74,0.06), rgba(214,167,74,0.02));
        }
      `}</style>
    </div>
  );
}
