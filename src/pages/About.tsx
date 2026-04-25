import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-4 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-brand-crimson mb-4 block"
        >
          Established 2020
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif mb-12 italic text-brand-royal"
        >
          Our Story
        </motion.h1>
        
        <div className="aspect-video mb-16 overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1596450514735-244027723ed6?auto=format&fit=crop&q=80&w=2000" 
            alt="Millinery Studio" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg mx-auto text-brand-lavender font-light leading-loose space-y-8">
          <p>
            Cee Hatinators was born from a passion for the architectural beauty of millinery. Founded by Cee, a self-taught designer with an eye for contemporary silhouettes, our studio specializes in headwear that blends traditional techniques with modern flair.
          </p>
          <p>
            Every piece is hand-blocked and sculpted in our Sandton studio, using the finest sinamay, silk abaca, and ethically sourced trims. We believe that a hat is not just an accessory—it is a crowning glory that transforms an outfit into a statement.
          </p>
          <div className="h-px bg-brand-sage w-24 mx-auto my-12" />
          <p className="font-serif italic text-2xl text-brand-royal">
            "We don't just make hats; we create confidence."
          </p>
        </div>
      </section>
    </div>
  );
}
