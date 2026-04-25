import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Truck, CreditCard, CheckCircle, ChevronRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Checkout Progress */}
      <div className="flex items-center justify-center mb-16 space-x-4 md:space-x-8">
        {[
          { icon: Truck, label: 'Shipping' },
          { icon: CreditCard, label: 'Payment' },
          { icon: CheckCircle, label: 'Confirmation' }
        ].map((s, i) => (
          <div key={i} className="flex items-center space-x-2 md:space-x-4">
            <div className={`p-3 rounded-full border ${step > i + 1 ? 'bg-brand-sage border-brand-sage text-white' : step === i + 1 ? 'border-brand-royal text-brand-royal' : 'border-gray-200 text-gray-300'}`}>
               <s.icon size={18} />
            </div>
            <span className={`hidden sm:block text-[10px] uppercase font-bold tracking-widest ${step === i + 1 ? 'text-brand-royal' : 'text-gray-400'}`}>{s.label}</span>
            {i < 2 && <ChevronRight size={14} className="text-gray-300" />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white border border-brand-sage p-8 md:p-12 shadow-sm"
          >
            <h2 className="text-2xl font-serif mb-8 border-b border-brand-sage pb-4 italic tracking-wide">Shipping Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Full Name</label>
                <input type="text" className="w-full border-b border-brand-sage py-2 focus:border-brand-crimson outline-none" placeholder="Jane Sovereign" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Phone Number</label>
                <input type="text" className="w-full border-b border-brand-sage py-2 focus:border-brand-crimson outline-none" placeholder="+27 00 000 0000" />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Street Address</label>
                <input type="text" className="w-full border-b border-brand-sage py-2 focus:border-brand-crimson outline-none" placeholder="123 Boutique Lane" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">City</label>
                <input type="text" className="w-full border-b border-brand-sage py-2 focus:border-brand-crimson outline-none" placeholder="Sandton" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Postal Code</label>
                <input type="text" className="w-full border-b border-brand-sage py-2 focus:border-brand-crimson outline-none" placeholder="2196" />
              </div>
            </div>
            
            <div className="bg-brand-ivory p-6 border border-brand-sage mb-8">
               <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4">Preferred Courier</h4>
               <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 rounded-full border-2 border-brand-royal flex items-center justify-center">
                     <div className="w-2 h-2 bg-brand-royal rounded-full" />
                  </div>
                  <span className="text-sm font-medium">Boutique Express Delivery (3-5 Days) — R0.00</span>
               </label>
            </div>

            <button 
              onClick={() => setStep(2)}
              className="w-full bg-brand-royal text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-crimson transition-all flex items-center justify-center group"
            >
              Continue to Payment
              <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white border border-brand-sage p-8 md:p-12 shadow-sm text-center"
          >
            <h2 className="text-2xl font-serif mb-4 italic tracking-wide">Finalise Order</h2>
            <p className="text-brand-lavender text-sm mb-12 italic">You will be redirected to our secure payment gateway (PayFast) to complete your transaction.</p>
            
            <div className="max-w-xs mx-auto p-8 border border-dashed border-brand-sage mb-12 bg-brand-ivory/30">
               <span className="text-xs uppercase tracking-widest text-brand-lavender font-bold block mb-2">Total Amount Due</span>
               <span className="text-4xl font-serif text-brand-royal">R8,600</span>
            </div>

            <div className="flex flex-col space-y-4">
               <button 
                onClick={() => setStep(3)}
                className="w-full bg-brand-crimson text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-deep-red transition-all flex items-center justify-center group shadow-md"
               >
                 <Lock size={14} className="mr-2" />
                 Pay Securely via PayFast
               </button>
               <button onClick={() => setStep(1)} className="text-[10px] uppercase font-bold tracking-widest text-brand-lavender hover:text-brand-royal transition-colors">Go Back to Shipping</button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-brand-sage p-12 md:p-20 shadow-sm text-center"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
               <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-serif mb-4 italic tracking-wide">Thank You, Divine.</h2>
            <p className="text-brand-lavender text-sm mb-8 leading-relaxed max-w-sm mx-auto italic">
               Your order #CH-2026-001 has been received. Our artisans are now preparing your pieces for their grand entrance.
            </p>
            <div className="h-0.5 w-12 bg-brand-sage mx-auto mb-8" />
            <Link 
              to="/shop" 
              className="inline-block bg-brand-royal text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-crimson transition-all"
            >
              Return to Storefront
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
