import { useState } from 'react';
import { PRODUCTS, TESTIMONIALS } from './data';
import { Product } from './types';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import RoomCustomizer from './components/RoomCustomizer';
import ConsultationForm from './components/ConsultationForm';
import StorySection from './components/StorySection';
import { 
  ArrowDown, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Trees, 
  Hammer, 
  Sparkles, 
  ArrowRight,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'living' | 'dining' | 'bedroom' | 'workspace'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [consultationSubject, setConsultationSubject] = useState<string>('');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Semua Koleksi' },
    { id: 'living', label: 'Ruang Tamu' },
    { id: 'dining', label: 'Ruang Makan' },
    { id: 'bedroom', label: 'Kamar Tidur' },
    { id: 'workspace', label: 'Ruang Kerja' }
  ];

  const handleBookConsultation = (productName: string) => {
    setConsultationSubject(productName);
    // Smooth scroll to formulation
    const element = document.getElementById('consultation-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-wood-gold selection:text-wood-dark">
      {/* Universal Header Navbar */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-champagne/40"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e1dbcc_1px,transparent_1px),linear-gradient(to_bottom,#e1dbcc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full mt-6 md:mt-0">
          
          {/* Left Column: Premium copywriting card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-wood-gold/15 border border-wood-gold/20 rounded-full w-fit mb-6 text-wood-gold">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-bold tracking-widest leading-none">
                Handcrafted Solid Teak Furniture
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-wood-dark leading-[1.10] mb-6">
              Keindahan Jati yang Abadi, <br />
              <span className="text-wood-gold font-light italic">Presisi Alam.</span>
            </h1>

            <p className="text-base font-light text-wood-medium/95 mb-8 max-w-lg leading-relaxed">
              Membawa kemurnian kayu Jati Tua Grade-A berpadu dengan ketelitian desain modern. Terinspirasi dari keteguhan mekanika alam untuk mewujudkan tata ruang idaman keluarga Anda yang bertahan hingga lintas generasi.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#collection"
                className="group flex items-center justify-center gap-2 bg-wood-gold hover:bg-wood-gold/90 text-warm-beige px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer"
              >
                Jelajahi Koleksi
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center border border-sand hover:border-wood-gold px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-widest text-wood-dark hover:text-wood-gold hover:bg-wood-gold/5 transition-all duration-300 cursor-pointer"
                onClick={() => setConsultationSubject('')}
              >
                Konsultasi Privat Gratis
              </a>
            </div>

            {/* Feature Badges in Hero */}
            <div className="grid grid-cols-3 gap-4 border-t border-sand/40 pt-8 mt-12">
              <div>
                <span className="font-serif text-2xl font-bold text-wood-dark">100%</span>
                <p className="text-[10px] uppercase tracking-wider text-wood-medium/60 font-semibold mt-1">Jati Tua Grade-A</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-wood-dark">Lifetime</span>
                <p className="text-[10px] uppercase tracking-wider text-wood-medium/60 font-semibold mt-1">Garansi Konstruksi</p>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-wood-dark">SVLK</span>
                <p className="text-[10px] uppercase tracking-wider text-wood-medium/60 font-semibold mt-1">Sertifikat Legalitas</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image featuring the Living room asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-sand/20">
              <img
                src="/src/assets/images/teak_living_room_1779242829579.png"
                alt="Antteak Premium Teak Living Room Showcase"
                className="w-full h-full object-cover scale-100 hover:scale-[1.02] transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              
              {/* Product tag floating */}
              <div className="absolute bottom-6 right-6 bg-champagne/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-sand/50 flex gap-4 items-center max-w-[280px]">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-wood-gold font-bold">Showcased Item</span>
                  <span className="font-serif text-xs font-bold text-wood-dark mt-0.5">Nusa Teak Sideboard</span>
                </div>
                <a 
                  href="#collection" 
                  onClick={() => setActiveCategory('living')}
                  className="p-2 bg-wood-gold hover:bg-wood-gold/85 text-warm-beige rounded-full transition-all"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Small offset floating badge */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-wood-gold/15 rounded-full flex items-center justify-center animate-spin-slow -z-10 bg-gradient-to-tr from-wood-gold/5 to-transparent"></div>
          </div>

        </div>

        {/* Scroll action down */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-wood-medium/55 animate-bounce hidden md:flex flex-col items-center gap-1.5 focus:outline-none">
          <span className="text-[9px] uppercase tracking-widest font-mono">Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </section>

      {/* 2. BRASS FACTS / KUNCI CRAFTSMANSHIP KEY USP */}
      <section className="py-24 bg-champagne border-t border-b border-sand/35">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-wood-gold font-bold">Standard Kurasi Antteak</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide mt-3 text-wood-dark">
              Mengapa Antteak Interior Lebih Unggul?
            </h2>
            <div className="w-16 h-0.5 bg-wood-gold/60 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-champagne/30 border border-sand/15 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="p-4 bg-wood-gold/15 text-wood-gold rounded-xl mb-6">
                <Trees className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark mb-3">
                Hanya Jati Tua Grade-A
              </h3>
              <p className="text-xs font-light text-wood-medium/85 leading-relaxed">
                Kami menyeleksi kayu jati yang berumur minimal 40 tahun dari hutan Perhutani legal. Karakteristik kayu jati tua memiliki densitas kokoh dengan kadar minyak alami yang padat, menjadikannya bebas rayap dan lembab meskipun di tengah iklim tropis ekstrim.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-champagne/30 border border-sand/15 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="p-4 bg-wood-gold/15 text-wood-gold rounded-xl mb-6">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark mb-3">
                Kekuatan Sambungan Tradisional
              </h3>
              <p className="text-xs font-light text-wood-medium/85 leading-relaxed">
                Menghindari sekrup besi kasar dan lem kimia yang berumur pendek. Kami mendedikasikan pengerjaan sambungan kayu tradisional tipe Mortise dan Tenon (lubang dan pasak) yang presisi, meningkatkan daya topang serta ketahanan fisik rak kayu Antteak secara drastis.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-champagne/30 border border-sand/15 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="p-4 bg-wood-gold/15 text-wood-gold rounded-xl mb-6">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-wood-dark mb-3">
                SVLK & Bebas Rayap Seumur Hidup
              </h3>
              <p className="text-xs font-light text-wood-medium/85 leading-relaxed">
                Aspek legalitas kayu jati kami terjamin penuh lewat sertifikasi SVLK resmi dari pemerintah Indonesia. Setiap lembaran jati melewati proses pengeringan 'Kiln Dry' optimal hingga mencapai kelembaban 10-12% yang murni, mencegah retak di kemudian hari.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE CATALOGUE / KOLEKSI FURNITURE */}
      <section id="collection" className="py-24 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section title & filter menus */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-wood-gold font-bold">Katalog Antteak</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide mt-2 text-wood-dark">
                Kurasi Furnitur Jati Unggulan
              </h2>
            </div>

            {/* Slider categories bar */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-wood-gold border-wood-gold text-warm-beige shadow-sm'
                      : 'bg-champagne border-sand hover:border-wood-gold text-wood-medium'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid render */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCard
                    product={p}
                    onViewDetail={(item) => setSelectedProduct(item)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 4. STORY SECTION (ANT & TEAK PHILOSOPHY SHOWCASE) */}
      <section id="philosophy" className="py-24 bg-champagne border-t border-b border-sand/35">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <StorySection />
        </div>
      </section>

      {/* 5. INTERACTIVE ROOM CUSTOMIZER (MOODBOARD DESIGNER) */}
      <section id="room-inspiration" className="py-24 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header layout */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-wood-gold font-bold">Interaktif Moodboard</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide mt-3 text-wood-dark">
              Harmonisasi Layout Ruangan
            </h2>
            <div className="w-16 h-0.5 bg-wood-gold/60 mx-auto mt-4"></div>
          </div>

          <RoomCustomizer onProductClick={(p) => setSelectedProduct(p)} />
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER SECTION */}
      <section id="testimonials" className="py-24 bg-champagne border-b border-sand/35">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-wood-gold font-bold">Suara Kolektor Antteak</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide mt-3 text-wood-dark">
              Apa Kata Kolektor Teak Kami?
            </h2>
            <div className="w-16 h-0.5 bg-wood-gold/60 mx-auto mt-4"></div>
          </div>

          {/* Testimonial card grid split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((col, idx) => (
              <div 
                key={col.id}
                className="bg-champagne/30 rounded-2xl border border-sand/20 p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Elegant Star rating */}
                  <div className="flex gap-1 mb-6 text-wood-gold">
                    {Array.from({ length: col.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-currentColor" />
                    ))}
                  </div>

                  <p className="text-sm font-light text-wood-medium/95 leading-relaxed italic">
                    "{col.text}"
                  </p>
                </div>

                <div className="border-t border-sand/25 pt-5 mt-6">
                  <h4 className="font-serif text-sm font-bold text-wood-dark">
                    {col.name}
                  </h4>
                  <span className="text-[11px] text-wood-medium/60 uppercase tracking-wider block mt-1">
                    {col.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CONTACT & LOCATION & BOOKING SECTION */}
      <section id="contact" className="py-24 bg-warm-beige relative">
        
        {/* Decorative corner node */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-wood-gold/5 rounded-full blur-3xl -z-10 bg-gradient-to-bl from-wood-gold/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Showroom Contacts column info */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <span className="text-xs uppercase tracking-[0.25em] text-wood-gold font-bold">Kunjungi Showroom Kami</span>
              
              <h2 className="font-serif text-3.5xl font-bold tracking-wide mt-3 text-wood-dark leading-tight">
                Hubungi Kurator Kami <br />& Kunjungi Showroom
              </h2>
              
              <p className="text-sm font-light text-wood-medium/85 mt-5 leading-relaxed">
                Kami siap membantu Anda merealisasikan sketsa furnitur custom istimewa. Temukan ketebalan lembar jati kami yang menawan secara langsung di galeri resmi kami.
              </p>

              {/* Showrooms locations */}
              <div className="mt-8 flex flex-col gap-6">
                
                {/* Jakarta Showroom */}
                <div className="flex gap-4 items-start pb-5 border-b border-sand/25">
                  <div className="p-3 bg-champagne text-wood-gold rounded-xl border border-sand shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-wood-dark">
                      Main Gallery - Jakarta
                    </h4>
                    <p className="text-xs font-light text-wood-medium/75 mt-1 leading-relaxed">
                      Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan. Open Daily: 09:00 - 20:00
                    </p>
                  </div>
                </div>

                {/* Jepara Workshop */}
                <div className="flex gap-4 items-start pb-5 border-b border-sand/25">
                  <div className="p-3 bg-champagne text-wood-gold rounded-xl border border-sand shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-wood-dark">
                      Workshop & Kiln-Dry - Jepara
                    </h4>
                    <p className="text-xs font-light text-wood-medium/75 mt-1 leading-relaxed">
                      Kawasan Industri Ukir Senenan, Jl. Jati Raya No. 12, Jepara, Jawa Tengah.
                    </p>
                  </div>
                </div>

                {/* Online details */}
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-wood-medium/85">
                    <Phone className="w-3.5 h-3.5 text-wood-gold shrink-0" />
                    <span>WhatsApp: +62 812-7788-9900</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-wood-medium/85">
                    <Mail className="w-3.5 h-3.5 text-wood-gold shrink-0" />
                    <span>Inquiry: hello@antteakinterior.com</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Form column */}
            <div className="lg:col-span-8">
              <ConsultationForm 
                initialProductName={consultationSubject} 
                onSuccessSubmit={() => setConsultationSubject('')}
              />
            </div>

          </div>

        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-warm-beige text-wood-dark py-16 border-t border-wood-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo brand footer area */}
          <div className="md:col-span-1.5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-wood-gold">
                {/* Custom Small Ant SVG */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                  <path d="M 16 50 C 16 38, 26 30, 42 45 C 45 48, 45 52, 42 55 C 26 70, 16 62, 16 50 Z" stroke="currentColor" strokeWidth="3" />
                  <ellipse cx="54" cy="50" rx="9" ry="6" stroke="currentColor" strokeWidth="3" />
                  <circle cx="74" cy="50" r="6.5" stroke="currentColor" strokeWidth="3" />
                  <line x1="42" y1="50" x2="45" y2="50" stroke="currentColor" strokeWidth="2.5" />
                  <line x1="63" y1="50" x2="67" y2="50" stroke="currentColor" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-widest text-[#F0F0F0]">ANTTEAK</span>
                <span className="text-[9px] uppercase tracking-widest text-wood-gold">Interior</span>
              </div>
            </div>
            <p className="text-xs font-light text-wood-medium/75 max-w-xs leading-relaxed mt-2">
              Rancangan bermutu murni Jati Tua Grade-A. Presisi, kokoh, aman lingkungan & legal (SVLK Certified) diukir tangan artisan Jepara terbaik.
            </p>
          </div>

          {/* Quick links to anchors */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-wood-gold mb-5">Navigasi</h4>
            <div className="flex flex-col gap-3.5">
              <a href="#hero" className="text-xs text-wood-medium/80 hover:text-white transition-colors">Utama</a>
              <a href="#collection" className="text-xs text-wood-medium/80 hover:text-white transition-colors">Katalog Koleksi</a>
              <a href="#philosophy" className="text-xs text-wood-medium/80 hover:text-white transition-colors">Filosofi Ant & Teak</a>
              <a href="#room-inspiration" className="text-xs text-wood-medium/80 hover:text-white transition-colors">Inspirasi Ruang</a>
              <a href="#contact" className="text-xs text-wood-medium/80 hover:text-white transition-colors">Konsultasi Privat</a>
            </div>
          </div>

          {/* Category Quick selection */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-wood-gold mb-5">Kategori Koleksi</h4>
            <div className="flex flex-col gap-3.5">
              <button onClick={() => { setActiveCategory('living'); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left text-xs text-wood-medium/80 hover:text-white transition-colors cursor-pointer">Ruang Tamu</button>
              <button onClick={() => { setActiveCategory('dining'); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left text-xs text-wood-medium/80 hover:text-white transition-colors cursor-pointer">Ruang Makan</button>
              <button onClick={() => { setActiveCategory('bedroom'); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left text-xs text-wood-medium/80 hover:text-white transition-colors cursor-pointer">Kamar Tidur</button>
              <button onClick={() => { setActiveCategory('workspace'); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left text-xs text-wood-medium/80 hover:text-white transition-colors cursor-pointer">Ruang Kerja / Office</button>
            </div>
          </div>

          {/* Copyright information, SVLK logo text block */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-wood-gold mb-5">Legal & Workshop</h4>
            <div className="flex flex-col gap-3 text-xs text-wood-medium/80 leading-relaxed">
              <span>Hutan Lestari Lestari Perhutani</span>
              <span>SVLK Sertifikat: No. 4589/SVLK/2026</span>
              <span className="text-wood-gold font-semibold mt-2">© 2026 Antteak Interior. All Rights Reserved.</span>
            </div>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-sand/40 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] text-wood-medium/50">Powered by Antteak Artisan Woodworking Network. Built in Jepara & Jakarta.</span>
          <div className="flex gap-6">
            <span className="text-[10px] text-wood-medium/50 cursor-pointer hover:text-white transition-colors">Kebijakan Privasi</span>
            <span className="text-[10px] text-wood-medium/50 cursor-pointer hover:text-white transition-colors">Syarat Ketentuan Layanan</span>
          </div>
        </div>
      </footer>

      {/* Dynamic Popups / Overlays Dialog Panel */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onBookConsultation={handleBookConsultation}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
