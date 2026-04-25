import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useFlash } from '../context/FlashContext';

export default function Contact() {
  const { flash } = useFlash();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    flash("Message sent successfully. We will be in touch soon.");
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-serif mb-8 italic text-brand-royal"
            >
              Contact the Studio
            </motion.h1>
            <p className="text-brand-lavender mb-12 font-light text-lg">
              Whether you have a question about our current collection or wish to discuss a custom design, our concierge team is here to assist.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-ivory flex items-center justify-center text-brand-royal mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender mb-1">Email</h4>
                  <p className="text-brand-royal">concierge@ceehatinators.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-ivory flex items-center justify-center text-brand-royal mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender mb-1">WhatsApp</h4>
                  <p className="text-brand-royal">+27 12 345 6789</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-ivory flex items-center justify-center text-brand-royal mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender mb-1">Stockists</h4>
                  <p className="text-brand-royal">Sandton, Johannesburg</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-brand-sage p-8 sm:p-12 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="First Name *" 
                  required 
                  className="w-full border-b border-brand-sage py-3 outline-none focus:border-brand-crimson transition-colors bg-transparent text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Last Name *" 
                  required 
                  className="w-full border-b border-brand-sage py-3 outline-none focus:border-brand-crimson transition-colors bg-transparent text-sm"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address *" 
                required 
                className="w-full border-b border-brand-sage py-3 outline-none focus:border-brand-crimson transition-colors bg-transparent text-sm"
              />
              <textarea 
                rows={5} 
                placeholder="Your Message *" 
                required 
                className="w-full border border-brand-sage p-4 outline-none focus:border-brand-crimson transition-colors bg-transparent text-sm resize-none"
              ></textarea>
              <button className="w-full bg-brand-royal text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-crimson transition-all flex items-center justify-center group">
                Send Message
                <Send size={14} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
