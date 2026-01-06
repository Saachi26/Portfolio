import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Box, Globe, PenTool, Database, User, Cpu, Server, Terminal, Layers } from 'lucide-react';

export const projects = [
  // --- TIER 1: NEW ML ENGINEER PROJECTS (The "Must Sees") ---
  {
    id: 1,
    title: "Brain Tumor MRI Classifier",
    category: "Deep Learning",
    description: "Achieved 99.39% accuracy classifying MRI scans using EfficientNet-B0 & Transfer Learning. Features Explainable AI (Grad-CAM) heatmaps.",
    tech: ["PyTorch", "EfficientNet", "Grad-CAM", "Streamlit"],
    icon: <Cpu size={32} className="text-violet-400" />, 
    github: "https://github.com/Saachi26/Deep-Learning-Brain-Tumor-MRI-Classifier-with-GradCAM"
  },
  {
    id: 2,
    title: "EasyOCR Video Text Extractor",
    category: "Computer Vision",
    description: "Privacy-focused Chrome Extension extracting code from live video. Uses Flask backend & OpenCV for preprocessing.",
    tech: ["OpenCV", "EasyOCR", "Flask", "Chrome Ext"],
    icon: <Terminal size={32} className="text-green-400" />,
    github: "https://github.com/Saachi26/EasyOCR-Video-Text-Extractor"
  },
  {
    id: 3,
    title: "Intelligent PDF Annotator",
    category: "Full Stack ML",
    description: "Interactive tool to OCR and annotate scanned PDFs. Features lazy loading (40% faster) and real-time canvas drawing.",
    tech: ["React", "Flask", "pdf2image", "Canvas API"],
    icon: <PenTool size={32} className="text-blue-400" />,
    github: "https://github.com/Saachi26/Flask-EasyOCR-PDF-Annotator"
  },

  // --- TIER 2: YOUR ORIGINAL WEB DEV PROJECTS (The "Full Stack Flex") ---
  {
    id: 4,
    title: "Real-Time Coding Platform",
    category: "Full Stack",
    description: "A synchronized code editor with live video chat using WebRTC and Socket.io.",
    tech: ["React", "Node.js", "Socket.io", "WebRTC"],
    icon: <Code size={32} className="text-violet-400" />,
    github: "https://github.com/MadhavKrishanGoswami/InkCode-Fusion"
  },
  {
    id: 5,
    title: "Eco-Friendly Geolocation Carpooling",
    category: "Mobile/Web",
    description: "Runner's Up at Devcation'24. Matches commuters to reduce carbon footprints.",
    tech: ["React", "Maps API", "Node.js", "MongoDB"],
    icon: <Globe size={32} className="text-green-400" />,
    github: "https://github.com/Saachi26/GreenPool"
  },
  {
    id: 6,
    title: "AI-Driven Writing Assistant",
    category: "Browser Ext",
    description: "Best Hack Award Winner. Chrome extension using OpenAI for real-time grammar fixes.",
    tech: ["JavaScript", "OpenAI API", "Chrome API"],
    icon: <PenTool size={32} className="text-blue-400" />,
    github: "https://github.com/Saachi26/ProPhrase"
  },
  {
    id: 7,
    title: "Low-Latency WebSocket Chess",
    category: "Game Dev",
    description: "Real-time multiplayer chess platform with synchronized game states.",
    tech: ["React", "WebSockets", "Chess.js"],
    icon: <Box size={32} className="text-orange-400" />,
    github: "https://github.com/Saachi26/WePlayChess#"
  },
  {
    id: 8,
    title: "MERN Social Network",
    category: "Full Stack",
    description: "Complete social platform with JWT auth, posts, and real-time feed updates.",
    tech: ["MongoDB", "Express", "React", "Node"],
    icon: <Database size={32} className="text-pink-400" />,
    github: "#"
  }
];

export const experience = [
    {
      id: 1,
      date: "June 2025 - July 2025",
      role: "Research Intern",
      company: "DRDO (Solid State Physics Laboratory)",
      desc: [
        "Analyzed efficiency metrics of semiconductor laser diodes to identify device-level constraints for optoelectronic systems.",
        "Evaluated thermal management solutions (TECs, Cryogenics) to optimize hardware reliability and define system-level integration tradeoffs.",
        "Standardized documentation for complex fabrication pipelines (epitaxial growth), reducing knowledge transfer time."
      ],
      skills: ["Semiconductors", "Data Analysis", "Thermal Systems", "Documentation"]
    },
     {
      id: 2,
      date: "Sep 2024 - Nov 2024",
      role: "Project Admin",
      company: "GirlScript Summer of Code",
      desc: [
        "Managed project workflows and coordinated 20+ contributors for open-source initiatives.",
        "Oversaw development progress, reviewed PRs, and ensured high-quality code deliverables.",
        "Mentored contributors and facilitated collaboration across remote teams."
      ],
      skills: ["Project Management", "Code Review", "Open Source", "Leadership"]
    }
  ];

export const skills = [
  { 
    category: "Machine Learning", 
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Grad-CAM", "EasyOCR", "NumPy", "Pandas"], 
    icon: <Cpu size={20} /> 
  },
  
  { 
    category: "Full Stack Dev", 
    items: ["React.js", "Next.js", "Node.js", "Flask", "Tailwind CSS", "MongoDB", "PostgreSQL", "Streamlit"], 
    icon: <Layers size={20} /> 
  },

  { 
    category: "Languages", 
    items: ["Python", "JavaScript", "Java", "SQL"], 
    icon: <Code size={20} /> 
  },

  { 
    category: "Tools & DevOps", 
    items: ["Git", "Linux", "Docker", "GitHub", "Turborepo", "Redis", "Socket.io", "Chrome API"], 
    icon: <Terminal size={20} /> 
  }
];

export const contactInfo = {
    email: "saachibadal@gmail.com",
    phone: "+91 8800613796",
    location: "New Delhi, India",
    socials: [
      { name: "GitHub", url: "https://github.com/saachibadal", icon: <Github size={20} /> },
      { name: "LinkedIn", url: "https://linkedin.com/in/saachi-badal", icon: <Linkedin size={20} /> },
      { name: "Blog", url: "https://saachis-blog.hashnode.dev/", icon: <Globe size={20} /> }
    ]
  }

export const achievements = [
  {
    id: 1,
    title: "Technical Writer",
    context: "Authored 16+ articles on Hashnode covering Calculus for ML, Linear Algebra, and Scikit-Learn pipelines.",
    iconColor: "text-blue-400",
  },
  {
    id: 2,
    title: "Best Hack Award",
    context: "Winner at MLH All In Hackathon (Oct 2023) for ProPhrase, an AI-driven Chrome Extension.",
    iconColor: "text-yellow-400",
  },
  {
    id: 3,
    title: "Devcation '24 Runner-Up",
    context: "Awarded at IGDTUW (Mar 2024) for GreenPool, focusing on geo-spatial matching algorithms.",
    iconColor: "text-violet-400",
  },
  {
    id: 4,
    title: "GSSoC Project",
    context: "Led and mentored 20+ contributors on an open-source development project, managing code quality and feature timelines.",
    iconColor: "text-cyan-400",
  },
];