import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e31d85?auto=format&fit=crop&q=80&w=2670" 
            alt="Elegant fascinator hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-royal/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-royal/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl text-white"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">New Season Arrival</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Elegance for the <br />
              <span className="italic font-normal">Extraordinary</span>
            </h1>
            <p className="text-lg text-brand-ivory/90 mb-8 font-light leading-relaxed">
              Exquisite handmade fascinators and statement headwear designed to make an unforgettable impression at your next gala or event.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center sm:items-start">
              <Link 
                to="/shop" 
                className="bg-brand-crimson hover:bg-brand-deep-red text-white px-6 py-3 sm:px-8 sm:py-4 text-[10px] sm:text-sm font-medium uppercase tracking-widest transition-all inline-flex items-center group"
              >
                Shop the Collection
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4" />
              </Link>
              <Link 
                to="/bespoke" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 sm:px-8 sm:py-4 text-[10px] sm:text-sm font-medium uppercase tracking-widest transition-all"
              >
                Bespoke Design
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">The Curated Collections</h2>
          <div className="h-0.5 w-16 bg-brand-crimson mx-auto mb-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Royal Ascot", image: "https://images.unsplash.com/photo-1518835827776-35bd9d447477?auto=format&fit=crop&q=80&w=800", slug: "ascot" },
            { name: "Bridal Suite", image: "https://images.unsplash.com/photo-1450297350677-623de575f31c?auto=format&fit=crop&q=80&w=800", slug: "bridal" },
            { name: "Garden Soiree", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800", slug: "garden" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] group cursor-pointer overflow-hidden border border-brand-sage"
            >
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-royal/30 group-hover:bg-brand-royal/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl mb-2">{item.name}</h3>
                <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity border-b border-white pb-1">View Collection</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
