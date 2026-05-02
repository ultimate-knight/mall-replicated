"use client";

import { useEffect, useRef, useState } from "react";

export function useReducedMotion() {
  const [r, setR] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setR(m.matches);

    fn();
    m.addEventListener("change", fn);

    return () => m.removeEventListener("change", fn);
  }, []);

  return r;
}

export function useEntrance(delay = 80) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return entered;
}

export function useLivePulse() {
  const [p, setP] = useState(4870);

  useEffect(() => {
    const id = setInterval(
      () => setP(4870 + Math.round((Math.random() - 0.5) * 540)),
      3000
    );

    return () => clearInterval(id);
  }, []);

  return p;
}

export function useAnimatedNumber(value, duration = 700) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    const start = prev.current;
    const diff = value - start;
    const t0 = performance.now();
    let frame;

    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);

      setDisplay(start + diff * e);

      if (p < 1) frame = requestAnimationFrame(tick);
      else prev.current = value;
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return display;
}
