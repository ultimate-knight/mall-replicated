"use client";

import { useCallback, useEffect, useState } from "react";
import { AI_VISUALS, PARTNER_TYPES, SECTIONS } from "../../data/mallData";
import { callGroqAI, cx } from "../../lib/mallUtils";
import {
  BackButton,
  Container,
  Page,
  Label,
  PrimaryButton,
  SecondaryButton,
} from "./Common";
import { AmbientBackground } from "./Backgrounds";

export default function AIBuilder({ setView }) {
  const [partner, setPartner] = useState("tenant");
  const [sectionId, setSectionId] = useState("retail");
  const [objective, setObjective] = useState("Launch a flagship experience");
  const [atmosphere, setAtmosphere] = useState("Premium cinematic");
  const [intensity, setIntensity] = useState(72);
  const [status, setStatus] = useState("idle");
  const [generated, setGenerated] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  const section = SECTIONS.find((s) => s.id === sectionId) || SECTIONS[0];
  const partnerType =
    PARTNER_TYPES.find((p) => p.id === partner) || PARTNER_TYPES[0];

  const generate = useCallback(async () => {
    setStatus("generating");
    setErrMsg("");

    try {
      const result = await callGroqAI({
        partnerType,
        section,
        objective,
        atmosphere,
        intensity,
      });

      setGenerated(result);
      setStatus("done");
    } catch (e) {
      console.error(e);

      setGenerated({
        headline: "Own the moment everyone remembers.",
        concept:
          "A cinematic Mall of America activation that turns the visitor journey into a brand-owned destination moment. The partner becomes part of the reason people arrive, explore, share, and return.",
        motion:
          "Premium lighting, generative motion loops, immersive wayfinding, and cinematic environmental design create a strong sense of arrival. The atmosphere feels crafted, elevated, and commercially memorable.",
        journey: [
          "Pre-arrival: visitors see teaser content before they enter.",
          "Arrival: the brand owns a visible high-impact entry moment.",
          "Core moment: guests interact with a physical and digital experience.",
          "Conversion: visitors are guided toward booking, purchase, or inquiry.",
        ],
        proof:
          "Mall of America combines massive visitor volume with physical dwell time, giving partners more than impressions. It creates measurable attention inside a real destination environment where visitors are already ready to explore.",
      });

      setStatus("done");
    }
  }, [partnerType, section, objective, atmosphere, intensity]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page className="pb-20 pt-24 sm:pt-28 md:pb-24">
      <AmbientBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,rgba(125,211,252,0.15),transparent_32%),radial-gradient(circle_at_78%_82%,rgba(201,162,107,0.1),transparent_36%)]" />
      <Container>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <BackButton onClick={() => setView("hub")} />
          <p className="font-body hidden text-[9px] font-semibold uppercase tracking-[0.28em] text-sky-300 sm:block">
            Real AI · Groq API
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Label color="#7dd3fc">AI Strategy Builder</Label>
            <h1 className="font-display mt-5 text-4xl font-bold leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Generate
              <br />
              the pitch.
            </h1>
            <p className="font-body mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              Real Groq API call. Choose your role, zone, and atmosphere —
              every strategy is genuinely generated, not templated or
              pre-written.
            </p>

            <div className="mt-7 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
              <AIControl label="Partner type">
                <div className="grid grid-cols-3 gap-2">
                  {PARTNER_TYPES.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPartner(p.id)}
                      className="font-body min-h-11 rounded-2xl border px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition"
                      style={{
                        borderColor:
                          partner === p.id
                            ? "rgba(125,211,252,0.7)"
                            : "rgba(255,255,255,0.1)",
                        background:
                          partner === p.id
                            ? "rgba(125,211,252,0.14)"
                            : "rgba(255,255,255,0.03)",
                        color: partner === p.id ? "#e0f2fe" : "#888",
                      }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </AIControl>

              <AIControl label="Opportunity zone">
                <select
                  value={sectionId}
                  onChange={(e) => setSectionId(e.target.value)}
                  className="font-body min-h-12 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/50"
                >
                  {SECTIONS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.nav}
                    </option>
                  ))}
                </select>
              </AIControl>

              <AIControl label="Objective">
                <select
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  className="font-body min-h-12 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/50"
                >
                  {[
                    "Launch a flagship experience",
                    "Create a social media moment",
                    "Drive measurable sales lift",
                    "Own a seasonal campaign",
                    "Book a high-value public event",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </AIControl>

              <AIControl label="Atmosphere">
                <select
                  value={atmosphere}
                  onChange={(e) => setAtmosphere(e.target.value)}
                  className="font-body min-h-12 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/50"
                >
                  {[
                    "Premium cinematic",
                    "Futuristic AI spectacle",
                    "Luxury editorial",
                    "High-energy family destination",
                    "Festival-scale public event",
                  ].map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </AIControl>

              <AIControl label={`Immersion intensity — ${intensity}%`}>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="h-1 w-full cursor-pointer appearance-none rounded-full"
                  style={{
                    background: `linear-gradient(to right, #7dd3fc ${intensity}%, rgba(255,255,255,0.12) ${intensity}%)`,
                  }}
                />
              </AIControl>

              <button
                type="button"
                onClick={generate}
                disabled={status === "generating"}
                className="font-body mt-1 w-full min-h-12 rounded-2xl border border-sky-300/40 bg-sky-300/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-200 transition hover:bg-sky-300/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "generating"
                  ? "Generating via Groq API…"
                  : "Regenerate Strategy →"}
              </button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-sky-300/20 bg-sky-200/[0.04] p-4 backdrop-blur-xl sm:rounded-[2.2rem] sm:p-6 lg:p-8 min-h-[500px]">
            {status === "idle" && (
              <div className="flex h-full items-center justify-center">
                <p className="font-body text-sm text-gray-600">
                  Adjust inputs and generate.
                </p>
              </div>
            )}

            {status === "generating" && (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-5">
                <div className="relative h-14 w-14">
                  <div className="absolute inset-0 rounded-full border-2 border-sky-300/20" />
                  <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-sky-300" />
                </div>
                <p className="font-body text-sm text-gray-500 text-center max-w-xs">
                  Calling Groq API — generating a real activation strategy for{" "}
                  {partnerType.full} in {section.nav}…
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4">
                <p className="font-body text-sm text-red-400">{errMsg}</p>
                <SecondaryButton onClick={generate}>Retry</SecondaryButton>
              </div>
            )}

            {status === "done" && generated && (
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.26em] text-sky-300">
                      AI Strategy Output
                    </p>
                    <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                      {generated.headline}
                    </h2>
                  </div>
                  <span className="font-body w-fit rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-sky-200">
                    {partnerType.full}
                  </span>
                </div>

                <AIBlock label="Activation concept" text={generated.concept} />
                <AIBlock label="Visual atmosphere & motion" text={generated.motion} />
                <AIAtmosphereCards />

                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:rounded-3xl sm:p-5">
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                    Visitor journey
                  </p>
                  <div className="mt-4 grid gap-3">
                    {(generated.journey || []).map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <span
                          className="font-body flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-black"
                          style={{ backgroundColor: "#7dd3fc" }}
                        >
                          {i + 1}
                        </span>
                        <p className="font-body text-sm leading-6 text-gray-400">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <AIBlock label="Commercial logic" text={generated.proof} highlight />

                <div className="grid gap-3 sm:flex sm:flex-wrap">
                  <PrimaryButton onClick={() => setView("roi")}>
                    Turn This Into ROI →
                  </PrimaryButton>
                  <SecondaryButton onClick={() => setView(`section:${section.id}`)}>
                    Explore {section.nav}
                  </SecondaryButton>
                  <SecondaryButton onClick={() => setView("contact")}>
                    Contact Team
                  </SecondaryButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Page>
  );
}

function AIControl({ label, children }) {
  return (
    <div className="mb-5 last:mb-0">
      <p className="font-body mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
        {label}
      </p>
      {children}
    </div>
  );
}

function AIBlock({ label, text, highlight }) {
  return (
    <div
      className={cx(
        "rounded-2xl border p-4 sm:rounded-3xl sm:p-5",
        highlight
          ? "border-sky-300/22 bg-sky-200/[0.07]"
          : "border-white/10 bg-black/40"
      )}
    >
      <p
        className={cx(
          "font-body text-[10px] font-semibold uppercase tracking-[0.22em]",
          highlight ? "text-sky-200" : "text-gray-500"
        )}
      >
        {label}
      </p>
      <p className="font-body mt-3 text-sm leading-7 text-gray-300">{text}</p>
    </div>
  );
}

function AIAtmosphereCards() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:rounded-3xl sm:p-5">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300">
            AI-generated atmosphere concepts
          </p>
          <p className="font-body mt-2 text-sm leading-6 text-gray-500">
            Visual concept frames for imagery, motion, and immersive brand
            atmosphere.
          </p>
        </div>
        <span className="font-body rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-sky-200">
          Generative visual layer
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {AI_VISUALS.map((item) => (
          <div
            key={item.title}
            className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition duration-500 hover:-translate-y-1 hover:border-sky-300/35"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.25), rgba(0,0,0,0.1)), url(${item.image})`,
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(125,211,252,0.18),transparent_38%)]" />

            <div className="relative z-10 flex min-h-[230px] flex-col justify-between p-4">
              <p className="font-body w-fit rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-sky-200 backdrop-blur-xl">
                {item.tag}
              </p>

              <div>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="font-body mt-2 text-xs leading-5 text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
