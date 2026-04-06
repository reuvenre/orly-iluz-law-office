import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import type { Content } from "@/content/he";
import { PhoneCall, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header({ content }: { content: Content }) {
  const [open, setOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070b18]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">

          {/* ── Logo ── */}
          <a href="#top" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <img
              src="/logo-orly.png"
              alt={content.brand.name}
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* ── Desktop nav ── */}
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

          {/* ── Desktop CTA + Mobile hamburger ── */}
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="secondary" className="hidden sm:inline-flex">
              <a href="#contact">
                <PhoneCall className="size-3.5" />
                {content.hero.ctaPrimary}
              </a>
            </Button>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "סגור תפריט" : "פתח תפריט"}
              className="md:hidden inline-flex items-center justify-center size-9 rounded-xl border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] transition-colors"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] inset-x-0 z-40 md:hidden border-b border-white/[0.07] bg-[#070b18]/97 backdrop-blur-md"
          >
            <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-1">
              {content.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-3 py-3 rounded-xl text-white/75 hover:text-white hover:bg-white/[0.05] transition-all text-base"
                >
                  {item.label}
                  <span className="size-1.5 rounded-full bg-[#D6A74A]/40" />
                </a>
              ))}
              <div className="mt-2 pt-3 border-t border-white/[0.07]">
                <Button asChild size="lg" variant="secondary" className="w-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    {content.hero.ctaPrimary}
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
