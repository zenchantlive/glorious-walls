"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      
      {/* Decorative Ornaments (Art Deco Corners) */}
      <div className="fixed inset-6 border border-navy-900/10 pointer-events-none z-50">
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-navy-900"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-navy-900"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-navy-900"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-navy-900"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-12 py-8 flex justify-between items-center bg-cream/90 backdrop-blur-sm">
        <span className="text-navy-900 font-display font-bold text-xl tracking-widest">GW</span>
        <div className="flex gap-12">
          {['Services', 'Gallery', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} 
                  className="text-navy-900/60 font-body text-xs tracking-[0.2em] uppercase hover:text-navy-900 transition-colors">
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Brand Mark (Diamond) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 45 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-20 h-20 border border-navy-900/20 flex items-center justify-center mb-16"
        >
          <div className="w-14 h-14 bg-navy-900 -rotate-45 flex items-center justify-center">
             <span className="text-cream font-display text-2xl">GW</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-6xl md:text-8xl font-display font-medium text-navy-900 uppercase tracking-tight mb-6"
        >
          Glorious Walls
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-body text-lg text-navy-900/60 italic tracking-wide mb-12 max-w-lg"
        >
          &quot;Impeccable wallcoverings for discerning spaces.&quot;
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex gap-6"
        >
          <Link href="/contact" className="px-8 py-4 bg-navy-900 text-cream font-body text-sm tracking-[0.2em] uppercase hover:bg-rose-300 hover:text-navy-900 transition-colors duration-500">
            Book Consultation
          </Link>
          <Link href="/gallery" className="px-8 py-4 border border-navy-900/20 text-navy-900 font-body text-sm tracking-[0.2em] uppercase hover:border-navy-900 transition-colors duration-500">
            View Work
          </Link>
        </motion.div>

      </main>

      {/* Decorative Accents (Blue/Rose) */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-rose-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl -z-10"></div>

    </div>
  );
}
