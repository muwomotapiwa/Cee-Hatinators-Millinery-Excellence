import { motion } from 'motion/react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Heart className="mx-auto text-brand-crimson mb-6" size={48} />
        <h1 className="text-4xl font-serif italic text-brand-royal mb-4">My Wishlist</h1>
        <p className="text-brand-lavender font-light">Items you've thoughtfully curated for future occasions.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-brand-ivory/30 border border-brand-sage border-dashed p-20 text-center"
      >
        <p className="text-brand-lavender italic mb-8">Your wishlist is currently empty.</p>
        <Link 
          to="/shop" 
          className="inline-block bg-brand-royal text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-crimson transition-all"
        >
          Explore the Collection
        </Link>
      </motion.div>
    </div>
  );
}
