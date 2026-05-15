import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-[#faf8f5] flex flex-col justify-end pt-20 pb-16 px-6 md:pt-0 md:pb-24 md:px-16">
      {/* Background Graphic Element */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute -top-[10%] -right-[30%] w-[150vw] h-[150vw] md:top-[10%] md:right-[10%] md:w-[40vw] md:h-[60vw]"
      >
        <img 
          src="/KALIMANTA-BARAT.jpg" 
          alt="Kalimantan Barat" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover pill-image shadow-[0_20px_60px_-15px_rgba(4,47,46,0.3)] opacity-70 md:opacity-95"
        />
      </motion.div>

      {/* Decorative Colorful Traditional Blurs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-12 bg-white/60 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none p-6 pb-8 md:p-0 rounded-[2rem] border border-white/60 md:border-none shadow-2xl md:shadow-none"
      >
        <div className="max-w-4xl">
          <p className="text-[10px] md:text-sm font-sans font-bold tracking-[0.3em] uppercase text-red-700 mb-4 md:mb-6 italic drop-shadow-sm">
            Jejak Peradaban Zamrud Khatulistiwa
          </p>
          <h1 className="hero-title text-stone-900 break-words hyphens-auto font-medium">
            Kalimantan <br/><span className="text-emerald-800 italic">Barat</span>
          </h1>
        </div>

        <div className="max-w-sm md:pb-6 md:text-right">
          <p className="text-sm md:text-base text-stone-700 leading-relaxed font-serif">
            Menelusuri jejak sejarah dari Kerajaan Senubing, kejayaan Kongsi Lanfang, hingga tegaknya Kesultanan Kadriah di bawah garis khatulistiwa.
          </p>
          <div className="mt-8 flex md:justify-end">
            <a 
              href="#sejarah" 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-stone-300 text-stone-900 hover:bg-red-700 hover:text-white hover:border-red-700 transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
