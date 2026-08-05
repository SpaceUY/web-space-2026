import type { APIRoute } from "astro";

export const prerender = false;

// Brevo list ID — confirmed against Brevo → Contacts → Lists
const BREVO_LIST_ID = 3;

export const POST: APIRoute = async ({ request }) => {
  const { email, name } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = import.meta.env.BREVO_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Server misconfiguration" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body: Record<string, unknown> = {
    email,
    listIds: [BREVO_LIST_ID],
    updateEnabled: true,
  };

  if (name) {
    body.attributes = { FIRSTNAME: name };
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(body),
  });

  // 204 = already subscribed (updateEnabled handles it), 201 = new contact
  if (res.ok || res.status === 204) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const err = await res.json().catch(() => ({}));
  // Logged server-side only — Brevo's message can name the calling IP, and a 401
  // here usually means Brevo's authorised-IP restriction is blocking the caller
  // (see https://app.brevo.com/security/authorised_ips), not a bad key.
  console.error("Brevo error:", res.status, err);
  return new Response(JSON.stringify({ error: "Subscription failed" }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
};
