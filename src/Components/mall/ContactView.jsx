"use client";

import { CONTACTS, GOLD } from "../../data/mallData";
import {
  BackButton,
  Container,
  Label,
  Page,
  PrimaryButton,
  SecondaryButton,
} from "./Common";
import { AmbientBackground } from "./Backgrounds";

export default function ContactView({ setView }) {
  return (
    <Page className="pb-20 pt-24 sm:pt-28 md:pb-24">
      <AmbientBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,107,0.2),transparent_42%)]" />
      <Container className="flex min-h-[calc(100svh-7rem)] flex-col">
        <BackButton onClick={() => setView("hub")} />
        <div className="flex flex-1 flex-col justify-center py-10">
          <Label>Commercial next step</Label>
          <h1 className="font-display mt-5 text-4xl font-bold leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl lg:text-8xl">
            Partner with
            <br />
            <span style={{ color: GOLD }}>Mall of America.</span>
          </h1>
          <p className="font-body mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-xl md:leading-9">
            The experience ends with clear paths for tenants, sponsors, and
            event partners — not a vague final slide.
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {CONTACTS.map((c) => (
              <div
                key={c.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-[#c9a26b]/40 sm:rounded-[2rem] sm:p-8"
              >
                <h3 className="font-display text-2xl font-bold text-white">
                  {c.title}
                </h3>
                <p className="font-body mt-3 text-sm leading-7 text-gray-400">
                  {c.desc}
                </p>
                <a
                  href={`mailto:${c.email}`}
                  className="font-body mt-5 block break-all text-[10px] font-semibold uppercase tracking-[0.2em] hover:text-[#e8d5a3] transition-colors"
                  style={{ color: GOLD }}
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <PrimaryButton href="mailto:commercial@mallofamerica.com">
              Start the Conversation →
            </PrimaryButton>
            <SecondaryButton onClick={() => setView("roi")}>
              Review ROI Moment
            </SecondaryButton>
          </div>
        </div>
      </Container>
    </Page>
  );
}
