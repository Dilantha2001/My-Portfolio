import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://pramuditha.dev", // update if you have a custom domain
    pdf: "/resume.pdf",
  },
  personal: {
    name: "Dilantha Ranaweera",
    title: "Full-Stack Developer",
    headline: "React · Node.js · Express · Databases",
    avatar: "./profile2.png",
    summary:
      "Software engineering undergraduate with 6 months of industry experience developing full-stack web applications using React, Node.js, Express.js, MongoDB, PostgreSQL, and MySQL. Experienced in REST APIs, authentication, database design, and responsive UI development. Seeking an Associate Software Engineer position.",
    contact: {
      email: "pramudithadilantha89@gmail.com",
      phone: "+94 75 681 3888",
      location: "Colombo, Sri Lanka",
      website: "https://pramuditha.dev",
      socials: [
        {
          label: "LinkedIn",
          url: "https://linkedin.com/in/pramuditha-ranaweera",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/pramuditha-ranaweera",
          icon: "SiGithub",
        },
      ],
    },
  },
  highlights: [
    "Intern Software Developer at Department of Posts (6 months)",
    "Full-stack development experience with React, Node.js, and Databases",
    "Experienced in REST APIs, JWT authentication, and responsive UI design",
  ],
  skills: [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          level: 90,
          icon: "SiReact",
          category: "frontend",
          years: 3,
          note: "Used in production since 2022",
        },
        {
          name: "TypeScript",
          level: 85,
          icon: "SiTypescript",
          category: "frontend",
          years: 2,
          note: "Used in production since 2024",
        },
        {
          name: "JavaScript",
          level: 90,
          icon: "SiJavascript",
          category: "frontend",
          years: 4,
          note: "Used in production since 2022",
        },
        {
          name: "HTML5",
          level: 90,
          icon: "SiHtml5",
          category: "frontend",
          years: 5,
        },
        {
          name: "CSS3",
          level: 88,
          icon: "SiCss3",
          category: "frontend",
          years: 5,
        },
        {
          name: "Tailwind CSS",
          level: 80,
          icon: "SiTailwindcss",
          category: "frontend",
          years: 3,
          note: "Used in production since 2023",
        },
        {
          name: "Material-UI",
          level: 80,
          icon: "SiMaterialui",
          category: "frontend",
          years: 3,
          note: "Used in production since 2023",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Php",
          level: 80,
          icon: "SiFastapi",
          category: "backend",
          years: 3,
          note: "Used in production since 2022",
        },
        {
          name: "Node.js",
          level: 80,
          icon: "SiNodedotjs",
          category: "backend",
          years: 2,
          note: "Used in production since 2023",
        },
        {
          name: "Express.js",
          level: 75,
          icon: "SiExpress",
          category: "backend",
          years: 2,
          note: "Used in production since 2023",
        },
        {
          name: "Java ",
          level: 70,
          icon: "SiJava",
          category: "backend",
          years: 2,
          note: "Used in production from 2022",
        },
      ],
    },

    {
      title: "Infrastructure & DevOps",
      skills: [
        {
          name: "AWS",
          level: 78,
          icon: "SiAmazonaws",
          category: "devops",
          years: 0,
          note: "Used in production since 2025",
        },

        {
          name: "Docker",
          level: 75,
          icon: "SiDocker",
          category: "devops",
          years: 0,
          note: "Used in production since 2025",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "PostgreSQL",
          level: 80,
          icon: "SiPostgresql",
          category: "database",
          years: 2,
          note: "Used in production since 2022",
        },
        {
          name: "MySQL",
          level: 78,
          icon: "SiMysql",
          category: "database",
          years: 3,
          note: "Used in production since 2022",
        },
        {
          name: "MongoDB",
          level: 78,
          icon: "SiMongodb",
          category: "database",
          years: 2,
          note: "Used in production since 2023",
        },
      ],
    },
    {
      title: "Other Tools",
      skills: [
        {
          name: "Git",
          level: 90,
          icon: "SiGit",
          category: "tooling",
          years: 3,
          note: "Used in production since 2022",
        },
        {
          name: "GitHub",
          level: 88,
          icon: "SiGithub",
          category: "tooling",
          years: 3,
          note: "Used in production since 2022",
        },
        {
          name: "Jira",
          level: 85,
          icon: "SiJira",
          category: "tooling",
          years: 1,
          note: "Used in production since 2024",
        },

        {
          name: "VS Code",
          level: 90,
          icon: "SiVisualstudiocode",
          category: "tooling",
          years: 3,
          note: "Used in production since 2022",
        },
      ],
    },
  ],
  experience: [
    {
      id: "intern-dept-posts-2025",
      title: "Intern Software Developer",
      company: "Department of Posts (IT Division)",
      location: "Colombo, Sri Lanka",
      date: { start: "2025-07", end: "2026-01", present: false },
      summary:
        "Developed and maintained full-stack web applications, built secure RESTful APIs, designed relational databases, and enhanced legacy systems during a 6-month software development internship.",
      bullets: [
        "Developed web applications using React.js and Tailwind CSS",
        "Built REST APIs using Node.js and Express.js",
        "Designed MySQL databases for logistics tracking systems",
        "Implemented JWT authentication and security validation",
        "Maintained and enhanced existing PHP applications",
      ],
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MySQL",
        "PHP",
        "JWT",
      ],
    },
  ],
  projects: [
   
    {
      id: "music-streaming-app",
      title: "Music Streaming Application",
      description:
        "Developed a dynamic, full-stack music streaming platform featuring seamless audio playback. Designed a responsive user interface with React and Tailwind CSS, incorporating a custom audio player with global state management. Implemented scalable Node.js and Express.js RESTful APIs to handle high-frequency requests for song streaming and artist metadata. Engineered complex MongoDB aggregation pipelines (using $lookup, $unwind, and $facet) to generate real-time trending charts. Developed a secure ecosystem featuring JWT authentication, user engagement tools (likes/comments), and artist verification badges.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Cloudinary"],
      image: "./neon.png",
      href: "#",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Dilantha2001/MusicApplication",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "trust-post-logistics",
      title: "Trust Post Logistics System",
      description:
        "Developed a mobile and web-based parcel pickup and delivery system for the Sri Lankan Postal Department. Built the frontend using React to deliver an intuitive, responsive, and user-friendly interface. Designed the backend architecture with Node.js and PostgreSQL, integrating GPS APIs for real-time tracking and secure transactions. Implemented core modules enabling customers to place orders, track shipments, estimate costs, and interact with an automated chatbot. Developed an administrative web panel for managers to approve drivers, oversee orders, and monitor nationwide postal operations.",
      tags: [
        "React",
        "Node.js",
        "PostgreSQL",
        "GPS APIs",
        "Full Stack",
        "Logistics",
      ],
      image: "./post.png",
      href: "#",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Dilantha2001/PostOffice",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "online-book-store",
      title: "Online Book Store",
      description:
        "Developed a full-stack online bookshop enabling users to browse, search, and purchase books online. Built a mobile-friendly frontend using React and Tailwind CSS for seamless cross-device compatibility. Designed a MongoDB database schema to efficiently manage books, categories, and user accounts. Integrated shopping cart functionality and a secure checkout process to ensure smooth user transactions. Created an administrative dashboard to manage inventory, track orders, and monitor overall store performance.",
      tags: ["React", "Tailwind CSS", "MongoDB", "Express", "Full Stack"],
      image: "./book.png",
      href: "#",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Dilantha2001/BookStore",
          icon: "SiGithub",
        },
      ],
    },
     {
      id: "dog-behavior-ai",
      title: "AI-Based Dog Behavior & Emotion Monitoring System",
      description:
        "Developed a Multimodal AI system to classify canine emotions and behaviors (Aggression, Stress) for German Shepherds. Built a Dual-Pathway Visual Module utilizing YOLOv8 for object detection and ResNet-50 for facial expression/emotion recognition. Implemented Temporal Action Recognition by tracking skeletal key points via YOLO-Pose and LSTM networks. Integrated an Audio Analysis Module using 2D CNNs to classify vocalizations (Barks, Growls) from Mel-spectrograms. Applied Decision-Level Fusion techniques to synchronize video and audio data, ensuring high accuracy in real-world environments.",
      tags: [
        "Python",
        "YOLOv8",
        "TensorFlow",
        "ResNet-50",
        "LSTM",
        "Computer Vision",
        "Multimodal AI",
        "Research",
      ],
      image: "./dog.png",
      href: "#",
      date: "Nov 2025 - Present",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Dilantha2001/dogsense-analytics",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "tuition-class-app",
      title: "Tuition Class Management Mobile App",
      description:
        "Developed a mobile application to streamline tuition class administration and scheduling. Built core features for student enrollment, automated class scheduling, and real-time attendance tracking. Integrated Firebase for secure user authentication, real-time database management, and cloud storage.",
      tags: ["Android", "Firebase", "Mobile App", "Java/Kotlin"],
      image: "./screen-3.jpg",
      href: "#",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Dilantha2001/Mobile-E-Learning-App",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "fullstack-ecommerce-platform",
      title: " E-Commerce Platform",
      description:
        "A comprehensive full-stack e-commerce solution. Built with a responsive React and TypeScript storefront, powered by a scalable Node.js backend, and supported by a robust SQL database for secure inventory, payment, and order management.",
      tags: ["React", "TypeScript", "Node.js", "SQL", "Full-Stack"],
      image: "./port.png",
      href: "https://your-live-ecommerce-site.com",
      links: [
        {
          label: "Live Demo",
          url: "https://your-live-ecommerce-site.com",
          icon: "SiGooglechrome",
        },
        {
          label: "GitHub",
          url: "https://github.com/Dilantha2001/Private-Store",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "wedding-photography-platform",
      title: "Digital Wedding Planning & Photography Platform",
      description:
        "A comprehensive event management solution showcased at the CINEC Computing Poster Session. Features a high-performance frontend for gallery management and a robust backend for booking workflows.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "UI/UX Design"],
      image: "./slide1.png",
      href: "#",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Dilantha2001/Photography-Web",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "portfolio-website",
      title: "Professional Portfolio",
      description:
        "A modern, responsive portfolio built with TypeScript and React to showcase software engineering projects and technical expertise with optimized UI/UX.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "./portf.png",
      href: "https://comfy-medovik-ee1f2a.netlify.app/",
      previewUrl: "https://comfy-medovik-ee1f2a.netlify.app/",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Dilantha2001/portfolio",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "university-ordering-system",
      title: "Legacy Food Ordering System",
      description:
        "A responsive university group project focused on backend processing and database management using PHP and MySQL for efficient menu and order handling.",
      tags: ["PHP", "MySQL", "HTML", "CSS", "Group Project"],
      image: "./resturant.png",
      href: "#",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/pramuditha-ranaweera/php-ordering-system",
          icon: "SiGithub",
        },
      ],
    },
    {
      id: "expressway-payment-system",
      title: "Smart Banking web",
      description:
        "Award-winning research project presented at CIRS-2024. Designed a smart card-based transactional architecture to automate expressway toll collection and improve transport efficiency.",
      tags: ["System Architecture", "Software Engineering", "Research", "IoT"],
      image: "./payment.png",
      href: "https://resplendent-yeot-b6f88a.netlify.app/#features",
      links: [
        {
          label: "Research Paper",
          url: "#",
          icon: "SiReadthedocs",
        },
        {
          label: "GitHub",
          url: "https://github.com/Dilantha2001/Payment-Website",
          icon: "SiGithub",
        },
      ],
    },
  ],
  education: [
    {
      degree: "BSc (Hons) Software Engineering",
      school:
        "Colombo International Nautical and Engineering College (CINEC Campus)",
      date: "2022 - Present",
    },
    {
      degree: "G.C.E. Advanced Level (Physical Science)",
      school: "St. Mary's College, Kegalle",
      date: "2018 - 2021",
    },
    {
      degree: "G.C.E. Ordinary Level",
      school: "St. Mary's College, Kegalle",
      date: "2017",
    },
  ],
  certifications: [
    {
      name: "The Ultimate React Course 2025: React, Next.js, Redux & More",
      issuer: "Udemy",
      date: "2025",
    },
    {
      name: "Java Masterclass 2025: 130+ Hours of Expert Lessons",
      issuer: "Udemy",
      date: "2025",
    },
    {
      name: "NVQ Level 4 Certification in Computer Network Technology",
      issuer: "Vocational Training Authority",
      date: "2022",
    },
    {
      name: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco",
      date: "2022",
    },
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      date: "2022",
    },
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "2022",
    },
  ],
  extras: {
    languages: [
      { name: "English", level: "Professional Working Proficiency" },
      { name: "Sinhala", level: "Native" },
    ],
    interests: [
      "AI Image Generation",
      "Human-Computer Interaction",
      "Vehicle Tracking Systems",
      "Music Production",
      "Astronomy",
    ],
  },
};
// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  Tailwind: "bg-teal-100 text-teal-800",
  Stripe: "bg-purple-100 text-purple-800",
  "Design System": "bg-yellow-100 text-yellow-800",
  D3: "bg-amber-100 text-amber-800",
  Realtime: "bg-green-100 text-green-800",
  Storybook: "bg-pink-100 text-pink-800",
  "NPM Package": "bg-red-100 text-red-800",
  "Material-UI": "bg-indigo-100 text-indigo-800",
  Chatbot: "bg-violet-100 text-violet-800",
  OpenAI: "bg-gray-100 text-gray-800",
  "Hugging Face": "bg-orange-100 text-orange-800",
  Beginner: "bg-cyan-100 text-cyan-800",
  "Beginner Project": "bg-cyan-100 text-cyan-800",
  // Landing Zone Orchestrator tags
  FastAPI: "bg-teal-500 text-white",
  MongoDB: "bg-green-600 text-white",
  Terraform: "bg-purple-600 text-white",
  IaC: "bg-indigo-500 text-white",
  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
};
