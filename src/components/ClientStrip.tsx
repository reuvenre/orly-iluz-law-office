/**
 * ClientStrip — infinite auto-scrolling marquee of client photos.
 *
 * HOW TO ADD REAL PHOTOS:
 * 1. Drop image files into /public/clients/  (jpg, png, webp)
 * 2. Add an entry to the CLIENTS array below:
 *    { name: "שם הלקוח", label: "רכישת דירה", img: "/clients/photo.jpg" }
 * 3. Save — done.
 *
 * If `img` is omitted, a gold avatar with the first letter is shown instead.
 */

type Client = {
  name: string;
  label: string;
  img?: string;
};

const CLIENTS: Client[] = [
  { name: "א׳ כהן",    label: "רכישת דירה",        img: undefined },
  { name: "מ׳ לוי",    label: "מכירת נכס",          img: undefined },
  { name: "נ׳ מזרחי",  label: "התחדשות עירונית",    img: undefined },
  { name: "ר׳ שמעון",  label: "רכישת דירה",        img: undefined },
  { name: "ד׳ אברהם",  label: "עסקת קומבינציה",    img: undefined },
  { name: "י׳ בן דוד", label: "מכירת נכס",          img: undefined },
  { name: "ש׳ פרץ",    label: "התחדשות עירונית",    img: undefined },
  { name: "ת׳ גרוס",   label: "רכישת דירה",        img: undefined },
];

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3 shrink-0 w-52 hover:border-[#D6A74A]/25 transition-colors duration-300">
      {/* Photo or avatar */}
      {client.img ? (
        <img
          src={client.img}
          alt={client.name}
          className="size-11 rounded-full object-cover shrink-0 border border-white/10"
        />
      ) : (
        <div className="size-11 rounded-full bg-[#D6A74A]/10 border border-[#D6A74A]/20 flex items-center justify-center text-[#D6A74A] font-bold text-base shrink-0">
          {client.name.charAt(0)}
        </div>
      )}
      <div className="overflow-hidden">
        <div className="text-sm font-medium text-white truncate">{client.name}</div>
        <div className="text-xs text-white/45 font-light truncate">{client.label}</div>
      </div>
      {/* Checkmark badge */}
      <div className="mr-auto shrink-0 size-5 rounded-full bg-[#D6A74A]/10 border border-[#D6A74A]/25 flex items-center justify-center">
        <svg className="size-2.5 text-[#D6A74A]" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export function ClientStrip() {
  // Duplicate for seamless loop
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <div className="relative py-10 overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#070b18] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#070b18] to-transparent" />

      {/* Label */}
      <div className="text-center mb-6">
        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#D6A74A]/60">
          לקוחות שהשלימו עסקה
        </span>
      </div>

      {/* Scrolling track — pauses on hover */}
      <div className="flex gap-4 marquee-track hover:[animation-play-state:paused]">
        {doubled.map((client, i) => (
          <ClientCard key={i} client={client} />
        ))}
      </div>
    </div>
  );
}
