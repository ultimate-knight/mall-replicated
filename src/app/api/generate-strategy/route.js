import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { partnerType, section, objective, atmosphere, intensity } =
      await req.json();

    const prompt = `You are a senior commercial strategist for Mall of America — North America's largest retail, dining, and entertainment destination: 42M+ annual visitors, 520+ stores, 5.6M sq ft, $2B+ economic impact.

A ${partnerType.full} is exploring a ${section.nav} partnership at Mall of America.
Objective: "${objective}"
Desired atmosphere: "${atmosphere}"
Immersion intensity: ${intensity}% (100% = full cinematic spectacle, 20% = refined ambient)

Write a sharp, emotionally compelling commercial activation strategy.

Respond ONLY with valid JSON.
Do not use markdown.
Do not include comments.
Do not include trailing commas.
Do not use unescaped quotation marks inside string values.
All property names and string values must use double quotes.

{
  "headline": "One punchy sentence that makes them feel they need to be here, max 12 words, present tense, urgent",
  "concept": "2-3 sentences describing the specific activation concept for ${section.nav} at Mall of America",
  "motion": "2 sentences describing the visual atmosphere, generative motion, and environmental direction at ${intensity}% immersion",
  "journey": [
    "Pre-arrival: one specific step",
    "Arrival: one specific step",
    "Core moment: one specific step connecting to ${section.nav}",
    "Conversion: one specific step"
  ],
  "proof": "2-3 sentences of commercial logic explaining why this ${partnerType.full} + ${section.nav} combination creates stronger results at Mall of America than anywhere else"
}`;

    const aiResponse = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a premium commercial strategist. Always return only valid JSON. No markdown. No explanation.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 1000,
    });

    const text = aiResponse.choices?.[0]?.message?.content || "{}";
    const clean = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return Response.json(JSON.parse(clean));
  } catch (error) {
    return Response.json(
      {
        error: error.message || "Groq generation failed",
      },
      { status: 500 }
    );
  }
}
