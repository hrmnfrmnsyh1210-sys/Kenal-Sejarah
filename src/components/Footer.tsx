export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 border-t-8 border-stone-900 bg-amber-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        <div>
          <h2 className="font-sans text-3xl font-black text-stone-900 tracking-tight flex items-center justify-center md:justify-start gap-2">
            Khatulistiwa
            <div className="w-4 h-4 bg-fuchsia-500 rounded-full border-2 border-stone-900 animate-bounce"></div>
          </h2>
          <p className="font-sans text-xs text-stone-800 mt-2 uppercase tracking-[0.2em] font-bold">Jelajah Nusantara - Seri Kalbar</p>
        </div>
        
        <div className="flex gap-6 font-sans text-sm uppercase tracking-widest text-stone-900 font-bold">
          <a href="#" className="hover:text-amber-100 hover:bg-stone-900 px-4 py-2 rounded-full border-2 border-transparent hover:border-stone-900 transition-all">Beranda</a>
          <a href="#sejarah" className="hover:text-amber-100 hover:bg-stone-900 px-4 py-2 rounded-full border-2 border-transparent hover:border-stone-900 transition-all">Sejarah</a>
          <a href="#fun-games" className="hover:text-amber-100 hover:bg-stone-900 px-4 py-2 rounded-full border-2 border-transparent hover:border-stone-900 transition-all">Kuis</a>
        </div>
        
        <p className="font-sans text-xs text-stone-800 font-bold tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Dibuat dengan ✨
        </p>
      </div>
    </footer>
  );
}
