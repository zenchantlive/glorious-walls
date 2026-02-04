"use client";

import { motion } from "framer-motion";
import { Ruler, Palette, Crown, Home, Building2, Paintbrush } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Residential Installation",
    description: "Transforming living spaces with precision. From powder rooms to grand staircases, we handle delicate papers with white-glove care.",
    icon: Home,
    price: "Custom Quote",
  },
  {
    id: 2,
    title: "Commercial Projects",
    description: "Scalable solutions for boutiques, hotels, and offices. Durable materials installed to withstand high traffic without compromising elegance.",
    icon: Building2,
    price: "Project Based",
  },
  {
    id: 3,
    title: "Artistic Finishes",
    description: "Specialized installation for murals, hand-painted scenes, and textured grasscloths that require master-level craftsmanship.",
    icon: Palette,
    price: "Premium Tier",
  },
  {
    id: 4,
    title: "Consultation",
    description: "Expert advice on material selection, surface preparation, and quantities. We ensure your vision is executable.",
    icon: Ruler,
    price: "$150 / Hour",
  },
  {
    id: 5,
    title: "Restoration",
    description: "Careful repair of damaged vintage papers. We match patterns and textures to seamlessly blend the new with the old.",
    icon: Paintbrush,
    price: "On Assessment",
  },
  {
    id: 6,
    title: "White Glove Service",
    description: "Full room preparation, furniture protection, and immaculate cleanup. We leave your space cleaner than we found it.",
    icon: Crown,
    price: "Included",
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 px-6">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-display text-navy-900 mb-6 uppercase tracking-tight">Our Expertise</h1>
        <div className="h-px w-24 bg-navy-900/20 mx-auto mb-8"></div>
        <p className="font-body text-navy-900/60 text-lg leading-relaxed">
          We don't just hang paper; we curate atmosphere. Each service is executed with an obsession for detail and a reverence for the materials.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-900/10 border border-navy-900/10">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-cream p-12 hover:bg-white transition-colors duration-500 group border border-transparent hover:border-navy-900/5 relative"
          >
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <service.icon className="w-12 h-12 text-navy-900" />
            </div>
            
            <h3 className="text-2xl font-display text-navy-900 mb-4 tracking-wide group-hover:text-gold-500 transition-colors">
              {service.title}
            </h3>
            
            <p className="font-body text-navy-900/60 mb-8 leading-relaxed min-h-[80px]">
              {service.description}
            </p>
            
            <div className="font-display text-xs tracking-[0.2em] uppercase text-navy-900/40 border-t border-navy-900/10 pt-6 group-hover:border-gold-500/30 transition-colors">
              {service.price}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
