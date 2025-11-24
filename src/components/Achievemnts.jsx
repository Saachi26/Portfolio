import React from 'react';
    /* eslint-disable no-unused-vars */        
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { achievements } from '../data.jsx'; 

// Renders key awards and achievements in a grid
export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl font-bold text-white">Achievements</h2>
        <div className="h-px bg-gray-800 flex-grow"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div 
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="bg-black/40 backdrop-blur-sm border border-white/10  p-8 rounded-2xl border border-white/10 hover:border-violet-500/30 transition shadow-lg space-y-6"
          >
            <div className="flex items-center gap-4 mb-3">
              <Award size={28} className={achievement.iconColor} />
              <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
            </div>
            <p className="text-gray-300 text-sm">{achievement.context}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};