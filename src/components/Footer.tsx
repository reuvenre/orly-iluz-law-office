import type { Content } from "@/content/he";

export function Footer({ content }: { content: Content }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* ── Brand ── */}
          <div>
            <div className="text-base font-bold text-white tracking-tight">
              {content.brand.name}
            </div>
            <div className="mt-0.5 text-sm text-[#D6A74A]/70">
              {content.brand.subtitle}
            </div>
          </div>

          {/* ── Nav links ── */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {content.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ── Copyright ── */}
          <div className="text-sm text-white/40">
            © {year} {content.brand.name}.<br className="hidden md:block" />
            כל הזכויות שמורות.
          </div>
        </div>
      </div>
    </footer>
  );
}
