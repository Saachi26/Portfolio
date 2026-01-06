import React from 'react';
 /* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Mail, ChevronDown, Github, Linkedin } from 'lucide-react';

// Import all modular components 
import { Navbar } from './components/Navbar.jsx'
import { About } from './components/About.jsx'
import { Projects } from './components/Projects.jsx'
import { Experience } from './components/Experience.jsx'
import { Education } from './components/Education.jsx'
import { Hero } from './components/Hero.jsx'
import { ContactFooter } from './components/ContactFooter.jsx';
import { Achievements } from './components/Achievemnts.jsx';
import { BlogSection } from './components/Blog.jsx';


function App() {

  return (
    <div className="w-full overflow-x-hidden bg-neutral-950 min-h-screen text-gray-200 font-sans selection:bg-violet-500 selection:text-white">
      
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Projects />

      <BlogSection/>

      <Achievements />

      <Education />

      <ContactFooter />
    </div>
  );
}

export default App;