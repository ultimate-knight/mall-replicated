"use client";

import { GOLD } from "../../data/mallData";
import { useEntrance, useLivePulse } from "../../hooks/mallHooks";
import {
  Container,
  Label,
  Page,
  PrimaryButton,
  SecondaryButton,
} from "./Common";
import { VideoBackground } from "./Backgrounds";

export default function Hero({ setView }) {
  const entered = useEntrance(120);
  const pulse = useLivePulse();
  const ticker = [
    "Video-first atmosphere",
    "Non-linear hub",
    "Real AI strategy builder",
    "Personal ROI engine",
    "Tenant journey",
    "Sponsor journey",
    "Event partner journey",
    "I need to be here",
  ];

  return (
    <Page>
      <VideoBackground src="/gerfug.mp4" tone="hero" />
      <Container className="flex min-h-[100svh] flex-col py-5 sm:py-6 md:py-8">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-display truncate text-[11px] font-semibold uppercase tracking-[0.38em] text-[#c9a26b]">
              Mall of America
            </p>
            <p className="mt-0.5 hidden font-body text-[9px] uppercase tracking-[0.26em] text-gray-500 sm:block">
              Partner Sales Experience
            </p>
          </div>
          <div className="flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" />
            <p className="font-body truncate text-[8px] uppercase tracking-[0.16em] text-gray-400 sm:text-[9px]">
              {pulse.toLocaleString()} visitors now
            </p>
          </div>
        </header>

        <div className="flex flex-1 items-end py-10 sm:py-14 md:py-16 lg:py-20">
          <div
            className="w-full max-w-5xl transition-all duration-1000"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateY(0)" : "translateY(38px)",
            }}
          >
            <Label>North America's retail capital</Label>
            <h1
              className="font-display mt-4 whitespace-pre-line font-bold leading-[0.88] tracking-[-0.04em] text-white sm:mt-5"
              style={{ fontSize: "clamp(3.4rem, 11vw, 10.5rem)" }}
            >
              {"Mall of\n"}
              <span style={{ color: GOLD }}>America</span>
            </h1>
            <p className="font-body mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base sm:leading-8 md:text-xl md:leading-9">
              An interactive commercial experience for tenants, sponsors, and
              event partners — built like an immersive sales tool, not a slide
              deck.
            </p>
            <div
              className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center"
              style={{ opacity: entered ? 1 : 0, transition: "opacity 800ms 200ms" }}
            >
              <PrimaryButton onClick={() => setView("hub")}>
                Open Experience →
              </PrimaryButton>
              <SecondaryButton onClick={() => setView("roi")}>
                Jump to ROI Moment
              </SecondaryButton>
              <SecondaryButton onClick={() => setView("ai")}>
                Try AI Builder
              </SecondaryButton>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-t border-white/10 pt-4">
          <div className="flex animate-ticker whitespace-nowrap">
            {[...ticker, ...ticker, ...ticker].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="font-body shrink-0 text-[9px] font-semibold uppercase tracking-[0.24em] text-gray-600"
              >
                {item}
                <span className="mx-6 text-[#c9a26b]/30 sm:mx-8">◆</span>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Page>
  );
}
