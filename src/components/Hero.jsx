import Spline from '@splinetool/react-spline';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0A3D62]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A3D62]/60 via-[#0A3D62]/80 to-[#0A3D62] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Bangun Citra Bisnis Profesional dengan Website & SEO Terbaik.
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-xl">
            EHF Digital Solution membantu bisnis Anda tampil maksimal di dunia digital.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => scrollTo('contact')} className="px-6 py-3 rounded-lg bg-[#00A8FF] text-[#0A3D62] font-semibold shadow hover:brightness-110 transition">
              Konsultasi Gratis
            </button>
            <button onClick={() => scrollTo('portfolio')} className="px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition">
              Lihat Portofolio
            </button>
          </div>
          <p className="mt-6 text-white/80 text-sm">
            “Website cepat, menarik, dan siap bersaing di Google.”
          </p>
        </div>
        <div className="hidden md:block" />
      </div>

      <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50">
        <div className="bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2">
          <span className="font-semibold">Whatsapp</span>
        </div>
      </a>
    </section>
  );
}
