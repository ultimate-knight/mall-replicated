"use client";

import { GOLD } from "../../data/mallData";
import { cx } from "../../lib/mallUtils";

export function Container({ children, className = "" }) {
  return (
    <div
      className={cx(
        "relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Page({ children, className = "" }) {
  return (
    <section
      className={cx(
        "relative min-h-[100svh] overflow-hidden bg-[#060606]",
        className
      )}
    >
      {children}
    </section>
  );
}

export function Label({ children, color = GOLD }) {
  return (
    <p
      className="font-body text-[9px] font-semibold uppercase tracking-[0.32em] sm:text-[10px] sm:tracking-[0.38em]"
      style={{ color }}
    >
      {children}
    </p>
  );
}

export function PrimaryButton({ children, onClick, href, style }) {
  const cls =
    "inline-flex min-h-12 w-full items-center justify-center rounded-2xl px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] sm:w-auto sm:px-7 sm:py-4 sm:text-[11px] font-body";

  if (href) {
    return (
      <a href={href} className={cls} style={{ backgroundColor: GOLD, ...style }}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cls}
      style={{ backgroundColor: GOLD, ...style }}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/15 bg-white/[0.045] px-5 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#c9a26b]/60 hover:text-[#c9a26b] active:scale-[0.98] sm:w-auto sm:px-7 sm:py-4 sm:text-[11px] font-body",
        className
      )}
    >
      {children}
    </button>
  );
}

export function BackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400 backdrop-blur-xl transition hover:border-white/25 hover:text-white sm:px-4 sm:text-[10px] font-body"
    >
      <span className="text-base transition-transform group-hover:-translate-x-1">
        ←
      </span>
      Back to Hub
    </button>
  );
}
