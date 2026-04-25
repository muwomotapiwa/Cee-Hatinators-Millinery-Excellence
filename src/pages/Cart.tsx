import { motion } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const items = [
    { id: 1, name: "The Aurora Pearl", price: 3400, qty: 1, variant: "Medium", image: "https://images.unsplash.com/photo-1621511210884-6fdf358b5be4?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Midnight Gala Wide Brim", price: 5200, qty: 1, variant: "Bespoke", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400" },
  ];

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = subtotal > 2000 ? 0 : 250;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Item List */}
        <div className="flex-grow">
          <div className="flex items-end justify-between border-b border-brand-sage pb-6 mb-10">
            <h1 className="text-4xl font-serif">Your Boutique Bag</h1>
            <span className="text-xs uppercase tracking-widest text-brand-lavender font-bold">{items.length} Items</span>
          </div>

          <div className="space-y-10">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-start group border-b border-brand-sage/50 pb-10">
                <div className="w-32 aspect-[3/4] bg-brand-ivory border border-brand-sage overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="sm:ml-8 flex-grow space-y-2 text-center sm:text-left">
                  <span className="text-[10px] uppercase tracking-widest text-brand-lavender">Boutique Selection</span>
                  <h3 className="text-xl font-serif text-brand-royal underline decoration-brand-sage group-hover:decoration-brand-crimson transition-all">{item.name}</h3>
                  <p className="text-xs text-brand-lavender uppercase tracking-widest">Variant: <span className="text-brand-royal font-bold">{item.variant}</span></p>
                  
                  <div className="flex items-center justify-center sm:justify-start space-x-4 pt-4">
                    <div className="flex items-center border border-brand-sage">
                      <button className="p-2 hover:text-brand-crimson transition-colors"><Minus size={14} /></button>
                      <span className="px-4 text-sm font-bold min-w-[40px] text-center">{item.qty}</span>
                      <button className="p-2 hover:text-brand-crimson transition-colors"><Plus size={14} /></button>
                    </div>
                    <button className="text-brand-lavender hover:text-brand-crimson p-2 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="sm:ml-12 pt-4 sm:pt-1">
                  <span className="text-lg font-medium text-brand-wine tracking-tight">R{item.price.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

          <Link to="/shop" className="inline-flex items-center mt-12 text-xs font-bold uppercase tracking-[0.2em] text-brand-lavender hover:text-brand-royal transition-colors">
            <ShoppingBag size={14} className="mr-2" />
            Continue Browsing
          </Link>
        </div>

        {/* Sidebar Summary */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-white border border-brand-sage p-8 sticky top-32 shadow-sm">
            <h2 className="text-xl font-serif mb-8 border-b border-brand-sage pb-4 uppercase tracking-widest text-xs font-bold">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-brand-lavender uppercase tracking-widest">Subtotal</span>
                <span className="font-medium">R{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brand-lavender uppercase tracking-widest">Shipping</span>
                <span className="font-medium text-green-600 uppercase tracking-widest text-xs">{shipping === 0 ? 'Complimentary' : `R${shipping}`}</span>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-sage flex justify-between items-end">
                <span className="text-xs font-bold uppercase tracking-widest">Bag Total</span>
                <span className="text-3xl font-serif text-brand-royal tracking-tighter">R{(subtotal + shipping).toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Link 
                to="/checkout" 
                className="w-full bg-brand-royal text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-crimson transition-all flex items-center justify-center group"
              >
                Proceed to Checkout
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="p-4 bg-brand-ivory border border-dotted border-brand-sage rounded flex flex-col items-center">
                 <p className="text-[10px] text-brand-lavender uppercase tracking-[0.1em] text-center mb-2">Secure Payment via</p>
                 <div className="flex space-x-4 opacity-50 grayscale transition-all hover:grayscale-0">
                    <span className="text-[10px] font-bold">PAYFAST</span>
                    <span className="text-[10px] font-bold">YOCO</span>
                    <span className="text-[10px] font-bold">VISA</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
