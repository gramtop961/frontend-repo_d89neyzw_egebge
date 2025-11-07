import { useEffect, useState } from 'react';

const NAV_BG = 'bg-[#0A3D62]/80 backdrop-blur-md';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? NAV_BG : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => goTo('home')} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#0A3D62] flex items-center justify-center text-white font-bold">E</div>
          <div className="text-white text-left">
            <p className="text-sm leading-none">EHF Digital Solution</p>
            <p className="text-xs leading-none opacity-70">Digital Agency</p>
          </div>
        </button>
        <div className="hidden md:flex items-center gap-6 text-white/90">
          <button onClick={() => goTo('home')} className="hover:text-white transition">Beranda</button>
          <button onClick={() => goTo('about')} className="hover:text-white transition">Tentang</button>
          <button onClick={() => goTo('services')} className="hover:text-white transition">Layanan</button>
          <button onClick={() => goTo('portfolio')} className="hover:text-white transition">Portofolio</button>
          <button onClick={() => goTo('contact')} className="hover:text-white transition">Kontak</button>
        </div>
      </nav>
    </header>
  );
}
