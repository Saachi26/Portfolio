import React from 'react';

// Renders the fixed navigation bar
export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white tracking-tighter">Saachi<span className="text-violet-500">.dev</span></h1>
        <div className="flex gap-6 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#projects" className="hover:text-white transition">Work</a>
          <a href="#achievements" className="hover:text-white transition">Achievements</a>
          <a href="#education" className="hover:text-white transition">Education</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};