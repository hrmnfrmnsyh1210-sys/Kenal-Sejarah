import { motion } from "motion/react";
import { CULTURE_DATA } from "../data";

export default function CulturalGallery() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 bg-emerald-950 text-stone-50 relative overflow-hidden border-t-[8px] border-amber-500">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-emerald-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-6 italic"
          >
            Mosaik Masyarakat
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif tracking-tight text-stone-50"
          >
            Harmoni dalam <span className="italic text-amber-400 font-medium">Keberagaman</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {CULTURE_DATA.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-t-full mb-8 border-[6px] border-amber-500/80 group-hover:border-amber-400 transition-colors shadow-2xl shadow-stone-950/50 relative bg-emerald-900">
                <div className="absolute inset-0 bg-amber-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                  src={item.img} 
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              <div className="text-center px-4">
                <h3 className="text-3xl font-serif font-medium mb-4 tracking-tight text-stone-50">{item.name}</h3>
                <p className="font-serif text-sm text-stone-300 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
