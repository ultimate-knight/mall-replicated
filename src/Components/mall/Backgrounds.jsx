"use client";

import { useReducedMotion } from "../../hooks/mallHooks";
import { cx } from "../../lib/mallUtils";

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function VideoBackground({ src, tone = "dark" }) {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {src && !reduced ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(201,162,107,0.2),transparent_34%),linear-gradient(135deg,#151515,#000)]" />
      )}

      <div
        className={cx(
          "absolute inset-0",
          tone === "hero"
            ? "bg-gradient-to-t from-black via-black/60 to-black/20"
            : "bg-gradient-to-t from-black via-black/75 to-black/35"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.042] pointer-events-none"
        style={{ backgroundImage: GRAIN_SVG, backgroundSize: "160px" }}
      />
    </div>
  );
}

export function AmbientBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,107,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,162,107,1) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_42%_at_50%_0%,rgba(201,162,107,0.13),transparent_68%),radial-gradient(ellipse_50%_35%_at_82%_86%,rgba(106,181,200,0.07),transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-[0.028] pointer-events-none"
        style={{ backgroundImage: GRAIN_SVG, backgroundSize: "160px" }}
      />
    </>
  );
}
