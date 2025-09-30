// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import blogapplogo from './assets/projects_logo/What-is-blogging.jpg'

// Experience Section Logo's
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';


const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript (ES6+)', logo: javascriptLogo },
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Next.js', logo: nextjsLogo },
    ],
  },
  {
    title: 'UI/UX Tools & Libraries',
    skills: [
      { name: 'TailwindCSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Material-UI', logo: materialuiLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
  {
    title: 'Performance Optimization',
    skills: [
      { name: 'Lazy loading', logo: null },
      { name: 'Image optimization', logo: null },
      { name: 'Lighthouse audits', logo: null },
      { name: 'Responsive design', logo: null },
      { name: 'SEO best practices', logo: null },
    ],
  },
  {
    title: 'Backend',
    skills: [
        { name: 'Node.js (Express.js)', logo: nodejsLogo },
        { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Databases',
    skills: [
        { name: 'MySQL', logo: mysqlLogo },
        { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Authentication & Security',
    skills: [
        { name: 'JWT', logo: null },
        { name: 'Session handling', logo: null },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub/GitLab', logo: githubLogo },
    ],
  },
  {
    title: 'Cloud hosting',
    skills: [
      { name: 'AWS', logo: null },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  const experiences = [
    {
      id: 0,
      img: null,
      role: "Junior Executive",
      company: "Airport Authority Of India- Indore, India",
      date: "June 2024-Aug 2024",
      desc: "Analyzed the operational interdependencies of Communication, Navigation, and Surveillance (CNS/ATM) systems within a safety-critical, ICAO-compliant Air Navigation Services (ANS) framework. Gained foundational knowledge of key navigational aids at Indore Airport (VAID), including the CAT-I Instrument Landing System (ILS), Doppler VOR (DVOR), and Distance Measuring Equipment (DME), by studying their operational principles and maintenance protocols. Familiarized with the engineering lifecycle of CNS equipment, including preventive maintenance, system monitoring, and fault diagnosis procedures designed to ensure high operational reliability under AAI & DGCA safety protocols.",
    },
    {
      id: 1,
      img: null,
      role: "Software Engineering and Digital Marketing Intern",
      company: "AnaajWala - Startup firm",
      date: "June 2025-Aug 2025",
      desc: "Developed and executed project-based digital marketing strategies, creating content and designs to enhance the startup's online presence and brand awareness. Contributed to a key app development project by writing and implementing code, directly assisting in the creation of new application features and functionalities. Collaborated directly with the company co-founder in a dual-role capacity, aligning technical app development tasks with strategic digital marketing objectives to ensure project cohesion.",
    },
    {
        id: 2,
        img: null,
        role: "Nature Club Coordinator",
        company: "SGSITS Indore, India",
        date: "February 2024",
        desc: "Spearheaded the Nature Club as a Coordinator for AAYAAM 2024, the official cultural event of Shri G.S. Institute of Technology & Science held from 22nd to 24th February 2024. Directed all management and marketing operations for the club's event, successfully securing sponsorships to fund activities. Orchestrated and presented a key event for the Nature Club during AAYAAM 2024, contributing to the college's vibrant cultural festival.",
    },
    {
        id: 3,
        img: null,
        role: "NGO Volunteer",
        company: "Shri Kailash Satyarthi Children's Foundation",
        date: "May 2025 - June 2025",
        desc: "Active Contributor to Child Protection Initiatives: Volunteered for the 'Child Friendly Village Program' with the Nobel Peace Laureate Kailash Satyarthi's foundation, engaging in grassroots activities to ensure child safety and development in rural communities. Dedicated Community Engagement: Committed over a month (May-June 2025) to on-ground project work, demonstrating dedication and reliability in tasks aimed at fostering a protective environment for children. Support for Social Impact Missions: Actively supported the foundation's mission to end child exploitation by contributing to a key program that empowers local communities and upholds children's rights.",
    }
  ];
  
  const education = [
    {
      id: 0,
      img: glaLogo,
      school: "SGSITS, Indore",
      date: "Sept 2022 - May 2026",
      grade: "6.5/10.0 CGPA (upto 6th semester)",
      desc: "I am currently pursuing my B.Tech in Electronics and Telecommunication Engineering from SGSITS, Indore. My coursework includes Data Structures and Algorithms, Computer Networks, Operating System, Signals and System, and Digital System Design.",
      degree: "B.Tech in Electronics and Telecommunication Engineering",
    },
    {
      
      id: 1,
      img: glaLogo,
      school: "Joy and Campion, Sagar",
      date: "July 2020 to February 2021",
      grade: "91%",
      desc: "",
      degree: "Senior Secondary School Certificate",

    },
    {
      
      id: 2,
      img: glaLogo,
      school: "St. Joseph's Convent, Sagar",
      date: "July 2020 to February 2021",
      grade: "91%",
      desc: "",
      degree: "Senior Secondary School Certificate",
    },
  ];
  
 const projects = [
    {
      id: 0,
      title: "Blog Application",
      description:
        "Constructed a well-structured and accessible application using semantic HTML5, significantly boosting SEO performance and ensuring usability with assistive technologies. Engineered a fully responsive, mobile-first UI using modern CSS Flexbox and Grid, guaranteeing a seamless user experience across all devices. Implemented a scalable stylesheet with BEM and CSS Custom Properties to establish a consistent design system and enable features like a user-toggleable dark/light theme.",
      image: blogapplogo,
      tags: ["HTML", "CSS","Responsive Design"],
      github: "https://github.com/namansinghai244/blog-application",
      webapp: "https://github.com/namansinghai244/blog-application",
    },
    {
      id: 1,
      title: "Synchronized Desktop Calendar",
      description:
        "Developed a desktop calendar with globally shared and synchronized calendars, allowing users to schedule meetings with other users.",
      image: "https://via.placeholder.com/300",
      tags: ["C#", ".NET", "SQL", "XML"],
      github: "https://github.com/name/repo",
      webapp: "https://github.com/name/repo",
    },
  ];


  export {experiences, SkillsInfo, projects, education}