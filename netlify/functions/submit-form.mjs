const GHL_WEBHOOK_URL =
  process.env.GHL_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/avwG1Lu3Cfz5OlVbl3zy/webhook-trigger/17b08503-e51e-48a8-85db-615e7a8fbeb7";

const MAX_BODY_BYTES = 10_000;
const MIN_FORM_TIME_MS = 3_000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 8;
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_PROTECTED_SOURCES = new Set(["contact-page", "homepage-cta"]);
const rateLimit = new Map();

const allowedFields = new Set([
  "name",
  "email",
  "phone",
  "businessName",
  "websiteUrl",
  "service",
  "message",
  "city",
  "source",
  "resource",
  "timestamp",
]);

function json(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function getClientIp(req) {
  return (
    req.headers.get("x-nf-client-connection-ip") ||
    req.headers.get("client-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function isAllowedOrigin(req) {
  const origin = req.headers.get("origin");
  if (!origin) return true;

  try {
    const { hostname } = new URL(origin);
    return (
      hostname === "holywebs.com" ||
      hostname === "www.holywebs.com" ||
      hostname === "localhost" ||
      hostname === "127.0.0.1"
    );
  } catch {
    return false;
  }
}

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now - record.startedAt > RATE_LIMIT_WINDOW_MS) {
    rateLimit.set(ip, { count: 1, startedAt: now });
    return false;
  }

  record.count += 1;
  return record.count > RATE_LIMIT_MAX;
}

function hasSpamSignals(body) {
  const text = Object.values(body).filter(Boolean).join(" ").toLowerCase();
  const linkCount = (text.match(/https?:\/\//g) || []).length;
  const spamTerms = [
    "casino",
    "crypto",
    "forex",
    "loan",
    "porn",
    "viagra",
    "whatsapp",
    "telegram",
  ];

  return (
    linkCount > 2 ||
    spamTerms.some((term) => text.includes(term)) ||
    /(.)\1{12,}/.test(text)
  );
}

async function verifyTurnstile(body, ip) {
  if (!TURNSTILE_PROTECTED_SOURCES.has(body.source)) {
    return null;
  }

  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.warn("TURNSTILE_SECRET_KEY is not configured; skipping Turnstile verification.");
    return null;
  }

  if (!body.turnstileToken) {
    return "Verification required";
  }

  const formData = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: String(body.turnstileToken),
    remoteip: ip,
  });

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    });

    const result = await response.json();
    if (!response.ok || !result.success) {
      return "Verification failed";
    }
  } catch (err) {
    console.error("Turnstile verification error:", err);
    return "Verification failed";
  }

  return null;
}

async function validateSubmission(req, body, ip) {
  if (!isAllowedOrigin(req)) {
    return "Invalid origin";
  }

  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return "Submission too large";
  }

  if (body.company) {
    return "Spam detected";
  }

  const formStartedAt = Number(body._formStartedAt);
  const elapsed = Date.now() - formStartedAt;
  if (!Number.isFinite(formStartedAt) || elapsed < MIN_FORM_TIME_MS || elapsed > MAX_FORM_AGE_MS) {
    return "Invalid form timing";
  }

  if (!body.name || !body.email || !body.source) {
    return "Missing required fields";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) {
    return "Invalid email";
  }

  if (String(body.name).length > 100 || String(body.email).length > 255) {
    return "Invalid field length";
  }

  if (body.message && String(body.message).length > 2_000) {
    return "Invalid message length";
  }

  if (hasSpamSignals(body)) {
    return "Spam detected";
  }

  const turnstileError = await verifyTurnstile(body, ip);
  if (turnstileError) {
    return turnstileError;
  }

  return null;
}

function cleanPayload(body) {
  return Object.fromEntries(
    Object.entries(body)
      .filter(([key, value]) => allowedFields.has(key) && typeof value === "string")
      .map(([key, value]) => [key, value.trim()])
      .filter(([, value]) => value)
  );
}

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return json(429, { success: false, error: "Too many submissions" });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return json(400, { success: false, error: "Invalid JSON" });
  }

  const validationError = await validateSubmission(req, body, ip);
  if (validationError) {
    return json(400, { success: false, error: validationError });
  }

  try {
    const response = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleanPayload(body)),
    });

    if (!response.ok) {
      throw new Error(`GHL responded with ${response.status}`);
    }

    return json(200, { success: true });
  } catch (err) {
    console.error("GHL submission error:", err);
    return json(500, { success: false, error: "Submission failed" });
  }
}
