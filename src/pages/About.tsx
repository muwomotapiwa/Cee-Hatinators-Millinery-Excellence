import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pb-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1549444226-ee9669128004?auto=format&fit=crop&q=80&w=2670" 
          alt="Our studio" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-royal/60" />
        <div className="relative text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif">Our Story</h1>
          <div className="h-0.5 w-16 bg-brand-crimson mx-auto mt-6" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-serif italic text-brand-wine">The Art of Millinery</h2>
          <p className="text-lg text-brand-lavender leading-relaxed font-light">
            Founded by lead designer Cee, our boutique was born from a passion for the theatre of millinery. We believe that a headpiece is more than an accessory; it is a declaration of elegance and identity.
          </p>
          <p className="text-lg text-brand-lavender leading-relaxed font-light">
            Based in the heart of Sandton, every Cee Hatinator is bespoke, hand-blocked, and finished with meticulous attention to detail. We source only the finest fabrics, feathers, and embellishments from around the globe to ensure your piece is as unique as the occasion it was made for.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <h3 className="font-serif text-2xl mb-4 italic">Bespoke Excellence</h3>
            <p className="text-sm text-brand-lavender leading-relaxed">Every piece is crafted to individual specifications, ensuring a perfect match for your attire.</p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-2xl mb-4 italic">Heritage Craft</h3>
            <p className="text-sm text-brand-lavender leading-relaxed">We use traditional millinery techniques combined with modern avant-garde design.</p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-2xl mb-4 italic">Global Reach</h3>
            <p className="text-sm text-brand-lavender leading-relaxed">From the Durban July to Royal Ascot, our pieces grace the most prestigious events.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
