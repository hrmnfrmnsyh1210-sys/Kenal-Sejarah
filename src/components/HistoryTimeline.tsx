import { motion } from "motion/react";
import { TIMELINE_DATA } from "../data";

export default function HistoryTimeline() {
  return (
    <section id="sejarah" className="py-20 md:py-32 px-6 md:px-16 bg-sky-300 relative overflow-hidden border-t-8 border-stone-900 border-b-[12px]">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-center md:items-end justify-between bg-white border-4 border-stone-900 p-8 rounded-3xl shadow-[8px_8px_0px_0px_#1c1917]">
          <div>
            <h2 className="text-5xl md:text-7xl font-sans font-black text-stone-900 tracking-tight flex items-center gap-4">
              Mesin <span className="inline-block bg-amber-400 px-4 py-2 border-4 border-stone-900 -rotate-2 shadow-[4px_4px_0_0_#000]">Waktu</span>
            </h2>
          </div>
          <motion.div 
             animate={{ rotate: [0, 5, -5, 0] }} 
             transition={{ duration: 2, repeat: Infinity }}
             className="font-sans text-sm md:text-lg uppercase mt-6 md:mt-0 font-bold bg-fuchsia-500 text-white px-6 py-3 rounded-full border-4 border-stone-900 shadow-[4px_4px_0px_0px_#1c1917]"
          >
            Pilih Era Favoritmu!
          </motion.div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            // Neobrutalist vibrant colors
            const bgColors = ['bg-rose-400', 'bg-emerald-400', 'bg-violet-400', 'bg-amber-400', 'bg-cyan-400'];
            const cardBgColor = bgColors[index % bgColors.length];
            
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`relative flex flex-col gap-8 md:gap-12 md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Visual */}
                <div className="w-full md:w-1/2 relative group">
                  <div className={`aspect-[4/3] overflow-hidden rounded-[2rem] border-4 border-stone-900 shadow-[12px_12px_0px_0px_rgba(28,25,23,1)] bg-white p-2 md:p-3`}>
                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative border-2 border-stone-900">
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        src={item.image} 
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Floating Number Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`absolute -top-6 md:-top-10 ${isEven ? 'left-4 md:-left-8' : 'right-4 md:-right-8'} w-20 h-20 md:w-28 md:h-28 bg-white border-4 border-stone-900 rounded-full flex items-center justify-center font-black text-4xl md:text-6xl text-stone-900 shadow-[6px_6px_0px_0px_#1c1917] z-20`}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 relative">
                  <div className={`${cardBgColor} p-6 md:p-10 rounded-[2rem] border-4 border-stone-900 shadow-[12px_12px_0px_0px_rgba(28,25,23,1)] transform hover:-translate-y-2 transition-transform duration-300`}>
                    <div className="inline-block px-4 py-2 bg-white border-2 border-stone-900 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest text-stone-900 mb-6 shadow-[4px_4px_0_0_#1c1917]">
                      {item.period}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-stone-900 leading-tight mb-4 tracking-tight drop-shadow-sm font-sans">
                      {item.title}
                    </h3>
                    <p className="font-medium text-stone-900 leading-relaxed text-base md:text-lg bg-white/50 p-4 rounded-xl border-2 border-stone-900">
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
