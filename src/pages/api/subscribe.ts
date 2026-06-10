import type { APIRoute } from "astro";

// Brevo list ID — update when confirmed
const BREVO_LIST_ID = 2; // TODO: replace with actual list ID from Brevo → Contacts → Lists

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
  console.error("Brevo error:", err);
  return new Response(JSON.stringify({ error: "Subscription failed" }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
};
