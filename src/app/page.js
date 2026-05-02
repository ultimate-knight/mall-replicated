"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SECTIONS } from "../data/mallData";
import Hero from "../components/mall/Hero";
import Hub from "../components/mall/Hub";
import SectionView from "../components/mall/SectionView";
import AIBuilder from "../components/mall/AIBuilder";
import ROIMoment from "../components/mall/ROIMoment";
import ContactView from "../components/mall/ContactView";
import { FloatingNav, ViewDots } from "../components/mall/Navigation";

export default function Home() {
  const [view, setView] = useState("hero");
  const touchStart = useRef(null);
  const activeSection = SECTIONS.find((s) => view === `section:${s.id}`);

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap";
    document.head.appendChild(fontLink);

    const style = document.createElement("style");
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; }
      html, body { margin: 0; padding: 0; background: #060606; color: #fff; overflow-x: hidden; }
      body { font-family: 'DM Sans', ui-sans-serif, sans-serif; }
      .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
      .font-body    { font-family: 'DM Sans', ui-sans-serif, sans-serif; }

      input[type="range"] { -webkit-appearance: none; appearance: none; outline: none; }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; appearance: none;
        width: 20px; height: 20px; border-radius: 999px;
        background: #c9a26b; border: 2px solid #060606;
        box-shadow: 0 0 18px rgba(201,162,107,0.55);
        transition: transform 0.15s, box-shadow 0.15s; cursor: pointer;
      }
      input[type="range"]::-webkit-slider-thumb:hover {
        transform: scale(1.2); box-shadow: 0 0 26px rgba(201,162,107,0.75);
      }
      input[type="range"]::-moz-range-thumb {
        width: 20px; height: 20px; border-radius: 999px;
        background: #c9a26b; border: 2px solid #060606; cursor: pointer;
      }

      @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
      .animate-ticker { animation: ticker 40s linear infinite; }

      @keyframes spin { to { transform: rotate(360deg); } }
      .animate-spin { animation: spin 0.9s linear infinite; }

      @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
      .animate-pulse { animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite; }

      @keyframes viewIn { from { opacity: 0; transform: translateY(14px) scale(0.997); } to { opacity: 1; transform: translateY(0) scale(1); } }
      .view-enter { animation: viewIn 500ms cubic-bezier(.22,1,.36,1) both; }

      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(style);
    };
  }, []);

  const handleTouchStart = useCallback((e) => {
    touchStart.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (touchStart.current === null) return;

      const dx = e.changedTouches[0].clientX - touchStart.current;

      if (Math.abs(dx) > 70) {
        if (dx > 0 && view !== "hero" && view !== "hub") setView("hub");
        if (dx < 0 && view === "hub") setView("roi");
      }

      touchStart.current = null;
    },
    [view]
  );

  return (
    <main
      className="min-h-[100svh] overflow-x-hidden bg-[#060606] text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {view !== "hero" && <FloatingNav view={view} setView={setView} />}
      <ViewDots view={view} setView={setView} />

      <div key={view} className="view-enter min-h-[100svh]">
        {view === "hero" && <Hero setView={setView} />}
        {view === "hub" && <Hub setView={setView} />}
        {activeSection && <SectionView section={activeSection} setView={setView} />}
        {view === "ai" && <AIBuilder setView={setView} />}
        {view === "roi" && <ROIMoment setView={setView} />}
        {view === "contact" && <ContactView setView={setView} />}
      </div>
    </main>
  );
}
