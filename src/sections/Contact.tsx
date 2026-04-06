import { type FormEvent, useMemo, useState } from "react";
import type { Content } from "@/content/he";
import { Button } from "@/components/ui/button";
import { submitLead } from "@/lib/lead";
import { toast } from "sonner";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

function normalizePhone(raw: string) {
  return raw.replace(/[^\d+]/g, "");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidName(name: string) {
  return name.trim().length >= 2;
}

function isValidPhone(phone: string) {
  const p = normalizePhone(phone);
  if (p.startsWith("+")) return p.length >= 10 && p.length <= 16;
  return /^\d{9,10}$/.test(p);
}

const inputClass =
  "h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#D6A74A] focus:border-transparent transition-all";

export function Contact({ content }: { content: Content }) {
  const c = content;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (name && !isValidName(name)) e.name = "נא להזין שם מלא (לפחות 2 תווים).";
    if (phone && !isValidPhone(phone)) e.phone = "נא להזין מספר טלפון תקין.";
    if (email && !isValidEmail(email)) e.email = "נא להזין כתובת מייל תקינה.";
    return e;
  }, [name, phone, email]);

  const canSubmit =
    isValidName(name) && isValidPhone(phone) && isValidEmail(email) && !loading;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    if (hp) return; // bot

    if (!canSubmit) {
      toast.error("בדקו את הפרטים ונסו שוב.");
      return;
    }

    setLoading(true);
    try {
      await submitLead({
        name: name.trim(),
        phone: normalizePhone(phone),
        email: email.trim(),
        message: message.trim() || undefined,
        meta: {
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          locale: navigator.language,
        },
      });
      toast.success("הפרטים נשלחו בהצלחה.", {
        description: "נחזור אליכם בהקדם.",
      });
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setHp("");
    } catch {
      toast.error("לא הצלחנו לשלוח את הפרטים.", {
        description: "נסו שוב בעוד רגע, או פנו אלינו ב-WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative">
      {/* Gold glow — center */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#D6A74A]/8 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 relative">
        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#D6A74A] mb-3"
          >
            צור קשר
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-3xl font-bold text-white md:text-4xl"
          >
            {c.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-3 text-white/55 max-w-xl mx-auto"
          >
            {c.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* ── Contact info column ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 space-y-3"
          >
            {/* Calendly */}
            <a
              href={c.links.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[#D6A74A]/20 bg-[#D6A74A]/5 px-5 py-4 text-sm text-white/80 hover:border-[#D6A74A]/40 hover:bg-[#D6A74A]/10 transition-all duration-200"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#D6A74A]/15 text-[#D6A74A]">
                <Calendar className="size-5" />
              </span>
              <div>
                <div className="font-medium text-white">{c.contact.calendlyLabel}</div>
                <div className="text-xs text-white/50 mt-0.5">תיאום מיידי</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${c.links.phoneTel}`}
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-4 text-sm text-white/75 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-200"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#123CFF]/12 text-[#AFC2FF]">
                <Phone className="size-4" />
              </span>
              <div>
                <div className="text-xs text-white/45 mb-0.5">{c.contact.phoneLabel}</div>
                <div className="font-medium text-white/85">{c.links.phoneTel}</div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${c.links.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-4 text-sm text-white/75 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-200"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#123CFF]/12 text-[#AFC2FF]">
                <Mail className="size-4" />
              </span>
              <div>
                <div className="text-xs text-white/45 mb-0.5">{c.contact.emailLabel}</div>
                <div className="font-medium text-white/85">{c.links.email}</div>
              </div>
            </a>

            {/* Address */}
            <a
              href="https://maps.google.com/?q=רחוב+הרוקמים+23+חולון"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-4 text-sm text-white/75 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-200"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#123CFF]/12 text-[#AFC2FF]">
                <MapPin className="size-4" />
              </span>
              <div>
                <div className="text-xs text-white/45 mb-0.5">{c.contact.addressLabel}</div>
                <div className="font-medium text-white/85">{c.links.address}</div>
              </div>
            </a>
          </motion.div>

          {/* ── Form column ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="md:col-span-8"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <div className="text-lg font-semibold text-white">
                {c.contact.formTitle}
              </div>
              <div className="mt-1.5 text-sm text-white/50">{c.contact.formNote}</div>

              <form onSubmit={onSubmit} className="mt-7 grid gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-white/70">שם מלא</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="איך נעים לפנות אליך?"
                    autoComplete="name"
                    inputMode="text"
                    required
                  />
                  {errors.name && (
                    <span className="text-xs text-[#F5D89B]">{errors.name}</span>
                  )}
                </label>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-white/70">טלפון</span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass}
                      placeholder="050-000-0000"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                    />
                    {errors.phone && (
                      <span className="text-xs text-[#F5D89B]">{errors.phone}</span>
                    )}
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-white/70">מייל</span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                      placeholder="name@email.com"
                      autoComplete="email"
                      inputMode="email"
                      required
                    />
                    {errors.email && (
                      <span className="text-xs text-[#F5D89B]">{errors.email}</span>
                    )}
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-white/70">
                    הודעה <span className="text-white/35">(אופציונלי)</span>
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-28 resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#D6A74A] focus:border-transparent transition-all"
                    placeholder="ספרו לנו בקצרה מה אתם צריכים."
                  />
                </label>

                {/* honeypot */}
                <label className="hidden">
                  <span>Company</span>
                  <input value={hp} onChange={(e) => setHp(e.target.value)} />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-1">
                  <Button
                    type="submit"
                    size="lg"
                    variant="secondary"
                    disabled={!canSubmit}
                    className="px-8 shadow-lg shadow-[#D6A74A]/15"
                  >
                    {loading ? "שולח…" : "שליחת פרטים"}
                  </Button>
                  <div className="text-xs text-white/40">
                    הטופס מיועד לפניות ענייניות. אין לשלוח מידע רגיש.
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
