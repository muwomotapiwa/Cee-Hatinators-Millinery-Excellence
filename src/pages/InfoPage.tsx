import React from 'react';
import { motion } from 'motion/react';

export default function InfoPage({ title, content }: { title: string, content: React.ReactNode }) {
  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif mb-12 italic text-brand-royal"
      >
        {title}
      </motion.h1>
      <div className="prose prose-sm sm:prose-base max-w-none text-brand-lavender font-light leading-relaxed space-y-6">
        {content}
      </div>
    </div>
  );
}
