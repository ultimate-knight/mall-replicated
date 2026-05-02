"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between max-[900px]:flex-col max-[900px]:gap-10 items-start w-full mt-40 p-10 text-white">

      {/* Left Section */}
      <div className="flex flex-col gap-5">
        <p className="text-2xl">MALL OF AMERICA</p>
        <p className="w-[20vw] text-gray-500">
          The nation's premier retail, entertainment, and experiential destination.
        </p>
        <p className="text-gray-500">
          60 East Broadway, Bloomington, MN 55425
        </p>
      </div>

      {/* Explore */}
      <div className="flex flex-col gap-5">
        <p className="text-2xl">Explore</p>
        <Link href="/Retail" className="text-gray-500 hover:text-[#c9a26b]">Retail</Link>
        <Link href="/Luxury" className="text-gray-500 hover:text-[#c9a26b]">Luxury</Link>
        <Link href="/Dining" className="text-gray-500 hover:text-[#c9a26b]">Dining</Link>
        <Link href="/Entertainment" className="text-gray-500 hover:text-[#c9a26b]">Entertainment</Link>
        <Link href="/Events" className="text-gray-500 hover:text-[#c9a26b]">Events</Link>
      </div>

      {/* Partner */}
      <div className="flex flex-col gap-5">
        <p className="text-2xl">Partner</p>
        <Link href="/Contact" className="text-gray-500 hover:text-[#c9a26b] cursor-pointer">Retail Leasing</Link>
        <Link href="/Contact" className="text-gray-500 hover:text-[#c9a26b] cursor-pointer">Brand Sponsorship</Link>
        <Link href="/Contact" className="text-gray-500 hover:text-[#c9a26b] cursor-pointer">Event Bookings</Link>
        <Link href="/Contact" className="text-gray-500 hover:text-[#c9a26b] cursor-pointer">Venue Rental</Link>
      </div>

      {/* Connect */}
      <div className="flex flex-col gap-5">
        <p className="text-2xl">Connect</p>
        <p className="text-gray-500">(952) 883-8800</p>
        <p className="text-gray-500">commercial@mallofamerica.com</p>
      </div>

    </footer>
  );
}