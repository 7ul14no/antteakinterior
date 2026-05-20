import { Product } from '../types';
import { Eye, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetail: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetail }: ProductCardProps) {
  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative bg-champagne/45 border border-sand/50 hover:border-wood-gold/40 rounded-2xl p-4 transition-all duration-500 hover:shadow-xl flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Elegant Image Container with Zoom & Hover Actions */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-champagne flex items-center justify-center mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-wood-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button
              onClick={() => onViewDetail(product)}
              className="p-3 bg-warm-beige hover:bg-wood-gold text-wood-dark hover:text-warm-beige rounded-full shadow-lg transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 cursor-pointer"
              title="Lihat Detail"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimalist product details */}
        <div className="px-1 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-wood-gold font-bold">
            {product.category === 'living' ? 'Ruang Tamu' :
             product.category === 'dining' ? 'Ruang Makan' :
             product.category === 'bedroom' ? 'Kamar Tidur' : 'Meja Kerja'}
          </span>
          <span className="text-xs text-wood-medium/60 font-mono">
            {product.dimensions.split(' ')[1]} {product.dimensions.split(' ')[2]}
          </span>
        </div>

        <h3 className="font-serif text-lg font-bold text-wood-dark tracking-wide mt-2 px-1 group-hover:text-wood-gold transition-colors duration-300">
          {product.name}
        </h3>
      </div>

      <div className="mt-4 px-1 pt-3 border-t border-sand/10 flex items-center justify-between">
        <span className="font-serif text-base font-bold text-wood-dark">
          {product.price}
        </span>
        
        <button
          onClick={() => onViewDetail(product)}
          className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-wood-dark group-hover:text-wood-gold transition-colors duration-300"
        >
          <span>Detail</span>
          <Plus className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-90" />
        </button>
      </div>
    </div>
  );
}
