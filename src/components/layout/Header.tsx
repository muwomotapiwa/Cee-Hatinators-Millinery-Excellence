import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-brand-royal text-brand-ivory py-2 text-center text-xs font-medium tracking-widest uppercase">
        <p>Free boutique shipping on all orders over R2000</p>
      </div>

      <nav className="bg-white/80 backdrop-blur-md border-b border-brand-sage sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/shop" className="text-sm font-medium hover:text-brand-crimson transition-colors uppercase tracking-wider">Shop</Link>
              <Link to="/about" className="text-sm font-medium hover:text-brand-crimson transition-colors uppercase tracking-wider">Our Story</Link>
            </div>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex flex-col items-center flex-1 md:flex-none">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter text-brand-royal uppercase">
                Cee Hatinators
              </span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-brand-lavender -mt-1 font-medium">Millinery Excellence</span>
            </Link>

            {/* Icons */}
            <div className="flex items-center space-x-2 sm:space-x-5">
              <button className="p-1 hover:text-brand-crimson transition-colors hidden sm:block">
                <Search size={20} />
              </button>
              <Link to="/account" className="p-1 hover:text-brand-crimson transition-colors hidden sm:block">
                <User size={20} />
              </Link>
              <Link to="/wishlist" className="p-1 hover:text-brand-crimson transition-colors hidden sm:block">
                <Heart size={20} />
              </Link>
              <Link to="/cart" className="p-1 hover:text-brand-crimson transition-colors relative">
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-crimson text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button 
                onClick={toggleMenu}
                className="md:hidden p-1 text-brand-royal hover:text-brand-crimson transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Overlay - Moved outside nav for better stacking/visibility */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-brand-royal/60 backdrop-blur-md z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-xs bg-white z-[110] shadow-2xl p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-end mb-10">
                <button onClick={closeMenu} className="text-brand-royal p-1 hover:text-brand-crimson transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-6">
                <Link 
                  to="/shop" 
                  onClick={closeMenu}
                  className="text-2xl font-serif text-brand-royal hover:text-brand-crimson transition-colors italic border-b border-brand-sage/30 pb-4"
                >
                  The Collection
                </Link>
                <Link 
                  to="/bespoke" 
                  onClick={closeMenu}
                  className="text-2xl font-serif text-brand-royal hover:text-brand-crimson transition-colors italic border-b border-brand-sage/30 pb-4"
                >
                  Bespoke Design
                </Link>
                <Link 
                  to="/about" 
                  onClick={closeMenu}
                  className="text-2xl font-serif text-brand-royal hover:text-brand-crimson transition-colors italic border-b border-brand-sage/30 pb-4"
                >
                  Our Story
                </Link>
                
                <div className="pt-6 grid grid-cols-2 gap-4">
                  <Link 
                    to="/shop" 
                    onClick={closeMenu}
                    className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender hover:text-brand-crimson flex flex-col items-center p-4 bg-brand-ivory/50 rounded-lg"
                  >
                    <Search size={18} className="mb-2" /> Search
                  </Link>
                  <Link 
                    to="/account" 
                    onClick={closeMenu}
                    className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender hover:text-brand-crimson flex flex-col items-center p-4 bg-brand-ivory/50 rounded-lg"
                  >
                    <User size={18} className="mb-2" /> Account
                  </Link>
                  <Link 
                    to="/wishlist" 
                    onClick={closeMenu}
                    className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender hover:text-brand-crimson flex flex-col items-center p-4 bg-brand-ivory/50 rounded-lg"
                  >
                    <Heart size={18} className="mb-2" /> Wishlist
                  </Link>
                  <Link 
                    to="/cart" 
                    onClick={closeMenu}
                    className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender hover:text-brand-crimson flex flex-col items-center p-4 bg-brand-ivory/50 rounded-lg"
                  >
                    <ShoppingBag size={18} className="mb-2" /> Bag ({totalItems})
                  </Link>
                </div>
              </nav>

              <div className="mt-auto pt-10">
                <p className="text-[10px] uppercase tracking-widest text-brand-lavender mb-3 opacity-60">Millinery Excellence</p>
                <div className="h-0.5 w-12 bg-brand-crimson" />
                <p className="text-[9px] text-brand-lavender/60 mt-4 leading-relaxed font-light font-serif italic italic">
                  Crafted for those who dare to stand out.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
