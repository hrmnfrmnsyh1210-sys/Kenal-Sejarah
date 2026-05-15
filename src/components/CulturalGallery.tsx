import { motion } from "motion/react";
import { CULTURE_DATA } from "../data";

export default function CulturalGallery() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 bg-emerald-400 text-stone-900 relative overflow-hidden border-b-[12px] border-stone-900 border-t-[8px]">
      {/* Decorative gradient / dots */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMGUxMTExIj48L2NpcmNsZT4KPC9zdmc+')] mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
           <div className="inline-block px-6 py-2 bg-yellow-400 border-4 border-stone-900 rounded-full text-stone-900 font-bold uppercase tracking-widest shadow-[4px_4px_0_0_#1c1917] mb-6 transform -rotate-1">
             Mosaik Masyarakat
           </div>
          <motion.h2 
             animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
             transition={{ duration: 5, repeat: Infinity }}
            className="text-5xl md:text-7xl font-sans font-black tracking-tight text-white drop-shadow-[4px_4px_0_rgba(28,25,23,1)]"
          >
            Harmoni dalam Keberagaman
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {CULTURE_DATA.map((item, index) => {
             const cardColors = ['bg-rose-100', 'bg-blue-100', 'bg-orange-100'];
             const btnColors = ['bg-rose-500', 'bg-blue-500', 'bg-orange-500'];
             
             return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className={`${cardColors[index%3]} rounded-[2rem] border-4 border-stone-900 p-4 md:p-6 shadow-[12px_12px_0px_0px_#1c1917] hover:-translate-y-4 transition-all duration-300 h-full flex flex-col`}>
                   
                   <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden border-4 border-stone-900 mb-6 bg-white relative group-hover:scale-105 transition-transform duration-300">
                      <motion.img 
                        src={item.img} 
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full border-4 border-stone-900 flex items-center justify-center font-black shadow-[4px_4px_0_0_#1c1917]">
                         {index+1}
                      </div>
                   </div>

                   <div className="text-center flex-grow flex flex-col items-center">
                     <h3 className="text-3xl font-black mb-4 tracking-tight text-stone-900 uppercase font-sans">
                       {item.name}
                     </h3>
                     <p className="font-medium text-stone-700 leading-relaxed mb-6 bg-white/60 p-4 border-2 border-stone-900 rounded-xl">
                       {item.desc}
                     </p>
                     
                     <div className="mt-auto">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`inline-block px-8 py-3 ${btnColors[index%3]} text-white border-4 border-stone-900 rounded-full font-black uppercase text-sm shadow-[4px_4px_0_#1c1917] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-2`}
                        >
                           Jelajahi
                        </a>
                     </div>
                   </div>

                </div>
              </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
