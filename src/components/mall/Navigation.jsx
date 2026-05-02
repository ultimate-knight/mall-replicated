"use client";

import { GOLD, SECTIONS } from "../../data/mallData";

export function FloatingNav({ view, setView }) {
  const items = [
    { id: "hub", label: "Hub" },
    ...SECTIONS.map((s) => ({ id: `section:${s.id}`, label: s.nav })),
    { id: "ai", label: "AI" },
    { id: "roi", label: "ROI" },
    { id: "contact", label: "Partner" },
  ];

  return (
    <nav
      className="fixed left-0 right-0 top-3 z-50 px-2 sm:px-3"
      aria-label="Experience navigation"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto rounded-full border border-white/10 bg-black/75 p-2 backdrop-blur-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max min-w-full items-center justify-start gap-1 sm:justify-center">
          {items.map((item) => {
            const active = view === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                className="font-body shrink-0 rounded-full px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.14em] transition sm:px-4 sm:text-[9px]"
                style={{
                  backgroundColor: active ? GOLD : "transparent",
                  color: active ? "#000" : "#8a8a8a",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function ViewDots({ view, setView }) {
  const dots = [
    { id: "hero", label: "Hero" },
    { id: "hub", label: "Hub" },
    { id: "ai", label: "AI" },
    { id: "roi", label: "ROI" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 hidden flex-col gap-2 md:flex">
      {dots.map((d) => (
        <button
          key={d.id}
          type="button"
          onClick={() => setView(d.id)}
          aria-label={`Go to ${d.label}`}
          className="h-2 rounded-full transition-all"
          style={{
            width: view === d.id ? 38 : 18,
            backgroundColor: view === d.id ? GOLD : "rgba(255,255,255,0.22)",
          }}
        />
      ))}
    </div>
  );
}
