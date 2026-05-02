
"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

export default function Header() {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, label: "overview", href: "/" },
    { id: 2, label: "why moa", href: "/why-moa" },
    { id: 3, label: "Retail", href: "/Retail" },
    { id: 4, label: "Luxury", href: "/Luxury" },
    { id: 5, label: "Dining", href: "/Dining" },
    { id: 6, label: "Entertainment", href: "/Entertainment" },
    { id: 7, label: "Events", href: "/Events" },
  ];

  return (
    <>
      <header className="flex justify-between items-center font-[var(--font-playfair)] bg-gradient-to-r from-black/70 via-black/45 to-black/20 z-50 w-full relative">
        {/* LEFT */}
        <div className="flex flex-col gap-1 p-5">
          <p className="text-3xl text-[#c9a26b] font-bold">
            Mall of America
          </p>
          <p className="text-white text-sm">Interactive sales experience</p>
        </div>

        {/* DESKTOP MENU */}
        <div className="flex items-center max-[1025px]:hidden gap-6 text-lg p-5">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
              className={`relative whitespace-nowrap cursor-pointer transition-all duration-300 ${
                active === item.id ? "text-white" : "text-[#c9a26b]"
              }`}
            >
              {item.label}

              {active === item.id && (
                <div className="absolute left-0 top-7 h-[2px] w-full bg-[#c9a26b]" />
              )}
            </Link>
          ))}

          <Link
            href="/Contact"
            className="bg-[#c9a26b] rounded-lg px-4 py-2 uppercase whitespace-nowrap border border-black hover:bg-yellow-400 transition"
          >
            inquire
          </Link>
        </div>

        {/* MOBILE ICON */}
        <div className="hidden max-[1025px]:flex items-center p-5 z-[1001]">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[1000] hidden max-[1025px]:flex flex-col">
          {/* TOP BAR */}
          <div className="flex justify-between items-start p-5">
            <div className="flex flex-col gap-1">
              <p className="text-3xl text-[#c9a26b] font-bold">
                Mall of America
              </p>
              <p className="text-white text-sm">Interactive sales experience</p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-1 flex-col items-center justify-center gap-8 text-white text-3xl">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#c9a26b] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/Contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-[#c9a26b] px-6 py-3 rounded-lg uppercase text-black text-lg hover:bg-yellow-400 transition"
            >
              inquire
            </Link>
          </div>
        </div>
      )}
    </>
  );
}