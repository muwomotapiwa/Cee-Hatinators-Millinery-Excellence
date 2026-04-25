import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-brand-ivory/50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white border border-brand-sage p-8 md:p-12 shadow-sm"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif mb-2">Welcome Back</h1>
          <p className="text-xs text-brand-lavender uppercase tracking-widest">Sign in to your boutique account</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-sage" size={16} />
              <input 
                type="email" 
                className="w-full border border-brand-sage pl-10 pr-4 py-3 focus:border-brand-crimson outline-none transition-colors text-sm"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-end mr-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender ml-1">Password</label>
              <Link to="/forgot-password" size="sm" className="text-[10px] text-brand-crimson uppercase tracking-widest font-semibold hover:underline">Forgot?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-sage" size={16} />
              <input 
                type="password" 
                className="w-full border border-brand-sage pl-10 pr-4 py-3 focus:border-brand-crimson outline-none transition-colors text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 ml-1">
            <input type="checkbox" id="remember" className="rounded border-brand-sage text-brand-crimson focus:ring-brand-crimson" />
            <label htmlFor="remember" className="text-[10px] text-brand-lavender uppercase tracking-widest cursor-pointer">Remember me</label>
          </div>

          <button className="w-full bg-brand-royal text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-crimson transition-all flex items-center justify-center group">
            Sign In
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-brand-sage text-center">
          <p className="text-xs text-brand-lavender mb-4 uppercase tracking-widest">New to Cee Hatinators?</p>
          <Link 
            to="/signup" 
            className="text-xs font-bold text-brand-royal uppercase tracking-widest hover:text-brand-crimson transition-colors"
          >
            Create an Account
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
