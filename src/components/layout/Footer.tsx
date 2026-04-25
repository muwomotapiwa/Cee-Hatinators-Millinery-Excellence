import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-royal text-brand-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl mb-4 italic">Cee Hatinators</h3>
            <p className="text-brand-lavender text-sm leading-relaxed max-w-sm mb-6">
              Bespoke headpieces and elegant fascinators crafted for the contemporary woman. Join the rotation of style and millinery excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-pink transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-pink transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-pink transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-widest">Client Concierge</h4>
            <ul className="space-y-3 text-sm text-brand-lavender">
              <li><Link to="/contact" className="hover:text-brand-ivory transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-brand-ivory transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-brand-ivory transition-colors">FAQ</Link></li>
              <li><Link to="/bespoke" className="hover:text-brand-ivory transition-colors">Bespoke Orders</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-widest">Boutique</h4>
            <ul className="space-y-3 text-sm text-brand-lavender">
              <li>Sandton, South Africa</li>
              <li>Email: concierge@ceehatinators.com</li>
              <li>WhatsApp: +27 12 345 6789</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-brand-lavender">
          <p>&copy; {new Date().getFullYear()} Cee Hatinators. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-brand-ivory transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-ivory transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
