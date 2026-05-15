import { motion } from "motion/react";
import { TIMELINE_DATA } from "../data";

export default function HistoryTimeline() {
  return (
    <section id="sejarah" className="py-16 md:py-32 px-6 md:px-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 md:flex items-end justify-between border-b border-stone-200 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 tracking-tight">Kronik <span className="italic text-amber-600 font-medium">Waktu</span></h2>
          </div>
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-emerald-800 mt-4 md:mt-0 font-bold">Babad Sejarah</p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            // Alternating colorful elements
            const numColors = ['text-red-600/10', 'text-amber-500/15', 'text-emerald-700/10', 'text-indigo-600/10', 'text-rose-600/10'];
            const pillColors = ['bg-red-100 text-red-800', 'bg-amber-100 text-amber-800', 'bg-emerald-100 text-emerald-800', 'bg-indigo-100 text-indigo-800', 'bg-rose-100 text-rose-800'];
            const numColor = numColors[index % numColors.length];
            const pillColor = pillColors[index % pillColors.length];
            
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Visual */}
                <div className="w-full md:w-1/2 relative group mt-8 md:mt-0">
                  <div className={`aspect-[4/3] overflow-hidden rounded-3xl border-4 ${isEven ? 'border-amber-100' : 'border-stone-100'} shadow-lg`}>
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      src={item.image} 
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating Number */}
                  <div className={`absolute -top-10 md:top-[-20px] ${isEven ? 'left-0 md:left-[-30px]' : 'right-0 md:right-[-30px]'} font-serif text-[100px] md:text-[140px] font-bold leading-none ${numColor} pointer-events-none select-none drop-shadow-sm`}>
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center mt-2 md:mt-0">
                  <div className="space-y-4 md:space-y-6 max-w-lg">
                    <p className={`font-sans text-[10px] uppercase tracking-[0.3em] font-bold inline-block px-3 py-1 rounded-full w-max ${pillColor}`}>
                      {item.period}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-serif text-stone-600 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
