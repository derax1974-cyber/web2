import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import { FeatureStrip } from './components/MiniBanners';
import Services from './components/Services';
import NeonBanner from './components/NeonBanner';
import Consoles from './components/Consoles';
import PromoBanners from './components/PromoBanners';
import Gallery from './components/Gallery';
import { SplitBanner } from './components/MiniBanners';
import Pricing from './components/Pricing';
import { CTABanner } from './components/MiniBanners';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020208]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Loader glow */}
          <div className="absolute w-40 h-40 bg-purple-600/20 rounded-full blur-[60px] animate-pulse" />
          <div className="absolute w-40 h-40 bg-cyan-600/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }} />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="w-16 h-16 border-4 border-purple-500 border-t-cyan-500 border-r-transparent rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute mt-28 text-lg font-bold tracking-widest"
          >
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              DRHOUSEPCCLINIC
            </span>
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#020208] text-white overflow-x-hidden"
        >
          <Navbar />
          <Hero />
          <MarqueeTicker />
          <FeatureStrip />
          <Services />
          <NeonBanner />
          <Consoles />
          <PromoBanners />
          <Gallery />
          <SplitBanner />
          <Pricing />
          <CTABanner />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
