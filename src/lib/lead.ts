export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  message?: string;
  consent?: boolean;
  meta?: {
    pageUrl?: string;
    userAgent?: string;
    locale?: string;
  };
};

function withTimeout(ms: number) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  return { controller, clear: () => clearTimeout(id) };
}

export async function submitLead(payload: LeadPayload) {
  const url = import.meta.env.VITE_LEAD_WEBHOOK_URL as string | undefined;
  if (!url) {
    throw new Error("Missing VITE_LEAD_WEBHOOK_URL");
  }

  const { controller, clear } = withTimeout(12_000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Webhook error (${res.status}): ${text || "Request failed"}`);
    }
  } finally {
    clear();
  }
}

