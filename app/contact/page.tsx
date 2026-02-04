"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center py-32 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl w-full">
        
        {/* Info Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-6xl font-display text-navy-900 mb-8 uppercase tracking-tight">Inquire</h1>
          <p className="font-body text-navy-900/60 text-lg mb-12 leading-relaxed max-w-md">
            To begin the conversation about your space, please provide a few details. We accept a limited number of commissions per season to ensure uncompromising quality.
          </p>
          
          <div className="space-y-4 font-display text-sm tracking-[0.2em] uppercase text-navy-900">
            <p>San Francisco &bull; Napa &bull; Silicon Valley</p>
            <p className="text-gold-500">hello@gloriouswalls.com</p>
            <p>(415) 555-0198</p>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <label className="text-xs font-display tracking-[0.2em] uppercase text-navy-900 block">Name</label>
            <input type="text" className="w-full bg-transparent border-b border-navy-900/20 py-4 text-navy-900 font-body focus:outline-none focus:border-gold-500 transition-colors" />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-display tracking-[0.2em] uppercase text-navy-900 block">Email</label>
            <input type="email" className="w-full bg-transparent border-b border-navy-900/20 py-4 text-navy-900 font-body focus:outline-none focus:border-gold-500 transition-colors" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-display tracking-[0.2em] uppercase text-navy-900 block">Project Details</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-navy-900/20 py-4 text-navy-900 font-body focus:outline-none focus:border-gold-500 transition-colors resize-none"></textarea>
          </div>

          <button className="px-12 py-5 bg-navy-900 text-cream font-display text-xs tracking-[0.25em] uppercase hover:bg-gold-500 transition-colors duration-500 w-full lg:w-auto mt-8">
            Submit Inquiry
          </button>
        </motion.form>

      </div>
    </div>
  );
}
