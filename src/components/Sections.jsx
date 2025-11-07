import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <h2 className="text-3xl font-bold text-[#0A3D62]">Tentang Kami</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            EHF Digital Solution adalah tim profesional berpengalaman dalam pengembangan website dan optimasi SEO. Kami membantu UMKM hingga perusahaan besar membangun kehadiran digital yang kuat dan berdampak nyata pada pertumbuhan bisnis.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <motion.div variants={fadeUp} custom={1} className="p-4 rounded-lg bg-[#F1F2F6]"><p className="font-semibold text-[#0A3D62]">Visi</p><p className="text-gray-600 mt-1">Mendorong transformasi digital yang inklusif untuk semua pelaku bisnis.</p></motion.div>
            <motion.div variants={fadeUp} custom={2} className="p-4 rounded-lg bg-[#F1F2F6]"><p className="font-semibold text-[#0A3D62]">Misi</p><p className="text-gray-600 mt-1">Menciptakan solusi web dan SEO berkinerja tinggi untuk meningkatkan omzet.</p></motion.div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="rounded-xl bg-gradient-to-br from-[#0A3D62] to-[#00A8FF] p-8 text-white shadow-lg">
          <p className="text-xl font-semibold">Kenapa memilih kami?</p>
          <ul className="mt-4 space-y-3 list-disc list-inside">
            <li>Desain modern, minimalis, dan responsif</li>
            <li>Kecepatan, keamanan, dan SEO menjadi prioritas</li>
            <li>Dukungan berkelanjutan dan konsultasi gratis</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export function Services() {
  const items = [
    {
      title: 'Pembuatan Website',
      desc: 'Company profile, e-commerce, landing page, hingga web app kustom.',
    },
    {
      title: 'SEO & Digital Marketing',
      desc: 'On-page, off-page, Google Ads, dan optimasi konten untuk performa di Google.',
    },
    {
      title: 'Branding & UI/UX',
      desc: 'Desain antarmuka modern dan identitas merek konsisten.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F1F2F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0A3D62] text-center">Layanan Kami</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Solusi digital yang meningkatkan omzet bisnis Anda.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="h-12 w-12 rounded-lg bg-[#0A3D62]/10 flex items-center justify-center text-[#0A3D62] font-bold">★</div>
              <h3 className="mt-4 text-xl font-semibold text-[#0A3D62]">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const items = [
    { title: 'PT Maju Jaya', result: 'Traffic meningkat 300%', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop' },
    { title: 'UMKM KopiKita', result: 'Konversi naik 2.5x', img: 'https://images.unsplash.com/photo-1529336953121-a52d6e0a1f0c?q=80&w=1200&auto=format&fit=crop' },
    { title: 'EduTech App', result: 'Bounce rate turun 45%', img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0A3D62] text-center">Portofolio</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Beberapa proyek yang kami kerjakan, fokus pada performa dan hasil.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div key={it.title} className="group rounded-xl overflow-hidden bg-[#F1F2F6] shadow will-change-transform" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
              <div className="aspect-video overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#0A3D62]">{it.title}</h3>
                <p className="text-gray-600 mt-1">{it.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { name: 'Andi, PT Maju Jaya', text: 'Website cepat dan konversi meningkat. Tim responsif!' },
    { name: 'Sinta, KopiKita', text: 'SEO-nya terasa, traffic naik signifikan hanya dalam 3 bulan.' },
    { name: 'Rudi, EduTech', text: 'Desain modern dan performa mantap. Rekomendasi!' },
  ];

  return (
    <section className="py-20 bg-[#F1F2F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0A3D62] text-center">Testimoni Klien</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.figure key={it.name} className="rounded-xl bg-white p-6 shadow" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
              <p className="text-gray-700">“{it.text}”</p>
              <figcaption className="mt-4 text-sm text-gray-500">{it.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(
      `Halo EHF, saya ${data.name} (email: ${data.email}). ${data.message}`
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-[#0A3D62]">Kontak</h2>
          <p className="mt-3 text-gray-600">Siap memulai transformasi digital? Hubungi kami sekarang.</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <input required name="name" placeholder="Nama" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D62]" />
            <input required name="email" type="email" placeholder="Email" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D62]" />
            <textarea required name="message" rows={4} placeholder="Pesan" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D62]"></textarea>
            <button type="submit" className="px-6 py-3 rounded-lg bg-[#0A3D62] text-white font-semibold hover:bg-[#072e49] transition w-fit">Kirim via WhatsApp</button>
          </form>
          <div className="mt-8 space-y-2 text-gray-700">
            <p>WhatsApp: <a className="text-[#0A3D62] underline" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">+62 812-3456-7890</a></p>
            <p>Email: <a className="text-[#0A3D62] underline" href="mailto:hello@ehfdigital.id">hello@ehfdigital.id</a></p>
            <p>Alamat: Jakarta, Indonesia</p>
          </div>
        </div>
        <motion.div className="rounded-xl overflow-hidden shadow-lg min-h-[300px]" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <iframe title="EHF Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.651668307519!2d106.8249645757922!3d-6.176655560480044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c53b2b1c17%3A0x301576d14feb910!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A3D62] text-white py-14">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#00A8FF]/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-semibold text-lg">EHF Digital Solution</p>
          <p className="text-white/80 mt-2 text-sm">Solusi digital untuk pertumbuhan bisnis Anda.</p>
        </div>
        <div>
          <p className="font-semibold">Ikuti kami</p>
          <div className="mt-2 flex gap-4 text-white/90">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Facebook</a>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-white/70">© {new Date().getFullYear()} EHF Digital Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
