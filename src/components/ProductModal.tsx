import { useState } from 'react';
import { Product } from '../types';
import { X, Check, Ruler, Box, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onBookConsultation: (productName: string) => void;
}

export default function ProductModal({ product, onClose, onBookConsultation }: ProductModalProps) {
  const [selectedFinish, setSelectedFinish] = useState('Natural Matte Jati');
  const [selectedFabric, setSelectedFabric] = useState('Eggshell White Linen');

  const finishes = ['Natural Matte Jati', 'Satin Teak Oil', 'Madu Klasik'];
  const fabrics = ['Eggshell White Linen', 'Sand Beige Wool', 'Oatmeal Cotton'];

  const handlesBookClick = () => {
    onBookConsultation(product.name);
    onClose();
  };

  return (
    <div
      id="product-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wood-dark/70 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        id="product-modal-container"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-warm-beige max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border border-sand/30"
      >
        {/* Close Button Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 bg-champagne/80 hover:bg-wood-gold text-wood-dark hover:text-warm-beige rounded-full transition-colors duration-300 focus:outline-none cursor-pointer"
          title="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image visual panel */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] bg-champagne">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Handcrafted wooden badge */}
            <div className="absolute bottom-5 left-5 bg-wood-dark/90 backdrop-blur-md px-4 py-2 rounded-full border border-wood-gold/30 text-white flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-wood-gold" />
              <span className="text-[10px] font-semibold tracking-wider uppercase text-wood-gold">
                Premium Joinery
              </span>
            </div>
          </div>

          {/* Configuration & detail description panel */}
          <div className="p-8 md:p-10 flex flex-col justify-between max-h-[90vh] overflow-y-auto">
            <div>
              {/* Product category indicator */}
              <span className="text-xs uppercase tracking-[0.25em] text-wood-gold font-bold">
                {product.category === 'living' ? 'Koleksi Ruang Tamu' :
                 product.category === 'dining' ? 'Koleksi Ruang Makan' :
                 product.category === 'bedroom' ? 'Koleksi Kamar Tidur' : 'Koleksi Workspace'}
              </span>

              {/* Title & Price */}
              <h2 className="font-serif text-3xl font-bold text-wood-dark tracking-wide mt-2">
                {product.name}
              </h2>
              
              <div className="font-serif text-2xl font-bold text-wood-gold mt-3">
                {product.price}
              </div>

              {/* Dimensions Section */}
              <div className="flex items-center gap-2 mt-4 text-xs font-medium text-wood-medium/70 bg-champagne/60 p-2.5 rounded-lg border border-sand/15">
                <Ruler className="w-4 h-4 text-wood-gold shrink-0" />
                <span>Dimensi: {product.dimensions}</span>
              </div>

              {/* Description */}
              <p className="text-sm font-light text-wood-medium/85 mt-6 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features Bullet Grid */}
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-wood-dark flex items-center gap-1.5 mb-3">
                  <Box className="w-3.5 h-3.5 text-wood-gold" /> Karakteristik Produk
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start text-xs text-wood-medium/80">
                      <div className="p-0.5 rounded-full bg-wood-gold/15 mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-wood-gold" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Finishing Customization option */}
              <div className="mt-8 border-t border-sand/30 pt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-wood-dark block mb-3">
                  Pilihan Tipe Finishing Kayu
                </span>
                <div className="flex flex-wrap gap-2">
                  {finishes.map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setSelectedFinish(finish)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 cursor-pointer ${
                        selectedFinish === finish
                          ? 'bg-wood-gold border-wood-gold text-warm-beige shadow-md'
                          : 'bg-transparent border-sand hover:border-wood-gold/70 text-wood-medium'
                      }`}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>

              {/* Linen Color Options - conditional if applicable (usually chairs/sofas have cushioning, we can show mock for consistency or conditional) */}
              {(product.category === 'living' || product.category === 'dining' || product.id === 'prod-1' || product.id === 'prod-4') && (
                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-wood-dark block mb-3">
                    Pilihan Tekstur Kain Linen
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {fabrics.map((fabric) => (
                      <button
                        key={fabric}
                        onClick={() => setSelectedFabric(fabric)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 cursor-pointer ${
                          selectedFabric === fabric
                            ? 'bg-wood-gold border-wood-gold text-warm-beige shadow-md'
                            : 'bg-transparent border-sand hover:border-wood-gold/70 text-wood-medium'
                        }`}
                      >
                        {fabric}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Booking CTA */}
            <div className="mt-8 border-t border-sand/30 pt-6">
              <button
                id="modal-request-consultation"
                onClick={handlesBookClick}
                className="w-full flex items-center justify-center gap-2 bg-wood-gold hover:bg-wood-gold/90 text-warm-beige py-4 rounded-2xl font-semibold uppercase tracking-wider text-xs transition-all duration-500 shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                Tanyakan Konsultasi Custome Rangka & Ukuran
              </button>
              <span className="text-[10px] text-wood-medium/55 text-center block mt-2">
                *Gratis konsultasi dengan desainer interior kami untuk kustomisasi kayu teak.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
