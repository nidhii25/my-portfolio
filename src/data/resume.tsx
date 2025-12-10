import { Icons } from "@/components/icons";
import { HomeIcon,Download, Icon } from "lucide-react";
// import profilePic from "../../public/me.jpeg"

export const DATA = {
  name: "Nidhi Agrawal",
  url: "https://www.linkedin.com/in/nidhiagrawal25",
  location: "Indore, India",
  locationLink: "https://www.google.com/maps/place/indore",
  description:
    "Data Analysis | AIML Enthusiast | DSA Learner | Python Developer | FastAPI | Communication",
  summary:
  "I'm a [AIML Enthusiast and Backen Developer](/#work) with a passion for building secure and scalable solutions. Currently [pursuing a Bachelor's in Cybersecurity](/#education), I'm skilled in Network Security, Web Development, and languages like Python, Java, C. I'm actively working on [open-source projects, developing web-based solutions, and enhancing my skills in DSA and cybersecurity](/#rightnow). Eager to contribute to impactful projects and collaborate on exciting opportunities!",
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "React.js",
    "Javascript",
    "C++",
    "FastAPI",
    "RestAPI",
    "MongoDB",
    "Matplotlib",
    "Postgres",
    "Docker",
    "Seaborn",
    "DSA",
    "Numpy",
    "Pandas",
  ],
  initials: "NA",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://docs.google.com/document/d/19LkTc0Q34W7bVaCiGEq_uVaYO2XJ9cfzOn54AZJsXi4/edit?usp=sharing", icon: Download, label: "Resume" },
  ],
  contact: {
    email: "devnidhi15@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nidhii25",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nidhiagrawal25/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      href: "https://www.linkedin.com/in/nidhiagrawal25/",
      company: "Self-Employed",
      badges: [],
      location: "Remote",
      title: "Backend Developer, DSA Learner and AIML Enthusiast",
      logoUrl: "/me.jpeg",
      start: "January 2025",
      end: "Present",
      description: "As a Backend Developer, DSA Learner, and AIML Enthusiast, I work independently on projects that strengthen my core engineering skills. My focus is on building reliable backend systems, writing efficient algorithms, and exploring AI/ML concepts to enhance real-world applications.Through self-driven projects and freelancing work, I have gained hands-on experience in designing APIs, managing databases, improving performance, and applying secure development practices. Each project has helped me deepen my technical understanding, refine my backend expertise, and steadily progress toward advanced AI/ML integration."
    },    
    {
      href: "https://www.linkedin.com/company/abhyudaya-coding-club/mycompany/",
      company: "Abhyudaya Coding Club",
      badges: [],
      location: "Remote",
      title: "Secreatary",
      logoUrl: "/abhyudaya.jpeg",
      start: "June 2025",
      end: "Present",
      description:"As the Secretary of Abhyudaya Coding Club, I support the smooth functioning of the club’s activities and contribute to its overall growth. My responsibilities include coordinating events, managing communication, maintaining structure within the team, and ensuring that initiatives run efficiently.Beyond administrative duties, I also take part in the club’s technical environment—encouraging participation in workshops, coding events, hackathons, and collaborative learning sessions. My role aims to strengthen the community, promote skill development among members, and help create a supportive space for students passionate about technology."
    },
    
  ],
  education: [
    {
      school: " Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      href: "https://svvv.edu.in/",
      degree: "Bachelor's Degree of Computer Science and Information & Cybersecurity (B.Tech)",
      logoUrl: "/svvv.jpeg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "ChatInsight",
      href: "https://chatinsight.vercel.app/login",
      dates: "2025 - Present",
      active: true,
      description:
        "ChatInsight is an advanced conversational analytics tool built with FastAPI and React.js. It analyzes user chat data to extract meaningful insights through sentiment analysis, intent detection, and message pattern tracking. The system features optimized preprocessing pipelines and integrates Matplotlib and Seaborn to deliver clear, data-driven visualizations.",
      technologies: [
        "React.js",
        "FastAPI",
        "Matplotlib",
        "Seaborn",
        "MongoDB",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatinsight.vercel.app/login",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nidhii25/chatinsight-frontend",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dn6xjjn10/image/upload/v1765376029/Screenshot_2025-12-10_194332_u1fcw6.png",
    },

    {
      title: "Patient Management System",
      href: "https://nidhii25-patient-management-system-frontendapp-h16jeu.streamlit.app/",
      dates: "2025 - Present",
      active: true,
      description:
        "A streamlined patient management platform built using FastAPI and Streamlit. It enables secure and efficient handling of patient records, doctor assignments, and appointment tracking. With validated CRUD operations and a clean UI for managing medical data, the system ensures reliability through a well-structured backend and modular architecture.",
      technologies: [
        "StreamLit",
        "FastAPI",
        "MongoDB",
        "HTML",
        "CSS",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://nidhii25-patient-management-system-frontendapp-h16jeu.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nidhii25/Patient-Management-System",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dn6xjjn10/image/upload/v1765376428/Screenshot_2025-12-10_194958_lafujs.png",
    },

    {
      title: "Nutrix",
      href: "https://nutrix-n.vercel.app/",
      dates: "2025 - Present",
      active: true,
      description:
        "Nutrix is a personalized nutrition tracking system built with Next.js, FastAPI, and MongoDB. It processes food data using Pandas to calculate daily calories and macro intake, offering meaningful insights through clean visual charts. The platform focuses on user-specific diet analysis to enhance accuracy and improve health monitoring.",
      technologies: [
        "Next.js",
        "MongoDB",
        "FastAPI",
        "JWT",
        "REST APIs",
        "Pandas",
      ],
      links: [
        {
          type: "Website",
          href: "https://nutrix-n.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nidhii25/nutriX-frontend",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dn6xjjn10/image/upload/v1765376344/Screenshot_2025-12-10_194843_kgapnu.png",
    },

    {
      title: "Cyber-Shield",
      href: "https://cyber-shield-n.vercel.app/",
      dates: "2025 - Present",
      active: true,
      description:
        "Cyber-Shield is a cybersecurity analytics dashboard that visualizes threat patterns using FastAPI and React.js. It includes phishing URL detection powered by NLP techniques and ML classification models. The platform provides clear dashboards showcasing attack frequencies, trends, and insights using Pandas and Matplotlib.",
      technologies: [
        "React.js",
        "MongoDB",
        "FastAPI",
        "JWT",
        "Pandas",
        "Matplotlib",
        "NLP",
      ],
      links: [
        {
          type: "Website",
          href: "https://cyber-shield-n.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nidhii25/cyber-shield-backend",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dn6xjjn10/image/upload/v1765376561/Screenshot_2025-12-10_195211_fokrsz.png",
    },

    {
      title: "Movie Recommendation System",
      href: "https://movie-finder-n.vercel.app/",
      dates: "2025 - Present",
      active: true,
      description:
        "A personalized movie recommendation system developed using FastAPI and React.js. It supports genre-based filtering, preference-based suggestions, and similarity-driven recommendations using NLP techniques. The platform also includes secure CRUD operations for movie data and optimized backend endpoints for fast performance.",
      technologies: [
        "React.js",
        "MongoDB",
        "FastAPI",
        "JWT",
        "NLP",
        "Google SDK",
      ],
      links: [
        {
          type: "Website",
          href: "https://movie-finder-n.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/nidhii25/movie-finder-frontend",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://res.cloudinary.com/dn6xjjn10/image/upload/v1765376745/Screenshot_2025-12-10_195515_qqlzu0.png",
    },
  ],

  hackathons: [
    {
      title: "Void Hacks 7.0",
      dates: "November 2025",
      location: "Indore, India",
      description:
        "Developed a comprehensive student management portal designed to streamline academic records, progress tracking, and administrative workflows for institutions.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65149896437c0_vhlogo.png?d=200x200",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://your-voidhacks7-link.com",
        },
      ],
    },

    {
      title: "TechIndore Hackathon",
      dates: "August 2025",
      location: "Indore, India",
      description:
        "Built a fully functional Jansunwai grievance redressal platform for citizens, featuring SLA-based ticket tracking, issue escalation, and streamlined communication with zonal authorities.",
      image:
        "https://res.cloudinary.com/dn6xjjn10/image/upload/v1765377555/imc_logo_uvfxlw.avif",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/ayushprajapat0/Indore-Samadhan.git",
        },
      ],
    },

    {
      title: "Void Hacks( ) 6.0",
      dates: "November 2024",
      location: "Indore, India",
      description:
        "Developed an online student internship management system designed to streamline internship tracking, mentor assignment, and student progress reporting.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65149896437c0_vhlogo.png?d=200x200",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/weareZen/VoidHacks6.0-zen",
        },
      ],
    },
  ],
} as const;
