export function cx(...c) {
  return c.filter(Boolean).join(" ");
}

export function formatMoney(v) {
  if (v >= 1e9) return `$${(v / 1e9).toFixed(1)}B`;
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`;
  if (v >= 1e3) return `$${Math.round(v / 1e3)}K`;
  return `$${Math.round(v).toLocaleString()}`;
}

export function formatCompact(v) {
  if (v >= 1e6) return `${(v / 1e6).toFixed(1)}M`;
  if (v >= 1e3) return `${Math.round(v / 1e3)}K`;
  return `${Math.round(v)}`;
}

export async function callGroqAI({
  partnerType,
  section,
  objective,
  atmosphere,
  intensity,
}) {
  const response = await fetch("/api/generate-strategy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      partnerType,
      section,
      objective,
      atmosphere,
      intensity,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Groq API failed");
  }

  return data;
}
