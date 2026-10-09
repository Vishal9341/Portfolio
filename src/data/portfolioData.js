export const portfolioData = {
  personal: {
    name: "Vishal Kumar",
    shortName: "VK",
    phone: "9341600322",
    titles: [
      "Full-Stack Developer",
      "Frontend Developer",
      "Software Engineer",
      "Backend Developer"
    ],
    statusBadge: "Available for Roles & Opportunities",
    bio: "Passionate Full-Stack Developer and Computer Science undergraduate with hands-on experience building AI-powered web tools, responsive web applications, and scalable backend REST APIs.",
    aboutParagraphs: [
      "Hello! I'm Vishal Kumar, a Computer Science & Engineering undergraduate at Sharda University (CGPA 8.3) with a strong passion for software engineering and web technologies.",
      "I specialize in developing modern user interfaces using React.js and Tailwind CSS, as well as architecting reliable backend services using Node.js, Express.js, and MongoDB, My SQL.",
      "From engineering AI-driven developer platforms like Codebase Onbroader to building service marketplaces and client platform solutions, I thrive on turning complex ideas into intuitive digital products."
    ],
    location: "Greater Noida, Uttar Pradesh, India",
    email: "vishalcool9341@gmail.com",
    github: "https://github.com/Vishal9341",
    linkedin: "https://www.linkedin.com/in/vishal-kumar9341/",
    avatarUrl: "/profile.jpg",
    resumeUrl: "/V_Resume.pdf"
  },

  education: {
    institution: "Sharda University",
    location: "Greater Noida (Uttar Pradesh)",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    period: "2024 - 2028",
    cgpa: "8.3"
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
      title: "Codebase Onbroader",
      category: "AI / Backend",
      period: "July 2026 - Present",
      description: "An AI-powered GitHub repository analysis platform that converts complex codebases into structured, developer-friendly insights.",
      highlights: [
        "Built backend services for an AI-powered GitHub repository analysis platform that converts complex codebases into structured, developer-friendly insights.",
        "Designed REST APIs to process repository data and deliver project summaries, technology-stack detection, folder-structure analysis, and important-file insights.",
        "Integrated GitHub repository processing with AI services to extract and organize meaningful information from large codebases.",
        "Implemented backend data handling and MongoDB integration for managing repository analysis results and application data."
      ],
      tags: ["Node.js", "Express.js", "REST API", "MongoDB", "AI Services", "GitHub API"],
      featured: true,
      inProgress: true,
      accent: "cyan",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/Vishal9341"
    },
    {
      id: 2,
      title: "Local Worker Service Platform",
      category: "Full-Stack",
      period: "Feb 2026 - April 2026",
      description: "A responsive React-based service marketplace connecting users with local service providers.",
      highlights: [
        "Developed a responsive React-based service marketplace connecting users with local service providers.",
        "Built and refined user-facing interfaces, navigation, and service discovery flows to improve usability and accessibility.",
        "Integrated frontend components with REST APIs for dynamic service and user data, ensuring a seamless application experience."
      ],
      tags: ["React.js", "Node.js", "REST API", "JavaScript", "Tailwind CSS"],
      featured: true,
      accent: "violet",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://local-worker-service-platform.vercel.app/",
      githubUrl: "https://github.com/Vishal9341/Local-Worker-Service-Platform"
    },
    {
      id: 3,
      title: "ShaadiNagar Tent House & Event Management",
      category: "Frontend",
      period: "May 2026 - July 2026",
      description: "A responsive event management website for ShaadiNagar, a Tent House & Event Management company, built with React and Tailwind CSS. Features service showcases, categorized galleries, inquiry forms, and Google Maps integration.",
      highlights: [
        "Developed and enhanced frontend interfaces for ShaadiNagar event management platform, focusing on usability and responsiveness.",
        "Redesigned UI components and layouts to provide a consistent experience across all devices.",
        "Integrated service showcases, categorized galleries, inquiry forms, and Google Maps API."
      ],
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
      description: "Built and enhanced the About and Contact pages of an event management website, focusing on responsive layouts, intuitive navigation, and user-friendly design across multiple screen sizes.",
      skills: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript", "UI/UX Design"]
    }
  ]
};
