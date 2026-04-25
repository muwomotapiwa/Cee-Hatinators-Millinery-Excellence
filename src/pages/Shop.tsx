import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, ChevronDown, Heart, ShoppingBag } from 'lucide-react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 1, name: "The Aurora Pearl", price: "R3,400", category: "Fascinators", image: "https://images.unsplash.com/photo-1621511210884-6fdf358b5be4?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Midnight Gala Wide Brim", price: "R5,200", category: "Statement Hats", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Blush Gardenia Clip", price: "R1,800", category: "Headpieces", image: "https://images.unsplash.com/photo-1549444226-ee9669128004?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Royal Purple Pillbox", price: "R4,100", category: "Pillbox", image: "https://images.unsplash.com/photo-1544441893-675973e31d85?auto=format&fit=crop&q=80&w=800" },
    { id: 5, name: "Emerald Forest Veiled", price: "R2,900", category: "Fascinators", image: "https://images.unsplash.com/photo-1518835827776-35bd9d447477?auto=format&fit=crop&q=80&w=800" },
    { id: 6, name: "Pearl & Lace Headband", price: "R1,200", category: "Headpieces", image: "https://images.unsplash.com/photo-1450297350677-623de575f31c?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-brand-sage pb-12">
        <div className="max-w-lg">
          <nav className="text-xs font-medium text-brand-lavender uppercase tracking-widest mb-4">
            <span className="hover:text-brand-crimson cursor-pointer">Home</span> / 
            <span className="text-brand-royal ml-1">Shop</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif">The Collection</h1>
          <p className="mt-4 text-brand-lavender text-sm italic">
            Each piece is meticulously hand-crafted in our South African studio, ensuring unparalleled quality and design for your most special occasions.
          </p>
        </div>

        <div className="flex items-center space-x-4 w-full md:w-auto">
          <button className="flex items-center space-x-2 border border-brand-sage px-4 py-2 text-xs uppercase tracking-widest hover:border-brand-royal transition-colors">
            <Filter size={14} />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 border border-brand-sage px-4 py-2 text-xs uppercase tracking-widest hover:border-brand-royal transition-colors ml-auto md:ml-0">
            <span>Sort: Newest</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-ivory border border-brand-sage mb-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 text-brand-royal hover:text-brand-crimson transition-colors shadow-sm">
                  <Heart size={18} />
                </button>
                <button className="bg-brand-royal p-2 text-white hover:bg-brand-crimson transition-colors shadow-sm">
                  <ShoppingBag size={18} />
                </button>
              </div>
              {product.id % 3 === 0 && (
                <div className="absolute top-4 left-4 bg-brand-crimson text-white text-[10px] font-bold uppercase py-1 px-3 tracking-widest">
                  Sale
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-brand-lavender">{product.category}</span>
              <h3 className="font-serif text-lg text-brand-royal group-hover:text-brand-crimson transition-colors">{product.name}</h3>
              <p className="text-sm font-medium text-brand-wine tracking-wide">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-20 flex justify-center border-t border-brand-sage pt-12">
        <button className="text-sm font-medium uppercase tracking-[0.2em] border-b-2 border-brand-crimson pb-1">Load More Excellence</button>
      </div>
    </div>
  );
}
