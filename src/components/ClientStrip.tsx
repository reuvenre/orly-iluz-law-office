/**
 * ClientStrip — seamless infinite photo marquee (rAF-driven).
 *
 * HOW TO ADD PHOTOS:
 * 1. Drop image files into /public/clients/  (jpg, png, webp)
 * 2. Add the path to the PHOTOS array below.
 * 3. Save — done.
 */

import { useEffect, useRef } from "react";

const PHOTOS: string[] = [
  "/clients/pic1.jpg",
  "/clients/pic2.jpg",
  "/clients/pic3.jpg",
  "/clients/pic4.jpg",
  "/clients/pic5.jpg",
  "/clients/pic6.jpg",
  "/clients/pic7.jpg",
];

const SPEED = 0.45; // px per frame (~27px/s at 60fps)

export function ClientStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const rafRef = useRef(0);
  const pausedRef = useRef(true);

  useEffect(() => {
    // Preload all images before starting scroll
    let resolved = 0;
    PHOTOS.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        if (++resolved >= PHOTOS.length) pausedRef.current = false;
      };
      img.src = src;
    });
    // Fallback: start after 3s regardless
    const fallback = setTimeout(() => { pausedRef.current = false; }, 3000);

    const step = () => {
      const track = trackRef.current;
      if (track && !pausedRef.current) {
        xRef.current += SPEED;
        const half = track.scrollWidth / 2;
        if (xRef.current >= half) xRef.current = 0;
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

  // ×2 — one real set + one clone for seamless loop
  const items = [...PHOTOS, ...PHOTOS];

  return (
    <div className="relative py-10">
      {/* Title */}
      <div className="text-center mb-8">
        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#D6A74A]/60">
          עסקאות שהושלמו
        </span>
      </div>

      {/* Scrolling strip */}
      <div className="overflow-hidden">
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#070b18] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#070b18] to-transparent" />

          <div
            ref={trackRef}
            className="flex gap-4 will-change-transform"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            {items.map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-52 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 md:w-64"
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

      {/* Collaboration note */}
      <p className="text-center mt-8 text-xs text-white/30 font-light tracking-wide">
        המשרד עובד בשיתוף פעולה עם כלל משרדי התיווך בארץ
      </p>
    </div>
  );
}
