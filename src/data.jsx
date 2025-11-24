import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Box, Globe, PenTool, Database, User, Cpu, Server, Terminal } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "Real-Time Coding Interview Platform",
    category: "Full Stack",
    description: "A synchronized code editor with live video chat using WebRTC and Socket.io.",
    tech: ["React", "Node.js", "Socket.io", "WebRTC"],
    icon: <Code size={32} className="text-violet-400" />,
    github: "https://github.com/MadhavKrishanGoswami/InkCode-Fusion"
  },
  {
    id: 2,
    title: "Eco-Friendly Geolocation Carpooling",
    category: "Mobile/Web",
    description: "Runner's Up at Devcation'24. Matches commuters to reduce carbon footprints.",
    tech: ["React", "Maps API", "Node.js", "MongoDB"],
    icon: <Globe size={32} className="text-green-400" />,
    github: "https://github.com/Saachi26/GreenPool"
  },
  {
    id: 3,
    title: "AI-Driven Writing Assistant",
    category: "Browser Ext",
    description: "Best Hack Award Winner. Chrome extension using OpenAI for real-time grammar fixes.",
    tech: ["JavaScript", "OpenAI API", "Chrome API"],
    icon: <PenTool size={32} className="text-blue-400" />,
    github: "https://github.com/Saachi26/ProPhrase"
  },
  {
    id: 4,
    title: "Low-Latency WebSocket Chess",
    category: "Game Dev",
    description: "Real-time multiplayer chess platform with synchronized game states.",
    tech: ["React", "WebSockets", "Chess.js"],
    icon: <Box size={32} className="text-orange-400" />,
    github: "https://github.com/Saachi26/WePlayChess#"
  },
  {
    id: 5,
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
        "Conducted in-depth research on laser physics, covering development, working principles, components, and types of lasers.",
        "Explored advanced cooling techniques including thermoelectric coolers (TECs), vortex tubes, and cryogenic systems for temperature management.",
        "Understood and documented key fabrication steps such as epitaxial growth, photolithography, metallization, and device packaging."
      ],
      skills: ["Laser Physics", "Semiconductors", "Research", "Documentation"]
    },
     {
      id: 2,
      date: "Sep 2024 - Nov 2024",
      role: "Project Coordinator",
      company: "GirlScript Summer of Code",
      desc: [
        "Managed project workflows and coordinated contributors for GirlScript Summer of Code.",
        "Oversaw development progress, reviewed contributions, and ensured high-quality deliverables.",
        "Mentored contributors and facilitated collaboration across remote teams."
      ],
      skills: ["Project Management", "Mentorship", "TypeScript", "React", "Tailwind CSS", "PostgreSQL"]
    }
  ];

export const skills = [
  { category: "Languages", items: ["JavaScript", "Java", "Python", "C++"], icon: <Code size={20} /> },
  { category: "Frontend", items: ["Next.js" , "React.js" ,"Tailwind CSS", "HTML", "CSS"], icon: <Cpu size={20} /> },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL"], icon: <Server size={20} /> },
  { category: "Tools", items: ["Git", "Linux", "Docker","GitHub" , "Turborepo", "Redis", "Socket.io", "WebSockets", "WebRTC", "Chrome API"], icon: <Terminal size={20} /> }
];
export const contactInfo = {
    email: "saachibadal@gmail.com",
    phone: "+91 8800613796",
    location: "New Delhi, India",
    socials: [
      { name: "GitHub", url: "https://github.com/saachibadal", icon: <Github size={20} /> },
      { name: "LinkedIn", url: "https://linkedin.com/in/saachibadal", icon: <Linkedin size={20} /> }
    ]
  }
export const achievements = [
  {
    id: 1,
    title: "Best Hack Award Winner",
    context: "Awarded at MLH All In Hackathon (Oct 2023) for building ProPhrase, an AI-driven Chrome Extension.",
    iconColor: "text-yellow-400",
  },
  {
    id: 2,
    title: "Devcation '24",
    context: "Runner's Up at IGDTUW (Mar 2024) for the Eco-Friendly Carpooling Platform, focusing on geo-spatial matching algorithms.",
    iconColor: "text-violet-400",
  },
  {
    id: 3,
    title: "GSSoC Project",
    context: "Led and mentored 20+ contributors on an open-source development project, managing code quality and feature timelines.",
    iconColor: "text-cyan-400",
  },
];