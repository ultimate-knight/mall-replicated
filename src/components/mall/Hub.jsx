"use client";

import { useEffect, useRef, useState } from "react";
import { BLACK, GOLD, OVERVIEW_STATS, SECTIONS } from "../../data/mallData";
import {
  useEntrance,
  useLivePulse,
  useReducedMotion,
} from "../../hooks/mallHooks";
import {
  Container,
  Label,
  Page,
  PrimaryButton,
  SecondaryButton,
} from "./Common";
import { AmbientBackground } from "./Backgrounds";

function HubCard({ section, setView }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduced) return;

    if (hovered) v.play().catch(() => {});
    else {
      v.pause();
      v.currentTime = 0;
    }
  }, [hovered, reduced]);

  return (
    <button
      type="button"
      onClick={() => setView(`section:${section.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative min-h-[280px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] text-left transition duration-500 hover:-translate-y-1 hover:border-white/25 sm:min-h-[320px] sm:rounded-[2rem]"
      style={{
        boxShadow: hovered
          ? `0 30px 110px ${section.accent}28`
          : "0 24px 80px rgba(0,0,0,0.35)",
      }}
    >
      {section.video && !reduced && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
        >
          <source src={section.video} type="video/mp4" />
        </video>
      )}

      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${section.accent}22, ${BLACK} 65%)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

      <div className="relative z-10 flex min-h-[280px] flex-col justify-between p-6 sm:min-h-[320px] sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <Label color={section.accent}>{section.persona}</Label>
          <span className="font-body shrink-0 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-gray-500 backdrop-blur-xl sm:text-[9px]">
            Explore
          </span>
        </div>

        <div>
          <h3 className="font-display whitespace-pre-line text-3xl font-bold leading-[0.94] tracking-[-0.03em] text-white sm:text-4xl">
            {section.title}
          </h3>
          <p className="font-body mt-3 text-sm leading-6 text-gray-400">
            {section.short}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {section.stats.slice(0, 3).map((s) => (
              <span
                key={s.label}
                className="font-body rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-gray-500 backdrop-blur-xl sm:text-[9px]"
              >
                <span style={{ color: section.accent }}>{s.value}</span> {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}

function FeatureCard({ type, setView }) {
  const DATA = {
    ai: {
      label: "Generative AI",
      title: "AI Strategy\nBuilder",
      copy:
        "Real Groq API. Choose your role, zone, and atmosphere — get a genuinely generated activation.",
      action: "Generate →",
      view: "ai",
      color: "#7dd3fc",
      symbol: "AI",
    },
    roi: {
      label: "Signature Moment",
      title: "I Need To\nBe Here",
      copy:
        "Turn abstract scale into your own projected business case. Live, personal, impossible to ignore.",
      action: "Model ROI →",
      view: "roi",
      color: GOLD,
      symbol: "$",
    },
    contact: {
      label: "Commercial CTA",
      title: "Partner\nWith MOA",
      copy: "Clear next steps for leasing, sponsorship, and event partnerships.",
      action: "Start →",
      view: "contact",
      color: "#f5efe5",
      symbol: "↗",
    },
  }[type];

  return (
    <button
      type="button"
      onClick={() => setView(DATA.view)}
      className="group relative min-h-[280px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 text-left transition duration-500 hover:-translate-y-1 hover:border-white/25 sm:min-h-[320px] sm:rounded-[2rem] sm:p-7"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 32% 16%, ${DATA.color}28, transparent 40%), linear-gradient(135deg, ${DATA.color}10, rgba(0,0,0,0.85))`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.05] transition group-hover:opacity-[0.1]">
        <span
          className="font-display text-[8rem] font-bold leading-none sm:text-[10rem]"
          style={{ color: DATA.color }}
        >
          {DATA.symbol}
        </span>
      </div>
      <div className="relative z-10 flex min-h-[232px] flex-col justify-between sm:min-h-[272px]">
        <Label color={DATA.color}>{DATA.label}</Label>
        <div>
          <h3 className="font-display whitespace-pre-line text-3xl font-bold leading-[0.94] tracking-[-0.03em] text-white sm:text-4xl">
            {DATA.title}
          </h3>
          <p className="font-body mt-3 text-sm leading-6 text-gray-400">
            {DATA.copy}
          </p>
          <p
            className="font-body mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] transition group-hover:translate-x-1"
            style={{ color: DATA.color }}
          >
            {DATA.action}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function Hub({ setView }) {
  const entered = useEntrance(80);
  const pulse = useLivePulse();

  return (
    <Page className="pb-20 pt-24 sm:pt-28 md:pb-24">
      <AmbientBackground />
      <Container>
        <div
          className="mb-6 grid gap-5 transition-all duration-700 md:mb-8 lg:grid-cols-[1fr_auto] lg:items-end"
          style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(22px)",
          }}
        >
          <div>
            <Label>Non-linear command center</Label>
            <h1 className="font-display mt-4 text-4xl font-bold leading-[0.9] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Let the viewer</span>
              <span className="block">choose the path.</span>
            </h1>
            <p className="font-body mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              A tenant, sponsor, or event partner jumps directly into the story
              that matters to them. Every path still leads to the same
              conclusion: this is where they need to be.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
            <div className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <p className="font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                {pulse.toLocaleString()} live visitors
              </p>
            </div>
            <PrimaryButton onClick={() => setView("contact")}>Partner →</PrimaryButton>
          </div>
        </div>

        <div className="mb-5 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Label>Storytelling arc</Label>
              <h2 className="font-display mt-3 text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                Scale → Energy → Strategy → Your Year
              </h2>
              <p className="font-body mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                Every route through this experience leads to the same
                destination: a personalized business case you can act on.
              </p>
            </div>
            <SecondaryButton onClick={() => setView("roi")} className="lg:w-auto">
              See the Climax →
            </SecondaryButton>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-4">
            {["Scale", "Energy", "AI Strategy", "ROI Moment"].map((s, i) => (
              <div key={s} className="rounded-2xl border border-white/10 bg-black/35 p-3">
                <span
                  className="font-body inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold text-black"
                  style={{ backgroundColor: GOLD }}
                >
                  {i + 1}
                </span>
                <p className="font-display mt-2 text-base font-bold text-white">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {SECTIONS.map((s) => (
            <HubCard key={s.id} section={s} setView={setView} />
          ))}
          <FeatureCard type="ai" setView={setView} />
          <FeatureCard type="roi" setView={setView} />
          <FeatureCard type="contact" setView={setView} />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {OVERVIEW_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:rounded-3xl sm:p-5"
            >
              <p
                className="font-display text-2xl font-bold leading-none sm:text-3xl lg:text-4xl"
                style={{ color: GOLD }}
              >
                {s.value}
              </p>
              <p className="font-body mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                {s.label}
              </p>
              <p className="font-body mt-1 text-xs leading-5 text-gray-600">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Page>
  );
}
