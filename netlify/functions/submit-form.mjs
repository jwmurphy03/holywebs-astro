const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/avwG1Lu3Cfz5OlVbl3zy/webhook-trigger/17b08503-e51e-48a8-85db-615e7a8fbeb7";

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`GHL responded with ${response.status}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("GHL submission error:", err);
    return new Response(JSON.stringify({ success: false, error: "Submission failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

