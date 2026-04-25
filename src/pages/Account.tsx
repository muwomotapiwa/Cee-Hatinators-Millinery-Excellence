import { motion } from 'motion/react';
import { User, LogIn } from 'lucide-react';

export default function Account() {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-brand-ivory rounded-full flex items-center justify-center mx-auto mb-6 text-brand-royal">
            <User size={32} />
          </div>
          <h1 className="text-3xl font-serif italic text-brand-royal mb-2">Welcome Back</h1>
          <p className="text-xs text-brand-lavender uppercase tracking-widest font-bold">Sign in to your boutique profile</p>
        </div>

        <form className="space-y-6">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full border-b border-brand-sage py-4 outline-none focus:border-brand-crimson transition-colors bg-transparent text-sm"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full border-b border-brand-sage py-4 outline-none focus:border-brand-crimson transition-colors bg-transparent text-sm"
          />
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-brand-lavender">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            <button type="button" className="hover:text-brand-crimson">Forgot Password?</button>
          </div>
          <button className="w-full bg-brand-royal text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-crimson transition-all flex items-center justify-center group shadow-lg">
            Sign In
            <LogIn size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-brand-sage text-center">
          <p className="text-xs text-brand-lavender mb-6">New to Cee Hatinators?</p>
          <button className="text-xs font-bold text-brand-royal uppercase tracking-widest border-b-2 border-brand-royal pb-1 hover:text-brand-crimson hover:border-brand-crimson transition-all">
            Join the Rotation
          </button>
        </div>
      </div>
    </div>
  );
}
