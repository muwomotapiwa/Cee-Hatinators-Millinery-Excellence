import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-serif mb-8">Get in Touch</h1>
          <p className="text-brand-lavender mb-12 leading-relaxed italic">
            Whether you're looking for a bespoke headpiece for a special race or have a question about our collections, our concierge team is here to assist you.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-brand-sage/20 p-3 rounded-full mr-4">
                <MapPin className="text-brand-royal" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-sm uppercase tracking-widest mb-1">Our Studio</h4>
                <p className="text-brand-lavender text-sm">Design District, Sandton, South Africa</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-brand-sage/20 p-3 rounded-full mr-4">
                <Mail className="text-brand-royal" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-sm uppercase tracking-widest mb-1">Email Us</h4>
                <p className="text-brand-lavender text-sm">concierge@ceehatinators.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-brand-sage/20 p-3 rounded-full mr-4">
                <Phone className="text-brand-royal" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-sm uppercase tracking-widest mb-1">Call / WhatsApp</h4>
                <p className="text-brand-lavender text-sm">+27 12 345 6789</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-brand-sage p-10 md:p-12 shadow-sm"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">First Name</label>
                <input type="text" className="w-full border-b border-brand-sage py-2 focus:border-brand-crimson outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Last Name</label>
                <input type="text" className="w-full border-b border-brand-sage py-2 focus:border-brand-crimson outline-none transition-colors" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Email Address</label>
              <input type="email" className="w-full border-b border-brand-sage py-2 focus:border-brand-crimson outline-none transition-colors" />
            </div>
            
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Inquiry Type</label>
              <select className="w-full border-b border-brand-sage py-2 bg-transparent focus:border-brand-crimson outline-none transition-colors">
                <option>General Inquiry</option>
                <option>Bespoke Order</option>
                <option>Wedding Group</option>
                <option>Wholesale</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Message</label>
              <textarea rows={4} className="w-full border-b border-brand-sage py-2 focus:border-brand-crimson outline-none transition-colors resize-none"></textarea>
            </div>
            
            <button className="w-full bg-brand-royal text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-crimson transition-all">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
