/**
 * Central Portfolio Data File for Anand Kumar
 * All personal information, projects, links, and content are centralized here
 * for quick updates without editing component code.
 */

export const personalInfo = {
  name: "Anand Kumar",
  role: "Computer Science Engineering Graduate & Full-Stack Developer",
  shortRole: "Full-Stack Developer",
  eyebrow: "COMPUTER SCIENCE ENGINEER",
  heroHeading: "Hi, I'm Anand Kumar.",
  heroHighlight: "I build modern web applications.",
  summary: "Computer Science Engineering graduate and Full-Stack Developer focused on building responsive web applications and REST APIs using React, Node.js, Express, and MongoDB.",
  aboutText: [
    "Anand Kumar is a Computer Science Engineering graduate with hands-on experience in full-stack web development.",
    "His primary technologies include React.js, Node.js, Express.js, and MongoDB, backed by a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and Database Management.",
    "He enjoys building responsive applications, solving programming problems, and continuously learning new technologies."
  ],
  contact: {
    email: "anandksah2002@gmail.com",
    emailUrl: "mailto:anandksah2002@gmail.com",
    phone: "+91 9717374803",
    phoneUrl: "tel:+919717374803",
    linkedin: "https://linkedin.com/in/anand-kumar-20b041278",
    linkedinDisplay: "linkedin.com/in/anand-kumar-20b041278",
    github: "https://github.com/kranandsah03",
    githubDisplay: "github.com/kranandsah03",
    resumeUrl: "/Anand-Kumar-Resume.pdf"
  },
  meta: {
    focus: "Full-Stack Development & REST APIs",
    education: "B.E. Computer Science & Engineering",
    frontend: "React.js",
    backend: "Node.js + Express.js",
    database: "MongoDB + MySQL"
  }
};

export const skillsData = {
  languages: [
    { name: "C++", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "JavaScript (ES6+)", category: "Languages" },
    { name: "HTML5", category: "Languages" },
    { name: "CSS3", category: "Languages" }
  ],
  frameworks: [
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "WordPress", category: "CMS" }
  ],
  tools: [
    { name: "Git", category: "Version Control" },
    { name: "GitHub", category: "Collaboration" },
    { name: "VS Code", category: "Editor" },
    { name: "ChatGPT", category: "AI Tooling" },
    { name: "Claude", category: "AI Tooling" },
    { name: "Gemini", category: "AI Tooling" }
  ],
  coreAreas: [
    { name: "Data Structures & Algorithms", category: "Computer Science" },
    { name: "Object-Oriented Programming", category: "Software Design" },
    { name: "Web Development", category: "Engineering" },
    { name: "Database Management", category: "Data Systems" }
  ],
  coursework: [
    { name: "Database Management", category: "Academic" },
    { name: "Software Methodology", category: "Academic" },
    { name: "Systems Programming", category: "Academic" },
    { name: "Computer Architecture", category: "Academic" }
  ]
};

export const projectsData = [
  {
    id: "taskflow",
    title: "TaskFlow — Team Task Manager",
    badge: "FEATURED PROJECT",
    isFlagship: true,
    tagline: "Full-Stack Team Task & Project Management Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "bcrypt"],
    description: "A full-stack team task management platform for managing projects, tasks, assignments, team members, and progress.",
    features: [
      "JWT-based authentication with secure HTTP cookies & token refresh",
      "bcrypt password hashing for robust user credential security",
      "Role-based access control with discrete Admin and Member privileges",
      "Project creation, workspace lifecycle, and member assignment",
      "Granular task assignment, priority tagging, and status updates",
      "Interactive dashboard statistics with completion and activity metrics",
      "Modular REST APIs and high-performance responsive interface"
    ],
    // Placeholders as requested. Replace these with actual deployed/repo URLs.
    links: {
      github: "GITHUB_TASKFLOW_URL",
      live: "LIVE_TASKFLOW_URL"
    },
    detail: {
      overview: "A comprehensive full-stack team task management platform built to streamline project coordination and task visibility across distributed engineering teams.",
      problem: "Teams need a centralized, secure way to coordinate projects, delegate tasks, track real-time assignments, and monitor collective progress without overhead.",
      solution: "A web-based dashboard equipped with role-based authentication, organized task boards, progress analytics, and responsive real-time state management.",
      architecture: [
        { layer: "Frontend Layer", tech: "React.js & Tailwind CSS", desc: "Component-driven responsive dashboard with client-side routing and optimistic UI updates" },
        { layer: "API Gateway", tech: "Express.js REST APIs", desc: "Structured route handlers, request validation, and CORS security headers" },
        { layer: "Authentication", tech: "JWT + bcrypt", desc: "Stateless JSON Web Tokens with encrypted password hashing and Role-Based Access Control (Admin vs Member)" },
        { layer: "Data Layer", tech: "MongoDB & Mongoose", desc: "Normalized schemas for Users, Projects, Tasks, and activity logs with indexing" }
      ],
      flow: [
        { from: "React Frontend", to: "REST API Request" },
        { from: "REST API Request", to: "Node.js / Express Controller" },
        { from: "Node.js / Express Controller", to: "MongoDB Document Store" }
      ],
      securityModel: [
        "User Registration / Login",
        "Password Verification with bcrypt",
        "Signed JWT Token Generation",
        "Protected Route Middleware & RBAC Validation"
      ]
    }
  },
  {
    id: "bst-visualizer",
    title: "Binary Search Tree Visualization",
    badge: "ALGORITHMS & DSA",
    isFlagship: false,
    tagline: "Interactive Tree Data Structure Demonstrator",
    technologies: ["Java", "Data Structures & Algorithms", "Java Swing"],
    description: "Interactive Java Swing application for visualizing Binary Search Tree operations including insertion, deletion, and tree traversals.",
    features: [
      "Dynamic BST insertion with step-by-step visual path tracking",
      "Accurate node deletion handling all cases (leaf, one child, two children)",
      "Interactive tree traversal demonstrations: Inorder, Preorder, and Postorder",
      "Real-time graphical canvas redraw with balanced coordinate calculation",
      "User-driven experimentation interface for testing edge cases"
    ],
    links: {
      github: "GITHUB_BST_URL",
      live: null // Missing live link -> shows "Coming Soon" or clean disabled state
    }
  },
  {
    id: "blog-website",
    title: "Blog Website",
    badge: "WEB PLATFORM",
    isFlagship: false,
    tagline: "Responsive Content & Publishing Platform",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    description: "Responsive blog platform with category-based content organization and improved navigation for a better reading experience.",
    features: [
      "Responsive, mobile-first reading layouts with optimized typography",
      "Structured category-based content taxonomy for effortless exploration",
      "Enhanced navigation controls with breadcrumbs and fast article indexing",
      "Accessibility considerations conforming to modern web contrast standards",
      "Performance optimization with efficient asset delivery"
    ],
    links: {
      github: null,
      live: "LIVE_BLOG_URL"
    }
  }
];

export const experienceData = [
  {
    role: "Summer Training Trainee — Web Programming (React JS)",
    organization: "Chandigarh University",
    type: "Summer Training",
    duration: "May 2024 – June 2024",
    location: "Mohali, India",
    bullets: [
      "Successfully completed a six-week in-house Summer Training program in Web Programming with a specialized focus on React JS.",
      "Gained practical exposure to frontend web development through structured learning, hands-on exercises, and implementation of React JS concepts.",
      "Developed a strong understanding of modern web programming practices and React JS for creating interactive and responsive web interfaces.",
      "Strengthened programming, problem-solving, debugging, and frontend development skills through practical training and project-based learning."
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science & Engineering",
    institution: "Chandigarh University",
    period: "2022 – 2026",
    location: "Mohali, India",
    highlight: "Primary focus on full-stack development, algorithms, and core computing disciplines."
  },
  {
    degree: "Class XII (Senior Secondary)",
    field: "Science Stream",
    institution: "New Green Field School",
    period: "2020 – 2021",
    location: "South Delhi, India",
    highlight: "Completed higher secondary curriculum with mathematics and sciences."
  },
  {
    degree: "Class X (Secondary)",
    field: "General Curriculum",
    institution: "Morden New Delhi Public School",
    period: "2018 – 2019",
    location: "South Delhi, India",
    highlight: "Foundational academic coursework with strong analytical achievements."
  }
];

export const achievementsData = [
  {
    title: "Amazon Sambhav Hackathon",
    achievement: "Secured under 1000 rank",
    description: "Competed nationally among thousands of engineering teams solving real-world technological challenges.",
    tag: "National Competition"
  },
  {
    title: "University-Level Hackathon",
    achievement: "Runner-up",
    organization: "Pandora Club",
    description: "Built collaborative software under tight hackathon timelines, securing runner-up distinction.",
    tag: "Hackathon"
  }
];

export const interestsData = [
  {
    name: "Chess",
    desc: "Strategic thinking, foresight, and tactical planning on the board.",
    icon: "Swords"
  },
  {
    name: "Cricket",
    desc: "Team coordination, disciplined timing, and athletic competition.",
    icon: "Activity"
  },
  {
    name: "Swimming",
    desc: "Endurance, rhythmic focus, and physical conditioning.",
    icon: "Waves"
  },
  {
    name: "Taekwondo",
    desc: "Discipline, agility, precision, and mental fortitude.",
    icon: "Shield"
  }
];

export const terminalCommands = [
  { command: "whoami", output: "Anand Kumar" },
  { command: "role", output: "Full-Stack Developer & Computer Science Engineer" },
  { command: "stack", output: "React | Node.js | Express | MongoDB | C++ | MySQL" },
  { command: "focus", output: "Web Development + Data Structures & Problem Solving" },
  { command: "status", output: "Open to software engineering opportunities & projects" }
];
