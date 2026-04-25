/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Bespoke from './pages/Bespoke';
import Wishlist from './pages/Wishlist';
import Account from './pages/Account';
import InfoPage from './pages/InfoPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-ivory text-brand-royal font-sans selection:bg-brand-crimson selection:text-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/bespoke" element={<Bespoke />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/account" element={<Account />} />
            
            <Route path="/shipping" element={<InfoPage title="Shipping & Returns" content={
              <>
                <p>We take great pride in the craftsmanship of our collection. Each piece is handled with extreme care during preparation and transit.</p>
                <h3 className="font-serif text-brand-royal italic mt-8 mb-4">Domestic Shipping (South Africa)</h3>
                <p>We offer secure, insured courier delivery across South Africa. Shipping is complimentary for orders over R2000. For orders below this amount, a flat rate of R150 applies.</p>
                <h3 className="font-serif text-brand-royal italic mt-8 mb-4">Returns Policy</h3>
                <p>Due to the delicate nature and hygiene requirements of millinery and headwear, we do not accept returns or exchanges for change of mind. Please ensure your selection is carefully considered before purchasing.</p>
              </>
            } />} />

            <Route path="/faq" element={<InfoPage title="Frequently Asked Questions" content={
              <>
                <h3 className="font-serif text-brand-royal italic mt-8 mb-4">How do I choose the right fascinator for my face shape?</h3>
                <p>We recommend choosing a piece that balances your features. If you have a round face, choose angular styles. For angular faces, softer, curved silhouettes work beautifully.</p>
                <h3 className="font-serif text-brand-royal italic mt-8 mb-4">How should I store my hatinator?</h3>
                <p>Keep your headpiece in its original boutique box, away from direct sunlight, moisture, and extreme temperatures. Support the piece with acid-free tissue paper to maintain its shape.</p>
              </>
            } />} />

            <Route path="/privacy" element={<InfoPage title="Privacy Policy" content={
              <p>Your privacy is of the utmost importance at Cee Hatinators. We only collect the information necessary to fulfill your orders and provide a personalized boutique experience.</p>
            } />} />

            <Route path="/terms" element={<InfoPage title="Terms of Service" content={
              <p>By engaging with Cee Hatinators, you agree to our terms of service regarding bespoke orders, payment schedules, and delivery timelines.</p>
            } />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
