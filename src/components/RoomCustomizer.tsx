import { useState } from 'react';
import { ROOM_STYLES, PRODUCTS } from '../data';
import { Product } from '../types';
import { ArrowRight, Layout, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RoomCustomizerProps {
  onProductClick: (product: Product) => void;
}

export default function RoomCustomizer({ onProductClick }: RoomCustomizerProps) {
  const [selectedStyleId, setSelectedStyleId] = useState(ROOM_STYLES[0].id);

  const activeStyle = ROOM_STYLES.find(s => s.id === selectedStyleId) || ROOM_STYLES[0];

  // Map product names to actual Product entities
  const matchedProducts = PRODUCTS.filter(p => 
    activeStyle.activeProducts.includes(p.name)
  );

  return (
    <div
      id="room-customizer-container"
      className="bg-champagne/45 rounded-3xl border border-sand/20 p-6 md:p-10 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left side text selection */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-wood-gold/15 border border-wood-gold/15 rounded-full w-fit mb-5 text-wood-gold">
            <Layout className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase font-bold tracking-widest leading-none">
              Inspirasi Antteak
            </span>
          </div>

          <h3 className="font-serif text-3xl font-bold text-wood-dark tracking-wide leading-tight mb-4">
            Sesuaikan Dengan Karakter Rumah Anda
          </h3>
          
          <p className="text-sm font-light text-wood-medium/80 mb-8 leading-relaxed">
            Setiap pengerjaan rancangan kayu jati kami memiliki fleksibilitas tinggi agar menyatu mulus ke berbagai sudut interior. Pilih inspirasi gaya ruangan di bawah ini untuk melihat kurasi produk pilihan kami:
          </p>

          {/* Style Selector Buttons */}
          <div className="flex flex-col gap-3">
            {ROOM_STYLES.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyleId(style.id)}
                className={`group p-4 rounded-2xl flex items-center justify-between text-left border transition-all duration-350 cursor-pointer ${
                  selectedStyleId === style.id
                    ? 'bg-wood-gold border-wood-gold text-warm-beige shadow-md'
                    : 'bg-champagne/60 border-sand/30 hover:border-wood-gold text-wood-medium'
                }`}
              >
                <div>
                  <h4 className={`font-serif text-base font-semibold ${
                    selectedStyleId === style.id ? 'text-warm-beige' : 'text-wood-dark'
                  }`}>
                    {style.name}
                  </h4>
                  <p className={`text-[11px] font-light mt-0.5 max-w-xs ${
                    selectedStyleId === style.id ? 'text-warm-beige/80' : 'text-wood-medium/75'
                  }`}>
                    {style.name === "Japandi Warmth" ? "Harmoni Jepang & Skandinavia" :
                     style.name === "Modern Atelier" ? "Industrial dramatis, kaya kontras" : "Ketenangan mutlak garis bersih"}
                  </p>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                  selectedStyleId === style.id ? 'text-warm-beige translate-x-1' : 'text-wood-medium/40 group-hover:translate-x-1'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right side dynamic moodboard visualization */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStyleId}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-champagne"
            >
              <img
                src={activeStyle.coverImage}
                alt={activeStyle.name}
                className="w-full h-full object-cover brightness-[0.93]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="text-[10px] uppercase font-semibold tracking-widest text-wood-gold">
                  Inspirasi Ruang Terpilih
                </span>
                <h4 className="font-serif text-2xl font-bold text-white tracking-wide mt-1">
                  {activeStyle.name}
                </h4>
                <p className="text-xs text-warm-beige/85 font-light mt-2 max-w-md leading-relaxed">
                  {activeStyle.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Featured items associated */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-wood-dark flex items-center gap-1.5 mb-3 px-1">
              <Info className="w-3.5 h-3.5 text-wood-gold" /> Furnitur Jati Utama di Ruangan Ini:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matchedProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onProductClick(product)}
                  className="group flex gap-4 p-3 bg-champagne/40 hover:bg-champagne/80 border border-sand hover:border-wood-gold/40 rounded-xl transition-all duration-300 cursor-pointer shadow-sm items-center fill-mode-both"
                >
                  <div className="w-16 h-16 rounded-lg bg-champagne overflow-hidden flex items-center shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="font-serif text-sm font-bold text-wood-dark group-hover:text-wood-gold transition-colors duration-300">
                      {product.name}
                    </h5>
                    <span className="text-xs text-wood-medium/70 mt-0.5">
                      {product.price}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-wood-gold font-bold mt-1">
                      Klik Hubungkan Detail →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
