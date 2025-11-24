import React from 'react';
  /* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data.jsx'; 

// Renders the main projects grid
export const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <div className="h-px bg-gray-800 flex-grow"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 hover:bg-black/60 transition group shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-violet-500/20 transition">
                {project.icon}
              </div>
              <div className="flex gap-3">
                <a href={project.github} className="text-gray-400 hover:text-white transition"><Github size={20}/></a>
              
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/5 rounded text-violet-200">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};