import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'; 

export const Education = () => { 
    // Education Data - Focused on University degree
    const university = {
        institution: "Indira Gandhi Delhi Technical University for Women",
        degree: "Bachelor of Technology - Electronics and Communications Engineering (AI)",
        location: "Delhi, India",
        years: "Aug 2023 - Aug 2027",
        gpa: "7.45 GPA",
        relevantCourses: [
            "Neural Networks and Artificial Intelligence",
            "Data Structures",
            "Database Management Systems",
            "Digital Electronics",
            "Computer Networks",
            "Machine Learning",
        ]
    };

    return (
        <section id="education" className="py-24 max-w-4xl mx-auto px-6">
            {/* Section Header with Animation */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
            >
                <h2 className="text-3xl font-bold text-white">Education</h2>
                <div className="h-px bg-gray-800 flex-grow"></div>
            </motion.div>

            {/* University Entry */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-violet-500/30 transition shadow-lg space-y-6"
            >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <h3 className="text-xl font-bold text-white leading-tight max-w-2xl order-2 md:order-1">
                        {university.degree}
                    </h3>
                    
                    {/* Date Badge - Positioned on the right */}
                    <span className="w-fit text-sm font-mono font-semibold text-violet-400 bg-violet-500/10 px-3 py-1 rounded border border-violet-500/20 whitespace-nowrap order-1 md:order-2">
                        {university.years}
                    </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
                    {/* Institution Name & Location */}
                    <div className="flex-1">
                        <p className="font-semibold text-lg text-white">
                            {university.institution}
                        </p>
                        <p className="text-sm text-gray-400">
                            {university.location}
                        </p>
                    </div>

                    <p className="text-sm text-gray-400 font-mono shrink-0 bg-white/5 px-3 py-1 rounded">
                        {university.gpa}
                    </p>
                </div>

                {/* Relevant Courses */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                        {university.relevantCourses.map((course, index) => (
                            <span 
                                key={index} 
                                className="text-xs font-mono px-2 py-1 bg-black/50 rounded text-violet-200 border border-white/5 hover:border-violet-500/30 transition-colors"
                            >
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};