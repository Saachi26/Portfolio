import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, FileText } from 'lucide-react';

// Animation Variants
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

export const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-black">
      {/* Background Glow - Adjusted to match ML Vibe (Violet/Blue) */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>

      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer}
        className="z-10 max-w-4xl"
      >
        <motion.p variants={fadeInUp} className="text-violet-400 font-mono mb-4 font-medium tracking-wide">
          Hi, my name is
        </motion.p>
        
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          Saachi Badal.
        </motion.h1>
        
        {/* THE REBRAND: Strong Engineering Keywords */}
        <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl text-gray-300 mb-8 leading-tight">
          I build <span className="text-white font-semibold">AI systems</span> <br className="hidden md:block" />
          and <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 font-bold">scalable web architecture</span>.
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Bridging the gap between complex <span className="text-gray-200">Deep Learning models</span> and user-friendly <span className="text-gray-200">Full-Stack applications</span>.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <a href="#projects" className="px-8 py-3 bg-violet-600 text-white rounded-full font-semibold hover:bg-violet-700 transition shadow-lg shadow-violet-500/25 w-full sm:w-auto">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/10 hover:border-white/40 text-white transition w-full sm:w-auto">
            Contact Me
          </a>
          {/* Added Resume Button - Crucial for Recruiters */}
          <a 
            href="/Saachi_Badal_ML_Resume.pdf" 
            target="_blank" 
            className="flex items-center gap-2 px-6 py-3 text-gray-300 hover:text-white transition w-full sm:w-auto justify-center"
          >
            <FileText size={20} />
            <span className="underline decoration-violet-500 underline-offset-4">Resume</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};