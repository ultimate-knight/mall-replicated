"use client";

import { useEntrance } from "../../hooks/mallHooks";
import {
  BackButton,
  Container,
  Label,
  Page,
  PrimaryButton,
  SecondaryButton,
} from "./Common";
import { VideoBackground } from "./Backgrounds";

export default function SectionView({ section, setView }) {
  const entered = useEntrance(80);

  return (
    <Page>
      <VideoBackground src={section.video} />
      <Container className="flex min-h-[100svh] flex-col pb-16 pt-24 sm:pt-28">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <BackButton onClick={() => setView("hub")} />
          <p
            className="font-body hidden text-[9px] font-semibold uppercase tracking-[0.28em] sm:block"
            style={{ color: section.accent }}
          >
            Mall of America — {section.nav}
          </p>
        </div>

        <div className="flex flex-1 items-end py-10 sm:py-14">
          <div className="grid w-full gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div
              className="transition-all duration-700"
              style={{
                opacity: entered ? 1 : 0,
                transform: entered ? "translateY(0)" : "translateY(26px)",
              }}
            >
              <Label color={section.accent}>{section.persona} opportunity</Label>
              <h1
                className="font-display mt-5 whitespace-pre-line font-bold leading-[0.9] tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
              >
                {section.title}
              </h1>
              <p className="font-body mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8 md:text-xl md:leading-9">
                {section.body}
              </p>
              <p
                className="font-body mt-5 max-w-2xl border-l-2 pl-5 text-sm italic leading-7 text-gray-400"
                style={{ borderColor: section.accent }}
              >
                {section.emotional}
              </p>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <PrimaryButton
                  onClick={() => setView("ai")}
                  style={{ backgroundColor: section.accent }}
                >
                  Generate AI Activation →
                </PrimaryButton>
                <SecondaryButton onClick={() => setView("roi")}>
                  See Your Business Case
                </SecondaryButton>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
              {section.stats.map((s, i) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl transition-all duration-700 sm:rounded-3xl sm:p-5"
                  style={{
                    opacity: entered ? 1 : 0,
                    transform: entered ? "translateY(0)" : "translateY(22px)",
                    transitionDelay: `${i * 90}ms`,
                  }}
                >
                  <p
                    className="font-display text-3xl font-bold leading-none sm:text-4xl"
                    style={{ color: section.accent }}
                  >
                    {s.value}
                  </p>
                  <p className="font-body mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Page>
  );
}
