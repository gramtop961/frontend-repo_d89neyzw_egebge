import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Services, Portfolio, Testimonials, Contact, Footer } from './components/Sections';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'EHF Digital Solution | Digital Agency - Website, SEO, Marketing';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Website cepat, menarik, dan siap bersaing di Google. EHF Digital Solution: pembuatan website, SEO, dan digital marketing. Konsultasi gratis.');
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Website cepat, menarik, dan siap bersaing di Google. EHF Digital Solution: pembuatan website, SEO, dan digital marketing. Konsultasi gratis.';
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main className="mt-16">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
