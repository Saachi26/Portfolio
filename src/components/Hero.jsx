import React from 'react';
 /* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Animation Variants are defined locally since they are specific to this component's entry sequence
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// Renders the main entry point of the website
export const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Abstract Background Blotches */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600 rounded-full blur-[120px] opacity-15 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-15"></div>

      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer}
        className="z-10"
      >
        <motion.p variants={fadeInUp} className="text-violet-400 font-mono mb-4 font-medium">Hi, my name is</motion.p>
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Saachi Badal.
        </motion.h1>
        <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl text-gray-300 mb-8 max-w-2xl mx-auto leading-tight">
          I build <span className="text-white font-semibold">interactive experiences</span> and <span className="text-white font-semibold">real-time systems</span>.
        </motion.h2>
        
        <motion.div variants={fadeInUp} className="flex justify-center gap-4">
          <a href="#projects" className="px-8 py-3 bg-violet-600 text-white rounded-full font-semibold hover:bg-violet-700 transition shadow-lg shadow-violet-500/25">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/10 hover:border-white/40 text-white transition">
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};