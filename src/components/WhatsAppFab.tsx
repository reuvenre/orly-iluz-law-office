import type { Content } from "@/content/he";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function buildWhatsAppUrl(numberE164: string, text: string) {
  const n = numberE164.replace(/[^\d]/g, "");
  const q = new URLSearchParams({ text }).toString();
  return `https://wa.me/${n}?${q}`;
}

export function WhatsAppFab({
  content,
  className,
}: {
  content: Content;
  className?: string;
}) {
  const url = buildWhatsAppUrl(
    content.links.whatsappNumberE164,
    content.links.whatsappPrefill,
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="פתיחת שיחה ב-WhatsApp"
      className={cn(
        "fixed bottom-5 left-5 z-50 inline-flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#0d1a14]/90 px-4 py-3 text-sm text-white shadow-xl shadow-black/30 backdrop-blur-md hover:bg-[#0d1a14] hover:border-[#25D366]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A74A] transition-all duration-200",
        className,
      )}
    >
      <span className="inline-flex size-8 items-center justify-center rounded-xl bg-[#25D366]/18 text-[#25D366]">
        <MessageCircle className="size-4" />
      </span>
      <span className="hidden sm:inline font-medium text-white/85">WhatsApp</span>
    </a>
  );
}
