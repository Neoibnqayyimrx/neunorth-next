
import { WiDayCloudyGusts } from "react-icons/wi";
import { BsShieldLock, BsBarChartLine } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaBriefcase,      
  FaClock,        
  FaPhone,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaHeart,
  FaChartLine,
  FaServer,
  FaShieldCat,
  FaLock,
  FaCloud,
} from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoGitNetworkSharp } from "react-icons/io5";
import {
  HiOutlineLightBulb,
} from "react-icons/hi";
import { GrSync } from "react-icons/gr";
import {
  headsetImage,
  pencilImage,
  shieldImage,

  //Portfolio images import
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,

  //Clients images import
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "@/public/assets/page";
import team1 from "@/public/assets/blog1.jpg";
import team2 from "@/public/assets/blog2.jpg";
import team3 from "@/public/assets/blog3.jpg";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export const navRoutes = [
  {
    path: "/",  // Changed from id: "/hero" to path: "/" for home page
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/service",
    name: "Service",
  },
   {
    path: "/careers",
    name: "Careers",
  },
  {
    path: "/academy",
    name: "Academy",
  },
  
  {
    path: "/contact",
    name: "Contact",
  },
];

export const whyChooseUs = [
  {
    title: "Proven Expertise",
    imageIcon: shieldImage,
    description: `With years of experience across multiple industries, our team
                brings deep knowledge and technical expertise to every project,
                ensuring solutions that are both innovative and reliable.`,
  },
  {
    title: "Customized Solutions",
    imageIcon: pencilImage,
    description: `We understand that every business is unique. Our solutions are
                tailored to fit each client's specific needs, providing maximum
                flexibility and scalability for the future.`,
  },
  {
    title: "Exceptional Support",
    imageIcon: headsetImage,
    description: `Our commitment doesn’t end at project delivery. We provide
                dedicated, ongoing support to ensure your business continues to
                succeed with our solutions.`,
  },
];

export const ourApproaches = [
  {
    title: "Client-Centered Collaboration",
    icon: FaHandshake,
    description: `We prioritize close collaboration, working directly with
                  clients to fully understand their vision and challenges. This
                  partnership ensures each solution is perfectly aligned with
                  their business goals.`,
  },
  {
    title: "Innovation-Driven Solutions",
    icon: HiOutlineLightBulb,
    description: `Innovation is at the heart of everything we do. We apply the
                  latest technologies and creative problem-solving to develop
                  solutions that drive long-term growth and competitiveness.`,
  },
  {
    title: "Agile and Adaptive",
    icon: GrSync,
    description: `Our agile approach keeps us flexible and ready to adapt to
                  changing needs. This method allows us to deliver scalable
                  solutions that grow alongside your business.`,
  },
];
// constants/data.ts
export const services = [
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions", 
    description: "Secure and scalable cloud solutions tailored to fit your business needs, enabling seamless data access and collaboration from anywhere.",
    icon: WiDayCloudyGusts,
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity", 
    description: "Protect your business with robust cybersecurity solutions that safeguard data and prevent unauthorized access, ensuring peace of mind.",
    icon: BsShieldLock,
  },
  {
    title: "Custom Software Development",
    slug: "custom-software-development", 
    description: "Develop custom software solutions that enhance efficiency and align perfectly with your business processes and goals.",
    icon: FaCode,
  },
  {
    title: "IT Consulting",
    slug: "it-consulting", 
    description: "Leverage our expertise to make strategic IT decisions that drive growth and optimize your technology investments.",
    icon: FaRegLightbulb,
  },
  {
    title: "Data Analytics",
    slug: "data-analytics", 
    description: "Turn raw data into actionable insights with advanced analytics that inform smarter business decisions.",
    icon: BsBarChartLine,
  },
  {
    title: "Project Management",
    slug: "project-management", 
    description: "Optimize your business connectivity with reliable, high-speed network infrastructure solutions designed to keep your operations seamless and resilient.",
    icon: IoGitNetworkSharp,
  },
];

export const portfolio = [
  {
    title: "Secure E-Commerce Platform",
    description:
      "Developed a high-performance e-commerce platform with advanced security features, enabling safe and seamless transactions for customers worldwide.",
    image: portfolio1,
  },
  {
    title: "Cloud Migration for a Global Company",
    description:
      "Successfully migrated a global company’s data to a secure, scalable cloud environment, improving access and reducing costs.",
    image: portfolio2,
  },
  {
    title: "Real-Time Data Analytics Dashboard",
    description:
      "Created a real-time analytics dashboard that provides actionable insights, helping businesses make data-driven decisions quickly.",
    image: portfolio3,
  },
  {
    title: "Custom CRM Solution for Client Management",
    description:
      "Designed a custom CRM system to improve client interactions, streamline workflows, and manage leads effectively.",
    image: portfolio4,
  },
  {
    title: "AI-Powered Cybersecurity Monitoring System",
    description:
      "Built an AI-driven security monitoring system that detects and responds to threats in real time, ensuring robust protection for client data.",
    image: portfolio5,
  },
  {
    title: "High-Speed Network Infrastructure for Corporate Office",
    description:
      "Implemented a high-speed network infrastructure to boost productivity and connectivity in a large corporate office.",
    image: portfolio6,
  },
];

export const contactInfo = [
  {
    title: "Email Us",
    description: "Fast and Reliable Support",
    value: "neunorth@gmail.com",
    icon: MdOutlineAlternateEmail,
  },
  {
    title: "Our Address",
    description: "Come visit us in our office",
    value: "Gwako, Gwagwalada, Abuja Nigeria",
    icon: FaLocationCrosshairs,
  },
  {
    title: "Phone number",
    description: "Give Us a call",
    value: "+234 803 183 0866",
    icon: FiPhoneCall,
  },
];

export const socialHandles = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com",
  },
   {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com",
  },
  
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Global Space Collaboration Platform",
    subtitle: "Uniting international agencies for coordinated space exploration",
    goal: "To create a unified platform for international space agencies to share research, coordinate missions, and collaborate on space exploration projects in real-time.",
    whatWeDid: "Developed a secure cloud-based collaboration platform with real-time data sharing, AI-powered research matching, and multilingual support. Implemented blockchain for secure data verification and IP protection.",
    outcome: "Increased international collaboration by 300%, reduced mission planning time by 60%, and enabled 15+ joint research projects within the first year of launch.",
    image: "/assets/space.png",
    organization: "SPACE Collaboration Initiative",
    category: "Enterprise"
  },
  {
    id: 2,
    title: "48-Hour Non-Profit Digital Transformation",
    subtitle: "Rapid website development for 48 organizations in 48 hours",
    goal: "To provide 48 non-profit organizations with professional, functional websites within 48 hours through volunteer efforts, enhancing their online presence and donation capabilities.",
    whatWeDid: "Organized a hackathon-style event with 200+ volunteer developers and designers. Created customizable website templates, integrated donation systems, and provided training for non-profit staff.",
    outcome: "48 complete websites launched in 48 hours, increasing average donation conversion rates by 85% and providing $2M+ in equivalent services to non-profits.",
    image: "/assets/Logo.png",
    organization: "48in48 Foundation",
    category: "Non-Profit"
  },
  {
    id: 3,
    title: "AI-Powered Space Research Portal",
    subtitle: "Accelerating discoveries with machine learning insights",
    goal: "To accelerate space research by providing scientists with AI-driven insights and predictive analytics from petabytes of space mission data.",
    whatWeDid: "Built a machine learning platform that processes satellite imagery, telemetry data, and research papers. Implemented natural language search and predictive modeling tools for researchers.",
    outcome: "Reduced data analysis time from weeks to hours, enabled 25+ new research discoveries, and improved prediction accuracy of space phenomena by 40%.",
    image: "/assets/supBRT.svg",
    organization: "SPACE Research Institute",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "AI-Powered Space Research Portal",
    subtitle: "Accelerating discoveries with machine learning insights",
    goal: "To accelerate space research by providing scientists with AI-driven insights and predictive analytics from petabytes of space mission data.",
    whatWeDid: "Built a machine learning platform that processes satellite imagery, telemetry data, and research papers. Implemented natural language search and predictive modeling tools for researchers.",
    outcome: "Reduced data analysis time from weeks to hours, enabled 25+ new research discoveries, and improved prediction accuracy of space phenomena by 40%.",
    image: "/assets/supBRT.svg",
    organization: "SPACE Research Institute",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "AI-Powered Space Research Portal",
    subtitle: "Accelerating discoveries with machine learning insights",
    goal: "To accelerate space research by providing scientists with AI-driven insights and predictive analytics from petabytes of space mission data.",
    whatWeDid: "Built a machine learning platform that processes satellite imagery, telemetry data, and research papers. Implemented natural language search and predictive modeling tools for researchers.",
    outcome: "Reduced data analysis time from weeks to hours, enabled 25+ new research discoveries, and improved prediction accuracy of space phenomena by 40%.",
    image: "/assets/supBRT.svg",
    organization: "SPACE Research Institute",
    category: "AI/ML"
  }
];

export const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    skills: "15+ years of experience in AI and machine learning with a PhD in Computer Science from MIT. Specializes in developing scalable AI solutions for healthcare and enterprise applications.",
    focusAreas: ["AI/ML", "Healthcare Tech", "Cloud Architecture"],
    image: team1,
    linkedin: "https://www.linkedin.com/in/example", 
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Cybersecurity",
    skills: "Certified Ethical Hacker with over 12 years of experience in threat intelligence and security operations. Previously led security teams at Fortune 500 companies.",
    focusAreas: ["Threat Detection", "Penetration Testing", "Security Strategy"],
    image: team2,
    linkedin: "https://www.linkedin.com/in/example",
  },
  {
    name: "Emily Watson",
    role: "IoT Solutions Architect",
    skills: "Expert in designing and implementing smart city infrastructure with 10+ years in IoT ecosystems. Master's degree in Electrical Engineering from Stanford.",
    focusAreas: ["Smart Cities", "IoT Networks", "Sustainable Tech"],
    image: team3,
    linkedin: "https://www.linkedin.com/in/example",
  },
  {
    name: "Lukman Jibril",
    role: "Lead Data Scientist",
    skills: "Specializes in predictive analytics and big data processing with extensive experience in healthcare and financial sectors. Published researcher in data science.",
    focusAreas: ["Predictive Analytics", "Big Data", "Machine Learning"],
    image: team1,
    linkedin: "https://www.linkedin.com/in/example",
  },
  {
    name: "Uba Rabiu",
    role: "VP of Product Innovation",
    skills: "Product strategist with 14 years of experience bringing tech products from concept to market. Expert in user-centered design and agile methodologies.",
    focusAreas: ["Product Strategy", "UX Design", "Innovation"],
    image: team2,
    linkedin: "https://www.linkedin.com/in/example",
  },
  {
    name: "Ali Abdulhakim",
    role: "Software Engineer",
    skills: "Full-stack developer with 4+ years building scalable web applications. Specialized in React, Node.js, and cloud infrastructure. Open-source contributor.",
    focusAreas: ["Full-Stack Dev", "Cloud Solutions", "DevOps"],
    image: team3,
    linkedin: "https://www.linkedin.com/in/example",
  },
];
export const clientsReviews = [
  {
    content:
      "Neunorth transformed our outdated systems into a seamless, secure infrastructure. Their team is exceptionally skilled and always available to assist.",
    name: "Sophia Roberts",
    jobTitle: "IT Manager, TechNova",
    rating: 4,
    image: client1,
  },
  {
    content:
      "Partnering with Neunorth has been a game-changer for our digital operations. Their innovative approach helped us scale effortlessly.",
    name: "Rajesh Patel",
    jobTitle: "CEO, Alpha Logistics",
    rating: 4,
    image: client2,
  },
  {
    content:
      "Neunorth’s cloud solutions have boosted our productivity significantly. I can’t recommend their services enough!",
    name: "Emily Nguyen",
    jobTitle: "Operations Manager, Zenith Retail",
    rating: 3,
    image: client3,
  },
  {
    content:
      "Our cybersecurity has never been stronger. Neunorth identified vulnerabilities we didn’t know existed and resolved them efficiently.",
    name: "James O’Connor",
    jobTitle: "CTO, Shield Financial Group",
    rating: 5,
    image: client4,
  },
  {
    content:
      "The team at Neunorth delivered ahead of schedule and exceeded expectations. Their professionalism and expertise are unmatched.",
    name: "Fatima Yusuf",
    jobTitle: "Project Lead, GreenTech Solutions",
    rating: 4,
    image: client5,
  },
  {
    content:
      "Neunorth provided scalable solutions that have supported our rapid growth. Their ongoing support ensures we’re always ahead.",
    name: "Liam Carter",
    jobTitle: "Founder, BrightSpark Media",
    rating: 4,
    image: client6,
  },
];

export const footer = [
  {
    title: "Go to",
    subRoutes: [
      {
        title: "About Us",
        id: "/about",
      },
      {
        title: "Services",
        id: "/service",
      },
      {
        title: "Academy",
        id: "/academy",
      },
      {
        title: "Careers",
        id: "careers",
      },
      {
        title: "Contact Us",
        id: "contact",
      },
    ],
  },
  {
    title: "Services",
    subRoutes: [
      {
        title: "Project Management",
        id: "",
      },
      {
        title: "Cybersecurity",
        id: "",
      },
      {
        title: "Software Development",
        id: "",
      },
      {
        title: "IT Consulting",
        id: "",
      },
      {
        title: "Coaching",
        id: "",
      },
    ],
  },
];

export const companyValues = [
  {
    title: "Innovation First",
    icon: FaLightbulb,
    description:
      "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    title: "Client Success",
    icon: FaUsers,
    description:
      "Your success is our success. We measure our performance by your business outcomes.",
  },
  {
    title: "Technical Excellence",
    icon: FaCode,
    description:
      "We maintain the highest standards of code quality, security, and performance.",
  },
  {
    title: "Transparency",
    icon: FaHeart,
    description:
      "Open communication and clear processes build trust and better partnerships.",
  },
  {
    title: "Scalable Solutions",
    icon: FaChartLine,
    description:
      "We build for today with tomorrow in mind, ensuring your technology grows with you.",
  },
  {
    title: "Continuous Learning",
    icon: FaRocket,
    description:
      "Our team stays ahead of the curve through continuous education and experimentation.",
  },
];

export const technicalEdge = [
  {
    title: "Modern Stack",
    icon: FaCode,
    description:
      "Next.js 14, TypeScript, Tailwind, and cutting-edge tools for robust applications.",
  },
  {
    title: "Secure by Design",
    icon: FaShieldCat,
    description:
      "Security-first approach with automated testing and compliance frameworks.",
  },
  {
    title: "Cloud Native",
    icon: FaCloud,
    description:
      "Fully cloud-optimized solutions leveraging AWS, Vercel, and edge computing.",
  },
  {
    title: "DevOps Excellence",
    icon: FaServer,
    description:
      "CI/CD pipelines, containerization, and infrastructure as code for reliability.",
  },
];

export const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with vision to bridge tech gaps",
  },
  {
    year: "2021",
    title: "First Enterprise Client",
    description: "Secured major financial sector project",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew from 5 to 25 team members",
  },
  {
    year: "2023",
    title: "AWS Partner",
    description: "Became certified AWS Advanced Partner",
  },
  {
    year: "2024",
    title: "Series A Funding",
    description: "$5M raised for global expansion",
  },
];

export const workProcess = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Deep dive into your business goals and technical requirements.",
    icon: HiOutlineLightBulb,
  },
  {
    step: "02",
    title: "Strategy",
    description: "Architecture planning and solution design with your team.",
    icon: FaChartLine,
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with continuous feedback loops.",
    icon: FaCode,
  },
  {
    step: "04",
    title: "Launch",
    description: "Deployment, testing, and transition to support.",
    icon: FaRocket,
  },
];

export const socialProof = {
  stats: [
    { value: "150+", label: "Projects Delivered" },
    { value: "98%", label: "Client Retention" },
    { value: "40+", label: "Team Members" },
    { value: "24/7", label: "Support Available" },
  ],
  testimonials: [
    {
      quote:
        "They transformed our digital presence completely. The team's technical depth is impressive.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow Inc.",
    },
    {
      quote:
        "Outstanding partnership. They understood our complex requirements and delivered beyond expectations.",
      author: "Michael Rodriguez",
      role: "CTO, FinanceCorp",
    },
  ],
};


export const careerInfo = [
  {
    icon: FaBriefcase, 
    title: "Application Process",
    description: "What to expect",
    value: "5-7 business days response time"
  },
  {
    icon: FaClock,
    title: "Working Hours",
    description: "Our office hours",
    value: "Mon-Fri, 9 AM - 6 PM"
  },
  {
    icon: FaPhone,
    title: "HR Contact",
    description: "For application queries",
    value: "hr@company.com"
  }
];

