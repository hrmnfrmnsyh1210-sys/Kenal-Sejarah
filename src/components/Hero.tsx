import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Gamepad2, ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-fuchsia-50 flex flex-col justify-end pt-20 pb-16 px-6 md:pt-0 md:pb-24 md:px-16">
      {/* Background Graphic Element */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#ec4899 2px, transparent 2px)", backgroundSize: "40px 40px" }}></div>
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute -top-[10%] -right-[30%] w-[150vw] h-[150vw] md:top-[10%] md:right-[10%] md:w-[40vw] md:h-[60vw]"
      >
        <img 
          src="/KALIMANTA-BARAT.jpg" 
          alt="Kalimantan Barat" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover pill-image shadow-[0_20px_60px_-15px_rgba(4,47,46,0.3)] opacity-80 md:opacity-100 border-8 border-white"
        />
      </motion.div>

      {/* Decorative Colorful Traditional Blurs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-amber-400/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-12 bg-white/70 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none p-8 md:p-0 rounded-[3rem] border border-fuchsia-200 md:border-none shadow-2xl shadow-fuchsia-900/10 md:shadow-none"
      >
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 bg-amber-300 text-amber-900 rounded-full md:text-sm font-black tracking-widest uppercase mb-6 shadow-[4px_4px_0px_#b45309]">
            Jejak Keajaiban Khatulistiwa
          </div>
          <h1 className="hero-title text-stone-900 font-medium">
            Kalimantan <br/><span className="text-fuchsia-600 font-bold italic drop-shadow-md">Barat</span>
          </h1>
        </div>

        <div className="max-w-sm md:pb-6 md:text-right">
          <p className="text-sm md:text-base text-stone-700 leading-relaxed font-serif font-medium bg-white/50 md:bg-transparent p-4 md:p-0 rounded-2xl">
            Mari menjelajahi keseruan sejarah, budaya, dan keberagaman di tanah Kalimantan Barat. Sst... ada mini-game berhadiah di bawah lho!
          </p>
          <div className="mt-8 flex gap-4 md:justify-end">
            <a 
              href="#fun-games" 
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-emerald-500 text-white font-black hover:bg-emerald-400 transition-all shadow-[0_6px_0_0_#047857] hover:shadow-[0_3px_0_0_#047857] hover:translate-y-1 active:shadow-none active:translate-y-2 border-2 border-emerald-900"
            >
              <Gamepad2 size={24} /> Main Kuis
            </a>
            <a 
              href="#sejarah" 
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition-all shadow-[0_4px_0_0_#701a75]"
            >
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
