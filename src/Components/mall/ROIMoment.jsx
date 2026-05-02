"use client";

import { useEffect, useState } from "react";
import { GOLD, PARTNER_TYPES } from "../../data/mallData";
import { formatCompact, formatMoney } from "../../lib/mallUtils";
import { useAnimatedNumber } from "../../hooks/mallHooks";
import {
  BackButton,
  Container,
  Label,
  Page,
  PrimaryButton,
  SecondaryButton,
} from "./Common";
import { AmbientBackground } from "./Backgrounds";

export default function ROIMoment({ setView }) {
  const [typeIdx, setTypeIdx] = useState(0);
  const type = PARTNER_TYPES[typeIdx];
  const [ticket, setTicket] = useState(type.defaultTicket);
  const [capture, setCapture] = useState(type.defaultCapture);
  const [flash, setFlash] = useState(false);
  const VISITORS = 42_000_000;

  useEffect(() => {
    setTicket(type.defaultTicket);
    setCapture(type.defaultCapture);
  }, [type]);

  const reached = Math.round(VISITORS * (capture / 100));
  const opportunity = Math.round(reached * ticket);
  const animReached = useAnimatedNumber(reached);
  const animOpp = useAnimatedNumber(opportunity);

  useEffect(() => {
    setFlash(true);
    const id = setTimeout(() => setFlash(false), 320);
    return () => clearTimeout(id);
  }, [opportunity]);

  const ticketDisplay = ticket >= 1000 ? `$${Math.round(ticket / 1000)}K` : `$${ticket}`;
  const pct = (v, min, max) => ((v - min) / (max - min)) * 100;

  return (
    <Page className="pb-20 pt-24 sm:pt-28 md:pb-24">
      <AmbientBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(201,162,107,0.2),transparent_42%),radial-gradient(circle_at_10%_80%,rgba(201,162,107,0.1),transparent_32%)]" />
      <Container>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <BackButton onClick={() => setView("hub")} />
          <p
            className="font-body hidden text-[9px] font-semibold uppercase tracking-[0.28em] sm:block"
            style={{ color: GOLD }}
          >
            The "I Need To Be Here" Moment
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <Label>"I need to be here" moment</Label>
            <h1 className="font-display mt-5 text-4xl font-bold leading-[0.88] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">This is not</span>
              <span className="block">a mall.</span>
              <span className="block" style={{ color: GOLD }}>
                This is your year.
              </span>
            </h1>
            <p className="font-body mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              Adjust the inputs. Watch the number react. This is no longer Mall
              of America's statistic — it is your own projected business case,
              live, in real time.
            </p>

            <div className="mt-7 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
              <div className="mb-5">
                <p className="font-body mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                  Who is viewing this?
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {PARTNER_TYPES.map((p, i) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setTypeIdx(i)}
                      className="font-body min-h-11 rounded-2xl border px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition"
                      style={{
                        borderColor:
                          typeIdx === i ? GOLD : "rgba(255,255,255,0.1)",
                        background: typeIdx === i ? GOLD : "rgba(255,255,255,0.03)",
                        color: typeIdx === i ? "#000" : "#888",
                      }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <ROISlider
                label={type.ticketLabel}
                value={ticket}
                display={ticketDisplay}
                min={type.minTicket}
                max={type.maxTicket}
                step={type.stepTicket}
                pct={pct(ticket, type.minTicket, type.maxTicket)}
                onChange={setTicket}
              />
              <ROISlider
                label={type.captureLabel}
                value={capture}
                display={`${capture.toFixed(2).replace(/\.00$/, "")}%`}
                min={type.minCapture}
                max={type.maxCapture}
                step={type.stepCapture}
                pct={pct(capture, type.minCapture, type.maxCapture)}
                onChange={setCapture}
              />
            </div>
          </div>

          <div
            className="rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:rounded-[2.6rem] sm:p-8 lg:p-10"
            style={{
              borderColor: flash
                ? "rgba(201,162,107,0.75)"
                : "rgba(201,162,107,0.22)",
              background: flash ? "rgba(201,162,107,0.09)" : "rgba(201,162,107,0.04)",
              boxShadow: `0 40px 160px rgba(201,162,107,${flash ? "0.22" : "0.13"})`,
            }}
          >
            <p
              className="font-body text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: GOLD }}
            >
              Live business case
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4 sm:rounded-3xl sm:p-5">
              <p className="font-body text-[9px] font-semibold uppercase tracking-[0.22em] text-gray-600">
                Your projected annual audience
              </p>
              <p className="font-display mt-2 text-4xl font-bold leading-none text-white sm:text-5xl md:text-6xl">
                {formatCompact(animReached)}
              </p>
              <p className="font-body mt-1 text-[9px] uppercase tracking-[0.16em] text-gray-600">
                real people · physical presence · {capture.toFixed(2)}% capture
              </p>
            </div>

            <div className="mt-5">
              <p className="font-body text-[9px] font-semibold uppercase tracking-[0.22em] text-gray-600">
                {type.resultLabel}
              </p>
              <p
                className="font-display mt-1 break-words font-bold leading-none tracking-[-0.06em]"
                style={{
                  fontSize: "clamp(4rem, 12vw, 9.5rem)",
                  color: GOLD,
                  filter: flash ? "brightness(1.3)" : "brightness(1)",
                  transition: "filter 0.15s",
                }}
              >
                {formatMoney(animOpp)}
              </p>
              <p className="font-display mt-2 text-lg font-semibold italic text-gray-300 sm:text-xl">
                {type.closingLine}
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/40 p-4 sm:rounded-3xl sm:p-5">
              <p
                className="font-body text-[9px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: GOLD }}
              >
                Why this earns "I need to be here"
              </p>
              <p className="font-body mt-3 text-sm leading-7 text-gray-400">
                {type.story} The number is no longer an abstract mall statistic
                — it is their own projected year, campaign, or event. They can
                adjust it, refine it, and then they cannot un-see it.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <PrimaryButton onClick={() => setView("contact")}>
                Start the Conversation →
              </PrimaryButton>
              <SecondaryButton onClick={() => setView("ai")}>
                Generate Activation First
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </Page>
  );
}

function ROISlider({ label, value, display, min, max, step, pct, onChange }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
          {label}
        </p>
        <p className="font-display text-lg font-bold text-white">{display}</p>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none rounded-full"
        style={{
          background: `linear-gradient(to right, ${GOLD} ${pct}%, rgba(255,255,255,0.12) ${pct}%)`,
        }}
      />
      <div className="mt-1.5 flex justify-between">
        <span className="font-body text-[9px] text-gray-700">{min}</span>
        <span className="font-body text-[9px] text-gray-700">{max}</span>
      </div>
    </div>
  );
}
