import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight, UserPlus } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Signup() {
  const [searchParams] = useSearchParams();
  const [referralToken, setReferralToken] = useState<string | null>(null);

  useEffect(() => {
    const token = searchParams.get('ref');
    if (token) {
      setReferralToken(token);
      localStorage.setItem('referral_token', token);
    }
  }, [searchParams]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-brand-ivory/50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-white border border-brand-sage p-8 md:p-12 shadow-sm"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif mb-2">Create Account</h1>
          <p className="text-xs text-brand-lavender uppercase tracking-widest">Join the Cee Hatinators inner circle</p>
        </div>

        {referralToken && (
          <div className="mb-8 p-4 bg-brand-sage/10 border border-brand-sage text-center">
            <p className="text-xs text-brand-wine font-medium uppercase tracking-wider italic">
              ✨ You've been referred! Complete your first purchase to unlock your shared discount.
            </p>
          </div>
        )}

        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender ml-1">First Name</label>
              <input 
                type="text" 
                className="w-full border border-brand-sage px-4 py-3 focus:border-brand-crimson outline-none transition-colors text-sm"
                placeholder="Jane"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender ml-1">Last Name</label>
              <input 
                type="text" 
                className="w-full border border-brand-sage px-4 py-3 focus:border-brand-crimson outline-none transition-colors text-sm"
                placeholder="Sovereign"
              />
            </div>
          </div>

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
            <label className="text-[10px] uppercase tracking-widest font-bold text-brand-lavender ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-sage" size={16} />
              <input 
                type="password" 
                className="w-full border border-brand-sage pl-10 pr-4 py-3 focus:border-brand-crimson outline-none transition-colors text-sm"
                placeholder="••••••••"
              />
            </div>
            <p className="text-[9px] text-brand-lavender uppercase tracking-tighter mt-1">Must be at least 8 characters with one special character.</p>
          </div>

          <div className="flex items-start space-x-2 ml-1">
            <input type="checkbox" id="terms" className="mt-1 rounded border-brand-sage text-brand-crimson focus:ring-brand-crimson" />
            <label htmlFor="terms" className="text-[10px] text-brand-lavender uppercase tracking-widest cursor-pointer leading-tight">
              I agree to the <Link to="/terms" className="text-brand-royal font-bold underline">Terms of Service</Link> and <Link to="/privacy" className="text-brand-royal font-bold underline">Privacy Policy</Link>.
            </label>
          </div>

          <button className="w-full bg-brand-royal text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-crimson transition-all flex items-center justify-center group">
            Register Account
            <UserPlus size={14} className="ml-2 group-hover:scale-110 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-brand-sage text-center">
          <p className="text-xs text-brand-lavender mb-4 uppercase tracking-widest">Already have an account?</p>
          <Link 
            to="/login" 
            className="text-xs font-bold text-brand-royal uppercase tracking-widest hover:text-brand-crimson transition-colors"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
