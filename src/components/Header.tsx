import { Button } from "@/components/ui/button";
import type { Content } from "@/content/he";
import { PhoneCall } from "lucide-react";

export function Header({ content }: { content: Content }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070b18]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        {/* ── Logo ── */}
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="text-base font-bold text-white tracking-tight group-hover:text-white/90 transition-colors">
            {content.brand.name}
          </span>
          <span className="hidden sm:block text-sm text-[#D6A74A]/70 font-normal">
            {content.brand.subtitle}
          </span>
        </a>

        {/* ── Nav ── */}
        <nav className="hidden items-center gap-7 md:flex">
          {content.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 right-0 w-0 h-px bg-[#D6A74A] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* ── CTA buttons ── */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex"
          >
            <a href="#contact">
              <PhoneCall className="size-3.5" />
              {content.hero.ctaPrimary}
            </a>
          </Button>
          <Button asChild size="sm" variant="secondary">
            <a href="#contact">{content.hero.ctaPrimary}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
