import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Heart, Check, ArrowLeft, Star, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { slug } = useParams();
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [activeTab, setActiveTab] = useState('description');
  const [mainImage, setMainImage] = useState("https://images.unsplash.com/photo-1621511210884-6fdf358b5be4?auto=format&fit=crop&q=80&w=1200");

  const thumbs = [
    "https://images.unsplash.com/photo-1621511210884-6fdf358b5be4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1544441893-675973e31d85?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-[10px] font-medium text-brand-lavender uppercase tracking-widest mb-12 flex items-center">
        <Link to="/" className="hover:text-brand-crimson">Home</Link>
        <ChevronRight size={10} className="mx-2" />
        <Link to="/shop" className="hover:text-brand-crimson">The Collection</Link>
        <ChevronRight size={10} className="mx-2" />
        <span className="text-brand-royal">The Aurora Pearl</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-[4/5] overflow-hidden border border-brand-sage bg-white"
          >
            <img src={mainImage} alt="Product" className="w-full h-full object-cover" />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {thumbs.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setMainImage(img)}
                className={`aspect-square border transition-all ${mainImage === img ? 'border-brand-crimson ring-1 ring-brand-crimson' : 'border-brand-sage hover:border-brand-royal'}`}
              >
                <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          <div className="mb-8 border-b border-brand-sage pb-8">
            <span className="text-xs uppercase tracking-widest text-brand-lavender font-bold block mb-2">Fascinators</span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-royal mb-4 tracking-tight">The Aurora Pearl</h1>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl font-medium text-brand-wine">R3,400</span>
              <span className="bg-brand-sage/20 text-brand-lavender text-[10px] font-bold uppercase py-1 px-3 tracking-widest">In Stock</span>
            </div>
            <p className="text-brand-lavender leading-relaxed italic text-sm">
              Hand-sculpted with premium sinamay and adorned with genuine freshwater pearls, the Aurora is a testament to timeless elegance and contemporary flair.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-royal block mb-4">Select Size / Fit</label>
              <div className="flex flex-wrap gap-3">
                {['Small', 'Medium', 'Large', 'Bespoke Fit'].map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 text-[10px] uppercase tracking-widest font-bold transition-all border ${selectedSize === size ? 'bg-brand-royal text-white border-brand-royal' : 'bg-transparent text-brand-lavender border-brand-sage hover:border-brand-royal'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-grow bg-brand-crimson text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-deep-red transition-all flex items-center justify-center">
                <ShoppingBag size={16} className="mr-3" />
                Add to Boutique Bag
              </button>
              <button className="border border-brand-sage px-6 hover:text-brand-crimson hover:border-brand-crimson transition-all">
                <Heart size={20} />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-brand-sage">
            <div className="flex border-b border-brand-sage">
              {['description', 'details', 'delivery'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 text-[10px] uppercase tracking-widest font-bold transition-all border-b-2 -mb-[1px] ${activeTab === tab ? 'border-brand-crimson text-brand-royal' : 'border-transparent text-brand-lavender'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="py-8 text-sm text-brand-lavender leading-relaxed">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <p>Our signature pieces transition flawlessly from daytime garden ceremonies to moonlit celebrations. The Aurora features a discreet headband and secondary clip choice for ultimate security.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Check size={14} className="mr-2 text-brand-crimson" /> Hand-blocked sinamay base</li>
                    <li className="flex items-center"><Check size={14} className="mr-2 text-brand-crimson" /> Ethically sourced feathers</li>
                    <li className="flex items-center"><Check size={14} className="mr-2 text-brand-crimson" /> Lightweight and breathable</li>
                  </ul>
                </div>
              )}
              {activeTab === 'details' && <p>Material: 100% Sinamay, Silk, Pearls. <br />Hand-crafted in Sandton, South Africa. <br />Clean with a soft, dry cloth. Store in the provided hatbox.</p>}
              {activeTab === 'delivery' && <p>Complimentary boutique shipping within South Africa for orders over R2000. International shipping calculated at checkout. Delivery takes 3-7 business days for stock items.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
