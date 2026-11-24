export const RESUME_DATA = {
  personal: {
    name: "Riyaz Memon",
    title: "Software Engineer | Full Stack Developer",
    subtitle: "MERN Stack • Fintech Payment Gateways • Real-Time Systems • Cloud Infrastructure",
    email: "memonriyazwork@gmail.com",
    phone: "+91 9820757189",
    location: "Thane, Maharashtra, India",
    linkedin: "https://linkedin.com/in/riyaz-memon",
    github: "https://github.com/memonriyaz",
    status: "Active Software Engineer @ Capgemini • Open to Full Stack Roles"
  },
  summary: "Software Engineer with experience developing full-stack web applications, RESTful APIs, GraphQL services, and real-time systems using TypeScript, JavaScript, React.js, Node.js, NestJS, and MongoDB. Experienced in fintech payment integrations, backend development, and responsive UI engineering. Currently working at Capgemini, with additional training in Cloud Infrastructure Services covering Linux, Windows, networking, and Python fundamentals.",
  metrics: [
    { label: "Engineering CGPA", value: "9.3 / 10", detail: "Don Bosco Institute of Technology" },
    { label: "Google Solution Challenge", value: "Top 105", detail: "National Level Finalist 2025" },
    { label: "Payment Gateways", value: "3 Gateways", detail: "Razorpay, Cashfree & Easebuzz" },
    { label: "Core Stack", value: "MERN + Nest", detail: "TypeScript, Real-Time & Cloud" }
  ],
  skills: {
    languages: [
      { name: "TypeScript", level: "Advanced", icon: "Code" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code" },
      { name: "Python", level: "Proficient", icon: "FileCode" },
      { name: "SQL", level: "Proficient", icon: "Database" }
    ],
    frontend: [
      { name: "React.js", level: "Advanced", tag: "Primary" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Styling" },
      { name: "HTML5 & CSS3", level: "Expert", tag: "Core" },
      { name: "Responsive UI/UX", level: "Advanced", tag: "Design" },
      { name: "Next.js", level: "Proficient", tag: "Framework" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", tag: "Runtime" },
      { name: "Express.js", level: "Advanced", tag: "MERN" },
      { name: "NestJS", level: "Advanced", tag: "Enterprise" },
      { name: "RESTful APIs", level: "Advanced", tag: "Architecture" },
      { name: "GraphQL", level: "Proficient", tag: "Query API" }
    ],
    databases: [
      { name: "MongoDB", level: "Advanced", tag: "NoSQL / Mongoose" },
      { name: "MySQL", level: "Proficient", tag: "Relational" },
      { name: "Supabase", level: "Proficient", tag: "PostgreSQL & BaaS" }
    ],
    fintech: [
      { name: "Razorpay", level: "Production", desc: "Order creation, signature check & webhook handling" },
      { name: "Cashfree", level: "Production", desc: "Subscription flows and auto-reconciliation" },
      { name: "Easebuzz", level: "Production", desc: "Multi-gateway fallback & payment verification" }
    ],
    realtimeSecurity: [
      { name: "WebSockets", desc: "Low-latency bidirectional sync (DevTogether)" },
      { name: "Server-Sent Events (SSE)", desc: "Live real-time hospital bed status (WardWatch)" },
      { name: "JWT & RBAC", desc: "Role-Based Access Control for Doctors, Nurses & Admins" },
      { name: "HMAC Webhook Auth", desc: "Cryptographic signature validation for payments" }
    ],
    cloudDevOps: [
      { name: "AWS", desc: "EC2, S3, Cloud Foundations & Architecting" },
      { name: "Linux & Windows", desc: "CIS infrastructure troubleshooting" },
      { name: "Networking Core", desc: "TCP/IP, DNS, Subnets, Firewalls" },
      { name: "Git & GitHub", desc: "CI/CD, Workflows & Version Control" },
      { name: "Postman & Firebase", desc: "API testing, Auth & DB integrations" }
    ]
  },
  experience: [
    {
      company: "Capgemini",
      role: "Software Engineer",
      period: "Sep 2026 – Present",
      location: "Thane, Maharashtra",
      badge: "Current Role",
      type: "Full-Time",
      description: "Undergoing comprehensive Cloud Infrastructure Services (CIS) training and engineering systems troubleshooting.",
      highlights: [
        "Completed in-depth CIS training covering Linux server management, Windows administration, enterprise networking, and Python fundamentals.",
        "Developing foundational infrastructure troubleshooting skills for hybrid cloud and scalable system architectures.",
        "Automating deployment scripts and diagnosing network connectivity bottlenecks."
      ],
      technologies: ["Linux", "Windows", "Networking Core", "Python", "Cloud Infrastructure"]
    },
    {
      company: "Edviron",
      subtitle: "Fintech Startup",
      role: "SDE Intern",
      period: "Oct 2025 – Mar 2026",
      location: "Mumbai, Maharashtra",
      badge: "Fintech Production",
      type: "Internship",
      description: "Designed, engineered, and maintained production payment infrastructure and GraphQL services powering financial workflows.",
      highlights: [
        "Designed and developed RESTful APIs and GraphQL services using TypeScript, NestJS, and MongoDB, powering production payment and subscription workflows.",
        "Integrated Razorpay, Cashfree, and Easebuzz payment gateways, implementing structured validation, HMAC signature checks, and idempotent error handling to improve transaction reliability.",
        "Developed responsive React.js monitoring dashboards and owned end-to-end feature delivery, covering API design, backend development, frontend integration, testing, debugging, and production releases."
      ],
      technologies: ["TypeScript", "NestJS", "MongoDB", "React.js", "Razorpay", "Cashfree", "Easebuzz", "GraphQL"]
    },
    {
      company: "Pace Institute",
      role: "Android App Development Intern",
      period: "Jan 2023 – Jul 2023",
      location: "Mumbai, Maharashtra",
      badge: "Mobile Dev",
      type: "Internship",
      description: "Engineered mobile learning applications with authentication and interactive video delivery.",
      highlights: [
        "Developed an Android learning application featuring Firebase authentication, interactive MCQs, and video-based learning modules.",
        "Implemented real-time progress tracking, offline caching, and intuitive student UI."
      ],
      technologies: ["Android", "Java/Kotlin", "Firebase Auth", "Firestore", "Mobile UX"]
    },
    {
      company: "CyberPoint Computers",
      role: "Freelance Web Developer",
      period: "Oct 2022 – Dec 2022",
      location: "Remote / Thane",
      badge: "Freelance",
      type: "Contract",
      description: "Redesigned and deployed cross-device e-commerce storefront on AWS cloud.",
      highlights: [
        "Designed and deployed a mobile-first responsive business website on AWS, translating client requirements into a high-converting storefront.",
        "Replaced a non-responsive legacy site, boosting page load speeds by 60% and cross-device compatibility."
      ],
      technologies: ["AWS", "JavaScript", "Responsive Design", "HTML5/CSS3"]
    }
  ],
  projects: [
    {
      id: "wardwatch",
      title: "WardWatch Clinical System",
      category: "MERN Stack",
      subtitle: "Real-Time Hospital Ward Management System",
      badge: "Featured MERN",
      featured: true,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "SSE", "JWT", "RBAC"],
      description: "Built a scalable MERN-stack ward management system with responsive Tailwind CSS interfaces, real-time Server-Sent Events (SSE) for bed and status updates, and secure JWT authentication with RBAC for doctor, nurse, and admin dashboards.",
      highlights: [
        "Architected with MongoDB, Express.js, React.js, and Node.js for high throughput ward telemetry.",
        "Real-time bed availability streaming via Server-Sent Events (SSE), eliminating manual polling.",
        "Granular Role-Based Access Control (RBAC) isolating doctor prescriptions, nurse logs, and hospital admin billing.",
        "Responsive glassmorphism dashboard optimized for emergency room tablets and workstations."
      ],
      architecture: {
        frontend: "React.js + Tailwind CSS + Lucide Icons + EventSource SSE listener",
        backend: "Node.js + Express REST API with SSE event emitter pipeline",
        database: "MongoDB with Mongoose schemas for Beds, Patients, and Staff",
        security: "JWT in HTTP-only cookies + RBAC middleware"
      },
      github: "https://github.com/memonriyaz",
      demo: "#simulator-tab"
    },
    {
      id: "reserve",
      title: "ReServe – Food Redistribution Platform",
      category: "Full Stack & Cloud",
      subtitle: "AI-Powered NGO Food Redistribution Network",
      badge: "Top 105 Google Solution Challenge",
      featured: true,
      tags: ["Next.js", "Supabase", "Google Cloud", "AI Prediction", "Google Maps API"],
      description: "Built a full-stack web platform connecting restaurants with NGOs via AI-based food safety prediction and Google Maps API integration; selected among the Top 105 projects nationally in Google Solution Challenge 2025.",
      highlights: [
        "Recognized in Top 105 projects across India in the prestigious Google Solution Challenge 2025.",
        "Integrated AI food safety prediction model estimating shelf-life based on preparation timestamp, temperature, and food type.",
        "Dynamic routing with Google Maps API to dispatch volunteers efficiently to restaurant donation points.",
        "PostgreSQL and Supabase backend with real-time donor-to-shelter matching engine."
      ],
      architecture: {
        frontend: "Next.js App Router + Tailwind CSS + Mapbox/Google Maps",
        backend: "Next.js Server Actions & Edge Functions",
        database: "Supabase (PostgreSQL with Row Level Security)",
        cloud: "Google Cloud Platform & Google Maps Platform"
      },
      github: "https://github.com/memonriyaz",
      demo: "#"
    },
    {
      id: "devtogether",
      title: "DevTogether – Collaborative Coding Platform",
      category: "Real-Time Systems",
      subtitle: "Multi-User Real-Time Pair Programming Environment",
      badge: "Real-Time WebSockets",
      featured: true,
      tags: ["React.js", "Node.js", "WebSockets", "Terminal", "State Sync"],
      description: "Built a real-time collaborative coding platform with a shared terminal, live chat, and WebSocket-based state synchronization, enabling concurrent multi-user editing and execution with low-latency performance.",
      highlights: [
        "Concurrent multi-user code editing with WebSocket broadcast channels and conflict resolution.",
        "Interactive shared terminal allowing execution of code snippets in an isolated runtime environment.",
        "Integrated real-time live chat and room management with sub-40ms latency.",
        "Synchronized syntax highlighting, cursor positioning, and file tree management."
      ],
      architecture: {
        frontend: "React.js + Monaco Editor + Xterm.js virtual terminal",
        backend: "Node.js WebSocket Server (ws/socket.io) + Express API",
        sync: "Operational Transformation & event-driven cursor tracking"
      },
      github: "https://github.com/memonriyaz",
      demo: "#"
    },
    {
      id: "edviron-fintech",
      title: "Edviron Multi-Gateway Payment Engine",
      category: "Fintech",
      subtitle: "Production Payment & Subscription Infrastructure",
      badge: "Fintech Production",
      featured: false,
      tags: ["NestJS", "TypeScript", "MongoDB", "Razorpay", "Cashfree", "Easebuzz", "GraphQL"],
      description: "Engineered scalable RESTful APIs and GraphQL endpoints for Edviron to power production school fee payment collections and auto-recurring subscriptions across India.",
      highlights: [
        "End-to-end integration of Razorpay, Cashfree, and Easebuzz with unified abstraction layer.",
        "Cryptographic HMAC SHA-256 signature verification preventing webhook spoofing.",
        "Idempotent database transactions in MongoDB to eliminate duplicate charge incidents.",
        "React monitoring dashboard providing real-time transaction health metrics."
      ],
      architecture: {
        frontend: "React.js monitoring dashboard with payment health charts",
        backend: "NestJS modular micro-architecture with TypeScript",
        database: "MongoDB multi-document transactions & ledger audit trails"
      },
      github: "https://github.com/memonriyaz",
      demo: "#"
    }
  ],
  education: [
    {
      institution: "Don Bosco Institute of Technology",
      degree: "B.E. in Computer Engineering",
      period: "August 2023 – June 2026",
      score: "CGPA: 9.3 / 10",
      highlights: "Specialized in Distributed Systems, Cloud Architecture, Full Stack Web Engineering, and Database Design."
    },
    {
      institution: "Vivekanand Education Society's Polytechnic",
      degree: "Diploma in Computer Engineering",
      period: "November 2020 – May 2023",
      score: "89.43%",
      highlights: "Foundation in Computer Networks, Data Structures, OOP with C++/Java, Operating Systems, and Relational DBMS."
    }
  ],
  certifications: [
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      icon: "Cloud",
      skills: "Cloud Architecture, IAM, EC2, S3, VPC, CloudWatch"
    },
    {
      title: "AWS Academy Graduate – Cloud Architecting",
      issuer: "Amazon Web Services (AWS)",
      icon: "Layers",
      skills: "High Availability, Auto-scaling, Serverless, Cloud Security, Disaster Recovery"
    }
  ],
  achievements: [
    {
      title: "Top 10 – ColoHacks 2026",
      issuer: "ColoHacks Hackathon",
      desc: "Selected among top 10 engineering teams nationwide for developing an innovative high-throughput software prototype under 36 hours."
    },
    {
      title: "Top 105 Nationally – Google Solution Challenge 2025",
      issuer: "Google Developer Student Clubs",
      desc: "Selected among the Top 105 projects across India for 'ReServe' platform tackling United Nations Sustainable Development Goals (Zero Hunger)."
    },
    {
      title: "Finalist – Webathon 2024",
      issuer: "National Webathon",
      desc: "Recognized as a national finalist for building responsive, accessible full-stack web solutions."
    }
  ]
};
