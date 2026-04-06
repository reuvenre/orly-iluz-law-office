/**
 * ClientStrip — seamless infinite photo marquee.
 *
 * HOW TO ADD PHOTOS:
 * 1. Drop image files into /public/clients/  (jpg, png, webp)
 * 2. Add the path to the PHOTOS array below.
 * 3. Save — done.
 */

import { useEffect, useState } from "react";

const PHOTOS: string[] = [
  "/clients/pic1.jpg",
  "/clients/pic2.jpg",
  "/clients/pic3.jpg",
  "/clients/pic4.jpg",
  "/clients/pic5.jpg",
  "/clients/pic6.jpg",
  "/clients/pic7.jpg",
];

export function ClientStrip() {
  const [ready, setReady] = useState(false);
  // ×2 — one real set + one clone for seamless loop. Animation moves exactly -50%.
  const items = [...PHOTOS, ...PHOTOS];

  // Preload all images via JS; start animation once every image resolves (load or error).
  useEffect(() => {
    let resolved = 0;
    const total = PHOTOS.length;
    const done = () => {
      resolved++;
      if (resolved >= total) setReady(true);
    };
    PHOTOS.forEach((src) => {
      const img = new Image();
      img.onload = done;
      img.onerror = done;
      img.src = src;
    });
    // Safety fallback — show after 4 s regardless
    const t = setTimeout(() => setReady(true), 4000);
    return () => clearTimeout(t);
  }, []);

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
        {/* Fade edges */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#070b18] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#070b18] to-transparent" />

          <div className={`flex gap-5 marquee-photos${ready ? "" : " paused"}`}>
            {items.map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-56 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 md:w-64"
              >
                <img
                  src={src}
                  alt="עסקה שהושלמה"
                  loading="eager"
                  decoding="async"
                  width={512}
                  className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
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
