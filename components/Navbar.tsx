"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-40 px-12 py-8 flex justify-between items-start pointer-events-none">
      {/* Left Menu */}
      <div className="pointer-events-auto flex flex-col gap-2">
        <Link href="/" className="text-gold-500 font-display text-sm tracking-[0.2em] uppercase hover:text-cream-100 transition-colors">
          Home
        </Link>
        <Link href="/services" className="text-gold-500 font-display text-sm tracking-[0.2em] uppercase hover:text-cream-100 transition-colors">
          Services
        </Link>
      </div>

      {/* Right Menu */}
      <div className="pointer-events-auto flex flex-col gap-2 text-right">
        <Link href="/gallery" className="text-gold-500 font-display text-sm tracking-[0.2em] uppercase hover:text-cream-100 transition-colors">
          Gallery
        </Link>
        <Link href="/contact" className="text-gold-500 font-display text-sm tracking-[0.2em] uppercase hover:text-cream-100 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
