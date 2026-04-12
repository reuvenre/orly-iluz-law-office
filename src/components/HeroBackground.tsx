// Animated city skyline — minimalist buildings with lit windows
// Relevant to real estate, elegant for a law firm, gold on dark
import './HeroBackground.css';

const GROUND_Y = 585;
const SVG_H = 620;
const SVG_W = 1200;

type Building = {
  x: number;
  w: number;
  h: number;
  winCols: number;
  winRows: number;
  animationClass: string;
};

// Deterministic window-lit pattern (no Math.random)
function isLit(bIdx: number, row: number, col: number): boolean {
  return ((bIdx * 13 + row * 7 + col * 11) % 5) !== 2;
}

const BUILDINGS: Building[] = [
  { x: 12,  w: 68,  h: 228, winCols: 3, winRows: 8,  animationClass: 'skylineFloat skyline-float-0' },
  { x: 90,  w: 48,  h: 168, winCols: 2, winRows: 6,  animationClass: 'skylineFloat skyline-float-1' },
  { x: 148, w: 88,  h: 308, winCols: 4, winRows: 11, animationClass: 'skylineFloat skyline-float-2' },
  { x: 246, w: 46,  h: 142, winCols: 2, winRows: 5,  animationClass: 'skylineFloat skyline-float-3' },
  { x: 302, w: 78,  h: 272, winCols: 3, winRows: 10, animationClass: 'skylineFloat skyline-float-4' },
  { x: 390, w: 54,  h: 192, winCols: 2, winRows: 7,  animationClass: 'skylineFloat skyline-float-5' },
  { x: 454, w: 114, h: 368, winCols: 5, winRows: 14, animationClass: 'skylineFloat skyline-float-6' },
  { x: 578, w: 64,  h: 212, winCols: 3, winRows: 8,  animationClass: 'skylineFloat skyline-float-7' },
  { x: 652, w: 84,  h: 288, winCols: 4, winRows: 11, animationClass: 'skylineFloat skyline-float-8' },
  { x: 746, w: 46,  h: 158, winCols: 2, winRows: 6,  animationClass: 'skylineFloat skyline-float-9' },
  { x: 802, w: 74,  h: 244, winCols: 3, winRows: 9,  animationClass: 'skylineFloat skyline-float-10' },
  { x: 886, w: 52,  h: 178, winCols: 2, winRows: 6,  animationClass: 'skylineFloat skyline-float-11' },
  { x: 948, w: 92,  h: 322, winCols: 4, winRows: 12, animationClass: 'skylineFloat skyline-float-12' },
  { x: 1050, w: 62, h: 202, winCols: 3, winRows: 8,  animationClass: 'skylineFloat skyline-float-13' },
  { x: 1122, w: 68, h: 172, winCols: 3, winRows: 6,  animationClass: 'skylineFloat skyline-float-14' },
];

const WIN_W = 7;
const WIN_H = 11;
const WIN_GAP_X = 16;
const WIN_GAP_Y = 22;
const WIN_PAD_X = 9;
const WIN_PAD_TOP = 18;

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-[0.065]"
      >
        {/* Ground line */}
        <line
          x1="0" y1={GROUND_Y}
          x2={SVG_W} y2={GROUND_Y}
          stroke="#D6A74A"
          strokeWidth="0.75"
          opacity="0.6"
        />

        {BUILDINGS.map((b, bIdx) => {
          const topY = GROUND_Y - b.h;

          return (
            <g key={bIdx} className={b.animationClass}>
              {/* Building outline */}
              <rect
                x={b.x}
                y={topY}
                width={b.w}
                height={b.h}
                stroke="#D6A74A"
                strokeWidth="0.7"
              />

              {/* Windows */}
              {Array.from({ length: b.winRows }).map((_, row) =>
                Array.from({ length: b.winCols }).map((_, col) => {
                  const wx = b.x + WIN_PAD_X + col * WIN_GAP_X;
                  const wy = topY + WIN_PAD_TOP + row * WIN_GAP_Y;

                  // Don't draw windows that overflow the building
                  if (wx + WIN_W > b.x + b.w - WIN_PAD_X) return null;
                  if (wy + WIN_H > GROUND_Y - 6) return null;

                  const lit = isLit(bIdx, row, col);
                  return (
                    <rect
                      key={`${row}-${col}`}
                      x={wx}
                      y={wy}
                      width={WIN_W}
                      height={WIN_H}
                      fill={lit ? "#D6A74A" : "transparent"}
                      stroke="#D6A74A"
                      strokeWidth="0.4"
                      opacity={lit ? 0.7 : 0.25}
                    />
                  );
                })
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
