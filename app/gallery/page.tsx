"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { id: 1, title: "Pacific Heights Manor", category: "Residential", color: "#1B2B44" },
  { id: 2, title: "Sausalito Penthouse", category: "Mural", color: "#2A3F5F" },
  { id: 3, title: "St. Regis Lobby", category: "Commercial", color: "#C87F59" },
  { id: 4, title: "Napa Valley Estate", category: "Texture", color: "#D4A6A0" },
  { id: 5, title: "Mission District Loft", category: "Modern", color: "#8CA5C4" },
  { id: 6, title: "Atherton Retreat", category: "Classic", color: "#A66240" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 px-6">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-display text-navy-900 mb-6 uppercase tracking-tight">Selected Works</h1>
        <p className="font-body text-navy-900/60 text-lg max-w-2xl mx-auto">
          A collection of spaces transformed. Each project represents a unique collaboration between client vision and our technical execution.
        </p>
      </motion.div>

      {/* Masonry-ish Grid */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group relative aspect-[3/4] overflow-hidden bg-navy-900 cursor-pointer"
          >
            {/* Placeholder Color Block (Replacing Image) */}
            <div 
              className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundColor: item.color }}
            >
               <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/40 transition-colors duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-cream/60 font-display text-xs tracking-[0.2em] uppercase mb-2">{item.category}</p>
                <h3 className="text-3xl font-display text-cream mb-4">{item.title}</h3>
                <div className="w-0 group-hover:w-16 h-px bg-gold-500 transition-all duration-700 delay-100"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
