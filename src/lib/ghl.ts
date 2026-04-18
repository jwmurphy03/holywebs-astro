export interface GHLPayload {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  websiteUrl?: string;
  service?: string;
  message?: string;
  city?: string;
  source: string;
  [key: string]: string | undefined;
}

export async function postToGHL(data: GHLPayload): Promise<{ success: boolean }> {
  const payload: Record<string, string> = {};

  Object.entries({
    ...data,
    timestamp: new Date().toISOString(),
  }).forEach(([key, value]) => {
    if (value) payload[key] = value;
  });

  const response = await fetch("/.netlify/functions/submit-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Submission failed");
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error("Submission failed");
  }

  return result;
}
