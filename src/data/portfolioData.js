export const portfolioData = {
  personal: {
    name: "Vishal Kumar",
    shortName: "VK",
    titles: [
      "Full-Stack Engineer",
      "AI Web App Developer",
      "Software Engineer"
    ],
    bio: "I build modern, high-performance web applications — combining clean frontend engineering,  backend microservices, and cutting-edge AI integrations.",
    aboutParagraphs: [
      "Hello! I'm Vishal, a dedicated Full-Stack Engineer focused on building modern, high-performance web applications with seamless AI integrations.",
      "With expertise across React, Node.js, and GenAI tools, I design intuitive web apps that turn complex requirements into effortless user experiences.",
      "I'm continuously mastering modern full-stack architecture, clean code practices, and intelligent software solutions."
    ],
    location: "India",
    email: "vishalcool9341@gmail.com",
    github: "https://github.com/Vishal9341",
    linkedin: "https://www.linkedin.com/in/vishal-kumar9341/",
    avatarUrl: "/profile.jpg",
    resumeUrl: "/V_Resume.pdf"
  },
  stats: [
    { label: "Role Focus", value: "Full-Stack" },
    { label: "Experience", value: "Fresher" },
    { label: "Projects Completed", value: "5+" },
    { label: "Tech Stack", value: "12+" }
  ],
  skillsCategories: [
    {
      id: "frontend",
      name: "Frontend",
      color: "cyan",
      description: "Crafting fast, responsive, pixel-perfect user interfaces.",
      skills: [
        "React.js",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "Responsive UI/UX"
      ]
    },
    {
      id: "backend",
      name: "Backend",
      color: "violet",
      description: "Architecting secure, scalable server systems & database schemas.",
      skills: [
        "Node.js",
        "Express.js",
        "REST API Architecture",
        "MongoDB",
        "SQL / PostgreSQL",
        "Authentication & JWT",
        "WebSockets"
      ]
    },
    {
      id: "ai",
      name: "AI & GenAI",
      color: "rose",
      description: "Integrating intelligent models, LLM APIs, and AI workflows.",
      skills: [
        "OpenAI & LLM API Integration",
        "Prompt Engineering",
        "RAG Architecture",
        "AI Agent Tooling",
        "Vector Databases",
        "LangChain Basics"
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Local Worker Service Platform",
      category: "Full-Stack",
      description: "Full-stack local service platform for seamless worker booking, built with modern web technologies and designed for real-world usability.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      featured: true,
      accent: "cyan",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://local-worker-service-platform.vercel.app/",
      githubUrl: "https://github.com/Vishal9341/Local-Worker-Service-Platform"
    },
    {
      id: 2,
      title: "Codebase Onboarder",
      category: "AI / Developer Tools",
      description: "AI-powered developer tool that analyzes codebases, explains project structure, detects technologies, identifies important files, and helps developers understand unfamiliar repositories faster.",
      tags: ["React", "Node.js", "AI / LLM", "Tailwind CSS"],
      featured: true,
      inProgress: true,
      accent: "violet",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "https://github.com/Vishal9341/Codebase-Onboarder"
    },
    {
      id: 3,
      title: "ShaadiNagar Tent House & Event Management",
      category: "Frontend / Web App",
      description: "A responsive event management website for ShaadiNagar, a Tent House & Event Management company, built with React and Tailwind CSS. Features service showcases, categorized galleries, inquiry forms, and Google Maps integration.",
      tags: ["React", "Tailwind CSS", "JavaScript", "Google Maps API"],
      featured: true,
      accent: "rose",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://shaadi-nagar-tent-house-event-manag.vercel.app/",
      githubUrl: "https://github.com/Vishal9341/ShaadiNagar-Tent-House-Event-Management"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Frontend Developer",
      company: "CR IT Solutions and Services Pvt.Ltd.",
      period: "May-July 2026",
      description: "Built and enhanced the About and Contact pages of an event management website, focusing on responsive layouts, intuitive navigation, and user-friendly design across multiple screen sizes. ",
      skills: ["React", "Tailwind CSS","UI/UX Design"]
    }
  ]
};
