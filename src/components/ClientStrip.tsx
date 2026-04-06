/**
 * ClientStrip — infinite seamless scrolling photo marquee.
 *
 * HOW TO ADD PHOTOS:
 * 1. Drop image files into /public/clients/  (jpg, png, webp)
 * 2. Add the path to the PHOTOS array below:
 *    "/clients/photo.jpg"
 * 3. Save — done.
 */

import React, { useState } from "react";

const PHOTOS: string[] = [
  "/clients/pic1.jpg",
  "/clients/pic2.jpg",
];

const PLACEHOLDER_COUNT = 8;

function PhotoCard({ src }: { src?: string }) {
  const [failed, setFailed] = useState(false);

  const showPlaceholder = !src || failed;

  return (
    <div className="shrink-0 size-28 md:size-32 rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03]">
      {showPlaceholder ? (
        <div className="w-full h-full bg-gradient-to-br from-[#D6A74A]/8 via-[#D6A74A]/4 to-transparent flex items-center justify-center">
          <svg className="size-8 text-[#D6A74A]/20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1" />
            <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1" />
            <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      ) : (
        <img
          src={src}
          alt="עסקה שהושלמה"
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function ClientStrip() {
  // Build the base list — real photos or placeholders
  const base: (string | undefined)[] =
    PHOTOS.length > 0
      ? PHOTOS
      : Array.from({ length: PLACEHOLDER_COUNT }, () => undefined);

  // Repeat enough times so the track is always much wider than any screen.
  // We then animate translateX(-50%) over exactly one set width = seamless loop.
  const repeated = [...base, ...base, ...base, ...base];

  return (
    <div className="relative py-10 overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-[#070b18] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-[#070b18] to-transparent" />

      {/* Title */}
      <div className="text-center mb-7">
        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#D6A74A]/60">
          עסקאות שהושלמו
        </span>
      </div>

      {/* Outer wrapper clips overflow, inner track animates */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 marquee-track hover:[animation-play-state:paused]"
          style={{ "--marquee-duration": `${base.length * 4}s` } as React.CSSProperties}
        >
          {repeated.map((src, i) => (
            <PhotoCard key={i} src={src} />
          ))}
        </div>
      </div>

      {/* Collaboration note */}
      <p className="text-center mt-7 text-xs text-white/35 font-light tracking-wide">
        המשרד עובד בשיתוף פעולה עם כלל משרדי התיווך בארץ
      </p>
    </div>
  );
}
