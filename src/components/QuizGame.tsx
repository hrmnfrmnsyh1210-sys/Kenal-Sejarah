import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { Trophy, HelpCircle, Star, Sparkles, RefreshCcw } from "lucide-react";

const QUIZ_QUESTIONS = [
  {
    question: "Apa nama kerajaan tertua di Kalimantan Barat yang sering disebut dalam teks Negarakertagama?",
    options: ["Kerajaan Kutai", "Kesultanan Kadriah", "Kerajaan Tanjungpura", "Republik Lanfang"],
    answer: "Kerajaan Tanjungpura"
  },
  {
    question: "Siapakah pendiri Kesultanan Kadriah Pontianak pada tahun 1771?",
    options: ["Sultan Hamid II", "Syarif Abdurrahman Alkadrie", "Lo Fong Pak", "Raden Patah"],
    answer: "Syarif Abdurrahman Alkadrie"
  },
  {
    question: "Apa nama republik dan kongsi penambang emas yang didirikan oleh Lo Fong Pak?",
    options: ["Kongsi Mandor", "Republik Lanfang", "Kongsi Singkawang", "Sambas"],
    answer: "Republik Lanfang"
  },
  {
    question: "Peristiwa tragis pembantaian tokoh masyarakat oleh tentara Jepang di Kalbar dikenal dengan nama?",
    options: ["Tragedi Mandor", "Peristiwa 10 November", "Bandung Lautan Api", "Perang Puputan"],
    answer: "Tragedi Mandor"
  },
  {
    question: "Tiga etnis besar yang mencerminkan heterogenitas budaya harmonis di Kalimantan Barat adalah...",
    options: ["Sunda, Batak, Minang", "Dayak, Melayu, Tionghoa", "Jawa, Madura, Bugis", "Banjar, Kutai, Paser"],
    answer: "Dayak, Melayu, Tionghoa"
  }
];

export default function QuizGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const triggerWinConfetti = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ['#f43f5e', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const throwErrorConfetti = () => {
    confetti({
      particleCount: 20,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#64748b', '#94a3b8']
    });
  }

  const handleAnswerSelect = (option: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(option);
    const isCorrect = option === currentQ.answer;

    if (isCorrect) {
      setScore(s => s + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#fbbf24']
      });
    } else {
      throwErrorConfetti();
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setShowResult(true);
        if (score + (isCorrect ? 1 : 0) === QUIZ_QUESTIONS.length) {
          triggerWinConfetti();
        }
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const startQuiz = () => {
    setIsPlaying(true);
    resetGame();
  }

  return (
    <section id="fun-games" className="py-24 relative overflow-hidden bg-fuchsia-900 border-y-[12px] border-amber-400">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="polka-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle fill="#fff" cx="20" cy="20" r="4"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center justify-center p-4 bg-fuchsia-800 text-amber-300 rounded-full mb-6 border-4 border-amber-300 shadow-[0_0_40px_rgba(251,191,36,0.3)]"
          >
            <Sparkles size={48} className="animate-pulse" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white px-2 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)] mb-4">
            Kuis Jelajah Nusantara
          </h2>
          <p className="text-fuchsia-200 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Uji pengetahuanmu tentang Kalimantan Barat! Dapatkan skor sempurna untuk memenangkan hadiah virtual kejutan.
          </p>
        </div>

        <div className="bg-white rounded-[32px] p-6 md:p-12 shadow-[0_20px_0_0_rgba(0,0,0,0.3)] border-4 border-stone-800 max-w-3xl mx-auto min-h-[400px] flex flex-col justify-center relative">
          
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div 
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto bg-stone-100 rounded-full flex items-center justify-center border-4 border-stone-300 mb-8">
                  <HelpCircle size={64} className="text-fuchsia-500" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-6 font-sans">Siap Bermain?</h3>
                <button 
                  onClick={startQuiz}
                  className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-white text-xl font-black rounded-full shadow-[0_8px_0_0_#047857] hover:shadow-[0_4px_0_0_#047857] hover:translate-y-1 transition-all active:shadow-none active:translate-y-2 border-4 border-emerald-900 mx-auto"
                >
                  MULAI KUIS SEKARANG!
                </button>
              </motion.div>
            ) : showResult ? (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                {score === QUIZ_QUESTIONS.length ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="inline-block mb-6"
                    >
                      <Trophy size={80} className="text-amber-500 drop-shadow-md" />
                    </motion.div>
                    <h3 className="text-3xl lg:text-4xl font-black text-emerald-600 mb-2 font-sans">
                      Luar Biasa! SKOR SEMPURNA!
                    </h3>
                    <p className="text-stone-600 text-lg md:text-xl font-medium mb-8">Kamu benar-benar master sejarah Kalimantan Barat!</p>
                    <div className="bg-amber-100 border-4 border-amber-300 p-6 rounded-2xl mb-8 max-w-sm mx-auto">
                      <p className="text-amber-800 font-bold mb-2">🏆 HADIAH VIRTUALMU 🏆</p>
                      <p className="text-sm text-stone-600 font-medium">Gelar Kehormatan: <span className="text-xl block mt-1 font-black text-rose-600">Pendekar Khatulistiwa</span></p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-24 h-24 mx-auto bg-stone-100 rounded-full flex items-center justify-center mb-6">
                      <Star size={48} className={score > 2 ? "text-emerald-500" : "text-rose-500"} />
                    </div>
                    <h3 className="text-3xl font-black text-stone-800 mb-2 font-sans">
                      Skor Kamu: {score} / {QUIZ_QUESTIONS.length}
                    </h3>
                    <p className="text-stone-500 text-lg font-medium mb-8">
                      {score > 2 ? "Lumayan bagus! Terus belajar tentang Kalimantan Barat ya." : "Yah, sayang sekali. Ayo baca lagi sejarahnya dan coba lagi!"}
                    </p>
                  </>  
                )}
                <button 
                  onClick={resetGame}
                  className="px-8 py-4 bg-stone-800 hover:bg-stone-700 text-white text-lg font-bold rounded-full shadow-[0_6px_0_0_#292524] hover:shadow-[0_3px_0_0_#292524] hover:translate-y-1 transition-all active:shadow-none active:translate-y-2 border-2 border-transparent inline-flex items-center justify-center gap-3"
                >
                  <RefreshCcw size={20} /> Coba Lagi
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="quiz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-stone-100">
                   <div className="flex gap-2">
                     {QUIZ_QUESTIONS.map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-stone-800 ${
                            i === currentQuestionIndex ? "bg-fuchsia-500 scale-125" : 
                            i < currentQuestionIndex ? "bg-emerald-500" : "bg-stone-200"
                          } transition-all`}
                        />
                     ))}
                   </div>
                   <div className="text-stone-500 font-bold font-mono text-xl">
                      {currentQuestionIndex + 1} <span className="opacity-50">/ {QUIZ_QUESTIONS.length}</span>
                   </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-stone-800 leading-snug mb-10 font-sans">
                  {currentQ.question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQ.options.map((opt, i) => {
                    const isSelected = selectedAnswer === opt;
                    const isCorrect = opt === currentQ.answer;
                    
                    let btnClass = "bg-stone-50 hover:bg-stone-100 border-stone-300 text-stone-700 shadow-[#d6d3d1]";
                    
                    if (selectedAnswer) {
                      if (isCorrect) {
                        btnClass = "bg-emerald-100 border-emerald-500 text-emerald-800 shadow-[#10b981] z-10";
                      } else if (isSelected) {
                        btnClass = "bg-rose-100 border-rose-500 text-rose-800 shadow-[#e11d48] z-10 opacity-70";
                      } else {
                        btnClass = "bg-stone-50 border-stone-200 text-stone-400 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handleAnswerSelect(opt)}
                        disabled={selectedAnswer !== null}
                        className={`text-left text-lg font-bold p-5 rounded-2xl border-4 shadow-[0_6px_0_0] active:translate-y-2 active:shadow-none transition-all duration-200 ${btnClass}`}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
