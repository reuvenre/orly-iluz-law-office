/**
 * ClientStrip — photo showcase.
 *
 * Desktop: seamless rAF-driven marquee.
 * Mobile:  single-image slideshow, auto-advances every 5 s.
 *
 * HOW TO ADD PHOTOS:
 * 1. Drop image files into /public/clients/  (jpg, png, webp)
 * 2. Add the path to the PHOTOS array below.
 * 3. Save — done.
 */

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const PHOTOS: string[] = [
  "/clients/pic1.jpg",
  "/clients/pic2.jpg",
  "/clients/pic3.jpg",
  "/clients/pic4.jpg",
  "/clients/pic5.jpg",
  "/clients/pic6.jpg",
  "/clients/pic7.jpg",
];

/* ─────────────────────────────────────────
   Mobile: single image, crossfade every 5 s
───────────────────────────────────────── */
function MobileSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % PHOTOS.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative mx-auto max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={PHOTOS[index]}
          alt="עסקה שהושלמה"
          loading="eager"
          width={512}
          height={384}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`size-1.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#D6A74A] w-4" : "bg-white/30"
            }`}
            aria-label={`תמונה ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Desktop: rAF-driven seamless marquee
───────────────────────────────────────── */
const SPEED = 0.45;

function DesktopMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const rafRef = useRef(0);
  const pausedRef = useRef(true);

  useEffect(() => {
    let resolved = 0;
    PHOTOS.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        if (++resolved >= PHOTOS.length) pausedRef.current = false;
      };
      img.src = src;
    });
    const fallback = setTimeout(() => { pausedRef.current = false; }, 3000);

    const step = () => {
      const track = trackRef.current;
      if (track && !pausedRef.current) {
        xRef.current += SPEED;
        // Use scrollWidth after layout is stable
        const half = track.scrollWidth / 2;
        if (half > 0 && xRef.current >= half) xRef.current -= half;
        track.style.transform = `translateX(-${xRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(fallback);
    };
  }, []);

  const items = [...PHOTOS, ...PHOTOS];

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#070b18] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#070b18] to-transparent" />
        <div
          ref={trackRef}
          dir="ltr"
          className="flex gap-4 will-change-transform"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-64 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
            >
              <img
                src={src}
                alt="עסקה שהושלמה"
                width={512}
                height={384}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  const el = e.currentTarget.parentElement as HTMLElement;
                  e.currentTarget.remove();
                  el.classList.add("bg-gradient-to-br", "from-[#D6A74A]/6", "to-transparent");
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main export
───────────────────────────────────────── */
export function ClientStrip() {
  return (
    <div className="relative py-10">
      <div className="text-center mb-8">
        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#D6A74A]/60">
          עסקאות שהושלמו
        </span>
      </div>

      {/* Mobile only */}
      <div className="px-4 md:hidden">
        <MobileSlideshow />
      </div>

      {/* Desktop only */}
      <div className="hidden md:block">
        <DesktopMarquee />
      </div>

      <p className="text-center mt-8 text-xs text-white/30 font-light tracking-wide">
        המשרד עובד בשיתוף פעולה עם כלל משרדי התיווך בארץ
      </p>
    </div>
  );
}
