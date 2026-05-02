"use client";

<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";



const overviewStats = [
  { value: "42M+", label: "Annual Visitors" },
  { value: "520+", label: "Stores & Attractions" },
  { value: "5.6M", label: "Square Feet" },
  { value: "$2B+", label: "Economic Impact" },
];

const retailStats = [
  { value: "96%", label: "Occupancy Rate" },
  { value: "520+", label: "Stores & Attractions" },
  { value: "$850", label: "Avg Spend Per Visit" },
  { value: "3.1hr", label: "Average Dwell Time" },
];

const luxuryStats = [
  { value: "$145K+", label: "Avg HHI Luxury Shopper" },
  { value: "4.2hr", label: "Avg Dwell Time" },
  { value: "38%", label: "YoY Sales Growth" },
  { value: "92%", label: "Brand Awareness Lift" },
];

const diningStats = [
  { value: "60+", label: "Dining Concepts" },
  { value: "$38", label: "Average Check Size" },
  { value: "85%", label: "Visitors Who Dine" },
  { value: "18%", label: "Revenue from F&B" },
];

const entertainmentStats = [
  { value: "7", label: "Major Attractions" },
  { value: "7 Acres", label: "Indoor Theme Park" },
  { value: "30+", label: "Rides & Experiences" },
  { value: "12M+", label: "Entertainment Visits" },
];

const eventsStats = [
  { value: "400+", label: "Annual Events" },
  { value: "5,000+", label: "Max Venue Capacity" },
  { value: "3B+", label: "Media Impressions" },
  { value: "200+", label: "Brand Activations" },
];



function SectionLabel({ children }) {
  return (
    <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.35em] text-[#c9a26b]">
      {children}
    </p>
  );
}

function StatGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:gap-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 backdrop-blur-sm"
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            {item.value}
          </p>
          <p className="mt-2 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function SlideShell({ children, video, overlay = "bg-black/45" }) {
  return (
    <section className="relative min-w-full h-screen flex items-center overflow-hidden">
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : null}
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-28">
        {children}
      </div>
    </section>
  );
}



export default function Home() {
  const [current, setCurrent] = useState(0);
  const total = 8;
  const wheelLockRef = useRef(false);
  const wheelTimerRef = useRef(null);

  useEffect(() => {
    const goNext = () => setCurrent((p) => Math.min(p + 1, total - 1));
    const goPrev = () => setCurrent((p) => Math.max(p - 1, 0));

    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    const handleWheel = (e) => {
      if (wheelLockRef.current) return;

      wheelLockRef.current = true;

      if (e.deltaY > 0) goNext();
      else goPrev();

      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = setTimeout(() => {
        wheelLockRef.current = false;
      }, 700);
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("wheel", handleWheel);
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden bg-black text-white">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {/* OVERVIEW */}
        <SlideShell video="/gerfug.mp4" overlay="bg-black/40">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="max-w-4xl">
              <SectionLabel>North America’s retail capital</SectionLabel>
              <h1 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-extrabold leading-[0.95]">
                Mall of <span className="text-[#c9a26b]">America</span>
              </h1>
              <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-2xl leading-7 md:leading-8 text-gray-300">
                The nation’s largest retail, entertainment, and experiential
                destination. 5.6 million square feet of opportunity for brands,
                sponsors, and event partners.
              </p>
            </div>

            <StatGrid items={overviewStats} />

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={() => setCurrent(7)}
                className="rounded-lg bg-[#c9a26b] px-6 sm:px-8 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#ddb57b]"
              >
                Partner With Us
              </button>
              <button
                type="button"
                onClick={() => setCurrent(1)}
                className="rounded-lg border border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#c9a26b] hover:text-[#c9a26b]"
              >
                Explore the Opportunity
              </button>
            </div>
          </div>
        </SlideShell>

        {/* WHY MOA */}
        <SlideShell video="/legerd.mp4" overlay="bg-black/45">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="max-w-4xl">
              <SectionLabel>The Opportunity</SectionLabel>
              <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                Why Mall of <span className="text-[#c9a26b]">America</span>
              </h2>
              <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-2xl leading-7 md:leading-8 text-gray-300">
                A commercial platform reaching 42 million visitors annually
                across the heart of America. This is not just retail square
                footage. It is a regional draw, a tourism engine, and a business
                platform built for visibility, conversion, and scale.
              </p>
            </div>

            <StatGrid items={overviewStats} />
          </div>
        </SlideShell>

        {/* RETAIL */}
        <SlideShell video="/mall-video5.mp4" overlay="bg-black/45">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="max-w-4xl">
              <SectionLabel>Retail</SectionLabel>
              <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-7xl font-bold">
                Retail <span className="text-[#c9a26b]">Reimagined</span>
              </h2>
              <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-2xl leading-7 md:leading-8 text-gray-300">
                520+ world-class stores, exceptional dwell time, and strong spend
                per visit position Mall of America as a retail ecosystem built
                for visibility, scale, and measurable commercial performance.
              </p>
            </div>

            <StatGrid items={retailStats} />
          </div>
        </SlideShell>

        {/* LUXURY */}
        <SlideShell video="/mal-luxury1.mp4" overlay="bg-black/45">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="max-w-4xl">
              <SectionLabel>Luxury</SectionLabel>
              <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-7xl font-bold">
                The Luxury <span className="text-[#c9a26b]">Collection</span>
              </h2>
              <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-2xl leading-7 md:leading-8 text-gray-300">
                An architecturally distinct wing featuring the world’s most
                prestigious brands, elevated service, and measurable growth for
                tenants seeking both prestige and performance.
              </p>
            </div>

            <StatGrid items={luxuryStats} />
          </div>
        </SlideShell>

        {/* DINING */}
        <SlideShell video="/mall-dine1.mp4" overlay="bg-black/45">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="max-w-4xl">
              <SectionLabel>Dining & Lifestyle</SectionLabel>
              <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-7xl font-bold">
                A Culinary <span className="text-[#c9a26b]">Destination</span>
              </h2>
              <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-2xl leading-7 md:leading-8 text-gray-300">
                More than 60 dining experiences transform food into a primary
                reason to visit. Dining extends dwell time, broadens audience
                appeal, and turns the property into a lifestyle destination
                rather than a stop on a shopping trip.
              </p>
            </div>

            <StatGrid items={diningStats} />
          </div>
        </SlideShell>

        {/* ENTERTAINMENT */}
        <SlideShell video="/mall-entertain1.mp4" overlay="bg-black/45">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="max-w-4xl">
              <SectionLabel>Entertainment & Attractions</SectionLabel>
              <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-7xl font-bold">
                Beyond <span className="text-[#c9a26b]">Retail</span>
              </h2>
              <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-2xl leading-7 md:leading-8 text-gray-300">
                World-class attractions generate footfall no standalone retailer
                could create on its own. Entertainment is not an add-on here —
                it is one of the core engines of repeat visitation and spend.
              </p>
            </div>

            <StatGrid items={entertainmentStats} />
          </div>
        </SlideShell>

        {/* EVENTS */}
        <SlideShell video="/mall-event1.mp4" overlay="bg-black/45">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="max-w-4xl">
              <SectionLabel>Events & Activations</SectionLabel>
              <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-7xl font-bold">
                A Global <span className="text-[#c9a26b]">Stage</span>
              </h2>
              <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-2xl leading-7 md:leading-8 text-gray-300">
                More than 400 annual events transform Mall of America into a
                live platform for culture, commerce, sponsorship, celebrity
                moments, and brand storytelling.
              </p>
            </div>

            <StatGrid items={eventsStats} />
          </div>
        </SlideShell>

        {/* CONTACT */}
        <SlideShell overlay="bg-[radial-gradient(circle_at_top,_rgba(201,162,107,0.18),_transparent_35%),linear-gradient(to_bottom,_#080808,_#000)]">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="max-w-4xl">
              <SectionLabel>Let’s Build Together</SectionLabel>
              <h2 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-7xl font-bold">
                Partner With <span className="text-[#c9a26b]">Mall of America</span>
              </h2>
              <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-2xl leading-7 md:leading-8 text-gray-300">
                Whether you’re looking to lease space, sponsor experiences, or
                book world-class venues, the opportunity starts here. Existing
                CTA content already supports retail leasing, brand sponsorship,
                and event bookings as the core paths.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-semibold">Retail Leasing</p>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-gray-400">
                  Flagship stores, inline retail, pop-ups, and kiosk
                  opportunities across 5.6M sq ft.
                </p>
                <p className="mt-4 sm:mt-6 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#c9a26b] break-all">
                  leasing@mallofamerica.com
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-semibold">Brand Sponsorship</p>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-gray-400">
                  Title partnerships, experiential activations, and co-branded
                  programming reaching 42M+ visitors.
                </p>
                <p className="mt-4 sm:mt-6 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#c9a26b] break-all">
                  partnerships@mallofamerica.com
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-semibold">Event Bookings</p>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-gray-400">
                  Concerts, product launches, corporate events, and venue-led
                  experiences across multiple formats.
                </p>
                <p className="mt-4 sm:mt-6 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#c9a26b] break-all">
                  events@mallofamerica.com
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="mailto:commercial@mallofamerica.com"
                className="rounded-lg bg-[#c9a26b] px-6 sm:px-8 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#ddb57b]"
              >
                Start the Conversation
              </a>
              <button
                type="button"
                onClick={() => setCurrent(1)}
                className="rounded-lg border border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#c9a26b] hover:text-[#c9a26b]"
              >
                See the Data
              </button>
            </div>
          </div>
        </SlideShell>
      </div>

      {/* PAGE COUNT */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-30 text-xs sm:text-sm text-gray-400">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      {/* DOT NAV */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              current === i
                ? "w-8 sm:w-10 bg-[#c9a26b]"
                : "w-6 sm:w-8 bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() => setCurrent((p) => Math.max(p - 1, 0))}
        className="fixed left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 z-30
        h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16
        rounded-full border border-white/20 bg-white/10 backdrop-blur-md
        flex items-center justify-center
        text-lg sm:text-xl md:text-2xl
        hover:bg-[#c9a26b] hover:text-black transition"
      >
        ←
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => setCurrent((p) => Math.min(p + 1, total - 1))}
        className="fixed right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 z-30
        h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16
        rounded-full border border-white/20 bg-white/10 backdrop-blur-md
        flex items-center justify-center
        text-lg sm:text-xl md:text-2xl
        hover:bg-[#c9a26b] hover:text-black transition"
      >
        →
      </button>
    </main>
  );
}
=======
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
>>>>>>> 821f6f3 (making final commit)
