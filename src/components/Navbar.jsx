import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_BG = 'bg-[#0A3D62]/80 backdrop-blur-md';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? NAV_BG : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => goTo('home')} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#0A3D62] flex items-center justify-center text-white font-bold shadow">E</div>
          <div className="text-white text-left">
            <p className="text-sm leading-none">EHF Digital Solution</p>
            <p className="text-xs leading-none opacity-70">Digital Agency</p>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-white/90">
          <button onClick={() => goTo('home')} className="hover:text-white transition">Beranda</button>
          <button onClick={() => goTo('about')} className="hover:text-white transition">Tentang</button>
          <button onClick={() => goTo('services')} className="hover:text-white transition">Layanan</button>
          <button onClick={() => goTo('portfolio')} className="hover:text-white transition">Portofolio</button>
          <button onClick={() => goTo('contact')} className="hover:text-white transition">Kontak</button>
        </div>

        {/* Mobile toggler */}
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="relative h-4 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition-transform ${open ? 'top-2 rotate-45' : 'top-0 rotate-0'}`}></span>
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : 'top-2 opacity-100'}`}></span>
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition-transform ${open ? 'top-2 -rotate-45' : 'top-4 rotate-0'}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 rounded-xl bg-[#0A3D62]/95 text-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-col divide-y divide-white/10">
              <button onClick={() => goTo('home')} className="px-6 py-3 text-left hover:bg-white/10">Beranda</button>
              <button onClick={() => goTo('about')} className="px-6 py-3 text-left hover:bg-white/10">Tentang</button>
              <button onClick={() => goTo('services')} className="px-6 py-3 text-left hover:bg-white/10">Layanan</button>
              <button onClick={() => goTo('portfolio')} className="px-6 py-3 text-left hover:bg-white/10">Portofolio</button>
              <button onClick={() => goTo('contact')} className="px-6 py-3 text-left hover:bg-white/10">Kontak</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
