import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaSearch } from 'react-icons/fa';

import profileImg from '../assets/profile.png';
import projectImg1 from '../assets/project1.jpg';
import projectImg2 from '../assets/project2.jpg';
// import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.jpg';
import projectImg5 from '../assets/project5.png';
// import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


// export const aboutInfo = [
//     {
//       icon: FaLightbulb,
//       title: 'Innovative',
//       description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
//       color: 'text-purple'
//     },
//     {
//       icon: FaPaintBrush,
//       title: 'Design Oriented',
//       description: 'Beautiful design and user experience are at the heart of everything I create.',
//       color: 'text-pink'
//     },
//     {
//       icon: FaCode,
//       title: 'Clean Code',
//       description: 'I write maintainable, efficient code following best practices and modern patterns.',
//       color: 'text-blue'
//     }
//   ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Framer-motion', 'JavaScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Python', 'Node.js','Java']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MySQL',  'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Data Analytics',
    icon: FaSearch,
    description: 'Bridging raw data and real-world business impact through analytics.',
    tags: ['MySQL', 'Power BI', 'Python', 'Excel', 'Tableau' ]
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: [ 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub']
  }
];

// Project Section

export const projects = [
  
  {
    title: "Driver Drowsiness Detection System with OpenCV",
    description: " Developed a system that monitors drivers in real-time using OpenCV, TensorFlow, and Pygame to detect signs of drowsiness.",
    image: projectImg2,
    tech: ["Python", "OpenCV", "TensorFlow", "Dlib", "Pygame"] ,
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  
  
  {
    title: "Real Estate Website",
    description: "Real estate website showcasing properties and services.",
    image: projectImg5,
    tech: ['React', 'Tailwind', 'Vercel'],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
    liveLink: "https://real-estate-website-beryl-nine.vercel.app/",
    githubLink: "https://github.com/mohit-kumar29/RealEstate_website",
  },
  {
    title: "Realtime Chat Application",
    description: "Developed a scalable real-time messaging platform with live updates and user authentication. ",
    image: projectImg1,
    tech: [" React", "Node", "Socket.io", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    liveLink: "https://chat-app-beta-rouge-82.vercel.app/",
    githubLink: "https://github.com/mohit-kumar29/chat-app",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website displaying my projects, skills, and professional experience.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    
  },
];


export const experienceData = [
  {
    courseName: "Bachelor of Technology (CSE)",
    name: "Dr. A.P.J. Abdul Kalam Technical University",
    duration: "2021-2025",
    link: "https://hiet.org/",
    // description:
    //   "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    courseName: "Intermediate (CBSE)",
    name: "Dehradun Public School",
    duration: "2019 - 2020",
    link: "https://www.ddps.in/",
    // description:
    //   "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    courseName: "High School (CBSE)",
    name: "Dehradun Public School",
    duration: "2017 - 2018",
    link: "https://www.ddps.in/",
    // description:
    //   "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
