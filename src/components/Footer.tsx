export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 border-t-[8px] border-red-700 bg-stone-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-stone-50 tracking-tight">Khatulistiwa<span className="text-amber-500 italic">.</span></h2>
          <p className="font-sans text-[10px] text-emerald-500 mt-2 uppercase tracking-[0.3em] font-bold">Sejarah Kalimantan Barat</p>
        </div>
        
        <div className="flex gap-8 font-sans text-[10px] uppercase tracking-widest text-stone-400 font-medium">
          <a href="#" className="hover:text-amber-400 transition-colors">Beranda</a>
          <a href="#sejarah" className="hover:text-amber-400 transition-colors">Sejarah</a>
        </div>
        
        <p className="font-sans text-[10px] text-stone-500 font-light tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Edukasi Sejarah Kalbar
        </p>
      </div>
    </footer>
  );
}
