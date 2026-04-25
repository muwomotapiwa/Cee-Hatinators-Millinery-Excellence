import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Heart, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
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
            <Link to="/" className="flex-shrink-0 flex flex-col items-center">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-brand-royal uppercase">
                Cee Hatinators
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-lavender -mt-1 font-medium">Millinery Excellence</span>
            </Link>

            {/* Icons */}
            <div className="flex items-center space-x-5">
              <button className="p-1 hover:text-brand-crimson transition-colors">
                <Search size={20} />
              </button>
              <Link to="/account" className="p-1 hover:text-brand-crimson transition-colors">
                <User size={20} />
              </Link>
              <Link to="/wishlist" className="p-1 hover:text-brand-crimson transition-colors hidden sm:block">
                <Heart size={20} />
              </Link>
              <Link to="/cart" className="p-1 hover:text-brand-crimson transition-colors relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-brand-crimson text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </Link>
              <button className="md:hidden p-1">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
