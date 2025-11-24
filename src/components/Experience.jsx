import React from 'react';
 /* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'; 
import { experience } from '../data.jsx';

// Renders the experience and achievements list
export const Experience = () => {
  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl font-bold text-white">Experience</h2>
        <div className="h-px bg-gray-800 flex-grow"></div>
      </motion.div>

      {/* CONTENT */}
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-violet-500/30 transition shadow-lg"
          >
            <div className="md:w-1/4 flex-shrink-0">
              <p className="text-violet-400 font-mono text-sm font-semibold whitespace-nowrap">{exp.date}</p>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
              
              {/* Description Bullet Points */}
              {Array.isArray(exp.desc) ? (
                <ul className="list-disc ml-5 space-y-2 text-gray-300 leading-relaxed mb-6">
                  {exp.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 leading-relaxed mb-6">{exp.desc}</p>
              )}

              {/* Skills/Tech Stack Tags */}
              {exp.skills && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono px-2 py-1 bg-violet-500/10 rounded text-violet-300 border border-violet-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};