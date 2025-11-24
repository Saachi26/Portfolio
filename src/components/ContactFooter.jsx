import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';

// Renders the contact section and footer
export const ContactFooter = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6"
      >
        <p className="text-violet-400 font-mono mb-4">What's Next?</p>
        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-8 text-lg">
          I'm currently looking for new opportunities in AI/ML and Full Stack Development. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        
        {/* Main CTA */}
        <a 
          href="mailto:saachibadal@gmail.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-violet-500 text-violet-400 rounded-lg hover:bg-violet-500/10 hover:text-white transition font-medium mb-12"
        >
          <Mail size={20} />
          Say Hello
        </a>

        {/* Explicit Contact Details */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-gray-400 mb-12 font-mono text-sm">
            <div className="flex items-center gap-2 hover:text-violet-300 transition-colors">
                <Mail size={16} className="text-violet-400" />
                <span>saachibadal@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-violet-300 transition-colors">
                <MapPin size={16} className="text-violet-400" />
                <span>New Delhi, India</span>
            </div>
        </div>
        
        <div className="flex justify-center gap-8">
          <a 
            href="https://github.com/Saachi26" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile" 
            className="text-gray-400 hover:text-white hover:-translate-y-1 transition"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/saachi-badal/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile" 
            className="text-gray-400 hover:text-white hover:-translate-y-1 transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
        
        <p className="mt-8 text-gray-600 text-sm">© {new Date().getFullYear()} by Saachi Badal</p>
      </motion.div>
    </section>
  );
};