import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { skills } from '../data.jsx'; 

export const About = () => {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <div className="h-px bg-gray-800 flex-grow"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Bio Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed text-lg"
        >
          <p>
            I am an <span className="text-white font-semibold">Electronics & Communication Engineering</span> undergraduate with a specialized focus on <span className="text-violet-400 font-semibold">Computer Vision and Deep Learning</span>. 
          </p>

          <p>
            Unlike typical data scientists who stay in Jupyter Notebooks, I build end-to-end systems. My background in <span className="text-white font-semibold">Full-Stack Development</span> allows me to bridge the gap between complex ML models and user-friendly applications.
          </p>

          <p>
            Beyond coding, I am a <span className="text-violet-400">Technical Writer</span>. I document the mathematical foundations of AI—breaking down Calculus and Linear Algebra for the developer community.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-violet-500/30 transition group"
            >
              <div className="flex items-center gap-3 mb-3 text-violet-400 group-hover:text-violet-300">
                {skillGroup.icon}
                <h3 className="font-bold text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="text-xs font-mono px-2 py-1 bg-black/50 rounded text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};