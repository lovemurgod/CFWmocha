import { motion } from 'framer-motion';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Corporate Fashion Week <span className="text-[#F5C243]">2025</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-2 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Where elegance meets enterprise
          </motion.p>
          
          <motion.p 
            className="text-lg text-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            June 23-25, 2025 | Bangalore, India
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/tickets">
              <Button size="lg" className="font-serif">
                Book Tickets
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/80 text-sm mb-2">Scroll down</span>
          <svg 
            className="w-6 h-6 text-[#F5C243]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
