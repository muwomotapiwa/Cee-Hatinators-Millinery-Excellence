import { motion } from 'motion/react';
import { Ruler, Palette, Sparkles, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useFlash } from '../context/FlashContext';

export default function Bespoke() {
  const { flash } = useFlash();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    flash("Bespoke request submitted successfully");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-brand-sage p-12 md:p-20 shadow-sm"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-4xl font-serif mb-4">Request Received</h1>
          <p className="text-brand-lavender italic mb-8">
            Thank you for choosing Cee Hatinators. Lead designer Cee will review your inspirations and contact you within 48 hours to schedule a virtual concierge consultation.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-brand-royal uppercase tracking-widest border-b-2 border-brand-royal pb-1 hover:text-brand-crimson hover:border-brand-crimson transition-all"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=2670" 
          alt="Bespoke process" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-royal/70" />
        <div className="relative text-center text-white px-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.4em] mb-4 block"
          >
            Exclusively Yours
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-6 italic"
          >
            The Bespoke Experience
          </motion.h1>
          <div className="h-0.5 w-24 bg-brand-crimson mx-auto mt-6" />
        </div>
      </section>

      {/* The Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="text-center group">
            <div className="w-16 h-16 bg-brand-ivory border border-brand-sage rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-royal group-hover:text-white transition-all duration-500">
              <Sparkles size={24} />
            </div>
            <h3 className="font-serif text-xl mb-4 italic">Inspiration</h3>
            <p className="text-sm text-brand-lavender leading-relaxed">Share your vision, your attire, and the event's atmosphere. We begin with a curated consultation.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-brand-ivory border border-brand-sage rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-royal group-hover:text-white transition-all duration-500">
              <Palette size={24} />
            </div>
            <h3 className="font-serif text-xl mb-4 italic">Craftsmanship</h3>
            <p className="text-sm text-brand-lavender leading-relaxed">Cee meticulously hand-sculpts every element, from sinamay blocking to bespoke feather-work.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-brand-ivory border border-brand-sage rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-royal group-hover:text-white transition-all duration-500">
              <Ruler size={24} />
            </div>
            <h3 className="font-serif text-xl mb-4 italic">The Final Fit</h3>
            <p className="text-sm text-brand-lavender leading-relaxed">Precision measurements and secure fastening ensure your piece is as comfortable as it is divine.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-serif mb-8 italic">Begin Your Journey</h2>
            <p className="text-brand-lavender mb-12 leading-relaxed font-light text-lg">
              Allow us to create a statement piece that perfectly complements your silhouette and story. Please provide as much detail as possible about your requirements.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Event Date</label>
                  <input type="date" required className="w-full border-b border-brand-sage py-3 focus:border-brand-crimson outline-none transition-colors bg-transparent" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Occasion Type</label>
                  <select className="w-full border-b border-brand-sage py-3 bg-transparent focus:border-brand-crimson outline-none transition-colors">
                    <option>Royal Ascot / Race Day</option>
                    <option>Wedding - Bride</option>
                    <option>Wedding - Guest / Mother of</option>
                    <option>Gala / Awards Evening</option>
                    <option>Other Special Event</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Describe Your Vision</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Share details about your outfit colors, preferred styles, and any specific materials (e.g., pearls, veiling, silk roses)..."
                  className="w-full border border-brand-sage p-4 focus:border-brand-crimson outline-none transition-colors resize-none text-sm bg-brand-ivory/20"
                ></textarea>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender">Budget Range (Optional)</label>
                <div className="flex gap-4">
                  {['R1500 - R3000', 'R3000 - R6000', 'R6000+'].map(range => (
                    <label key={range} className="flex-grow">
                      <input type="radio" name="budget" className="sr-only peer" />
                      <div className="text-center py-3 border border-brand-sage text-[10px] uppercase tracking-widest font-bold peer-checked:bg-brand-royal peer-checked:text-white peer-checked:border-brand-royal cursor-pointer hover:border-brand-royal transition-all">
                        {range}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-brand-royal text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-crimson transition-all flex items-center justify-center group shadow-lg">
                Submit Consultation Request
                <Send size={14} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="relative">
            <div className="sticky top-32 space-y-8">
              <div className="aspect-[3/4] overflow-hidden border border-brand-sage shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1518835827776-35bd9d447477?auto=format&fit=crop&q=80&w=1200" 
                  alt="Custom piece" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-royal/80 to-transparent text-white">
                  <span className="text-[10px] uppercase tracking-widest font-bold mb-2 block">Our Signature</span>
                  <h3 className="font-serif text-2xl italic">The Sandton Sunray</h3>
                  <p className="text-xs text-brand-ivory/80 mt-2 font-light">A bespoke creation for the Durban July VIP marquee.</p>
                </div>
              </div>
              
              <div className="bg-brand-royal text-brand-ivory p-8 border border-brand-sage italic text-sm leading-relaxed">
                "Cee turned my vague ideas into a masterpiece. The fascinator was not just an accessory; it was the conversation starter of the entire wedding."
                <span className="block mt-4 text-[10px] uppercase tracking-widest font-bold not-italic">— Victoria M., Sandton</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
