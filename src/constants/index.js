import {
  dl,
  pb,
  py,
  cpp,
  anl,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  berk,
  llnl,
  sql,
  arid,
  onlybikes,
  wvw,
  vreader,
  pcc,
  calpoly,
  dvc,
  clark,
  cycf,
  mesa,
  ctc,
  dls,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "edu",
    title: "Education",
  },
  {
    id: "extra",
    title: "Extracurriculars",
  },

];

const services = [

];

const technologies = [
  {
    name: "Python",
    icon: py,
  },
  {
    name: "C/C++",
    icon: cpp,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computing Intern",
    company_name: "Argonne National Laboratory",
    icon: anl,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Developed a standalone application that geolocated and simulated critical infrastructures.",
      "Utilized cytoscape, deck.gl, heroku, and python in order to display a 3D arc/heat render of dataset.",
      "Implemented data scraping location data using beautifulsoup as well as manual user input stored in PostgreSQL.",
      "Codesigned unity 3D simulation of infrastructure connections."
    ],
  },
  {
    title: "Cybersecurity Analyst Intern",
    company_name: "Lawrence Berkeley National Laboratory",
    icon: berk,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Analyzed security risks of networks and local machines with the Endpoint Management team.",
      "Optimized unsecured machines to fit compliance standards.",
      "Utilized in-house ticketing system in order to complete tasks and resolve issues."
    ],
  },
  {
    title: "Computing Intern",
    company_name: "Lawrence Livermore National Laboratory",
    icon: llnl,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Assisted in the development the full stack web application, the Data Archive, through bug fixes and feature implementation.",
      "Participated in the requirements definition, analysis, design, implementation, debugging, testing of Docker containers.",
      "Attended research planning and analyzed data and information in support of scientific research."
    ],
  },

];

const testimonials = [

];

const projects = [
  {
    name: "SQL From Scratch",
    description:
      "Developed a program that can read and write data into txt files in SQL format using SQL commands. Features standard SQL commands; select, create, update, insert, drop. Integrated automatic batch line processor as well as manual command input.",

    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "green-text-gradient",
      },
      {
        name: "Google Test",
        color: "pink-text-gradient",
      },
    ],
    image: sql,
    source_code_link: "https://github.com/TeachMeTW/SQL-from-Scratch",
  },
  {
    name: "ARID",
    description:
      "Experimental AR Projection using ARUCO codes with a web interface.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: arid,
    source_code_link: "https://github.com/TeachMeTW/ARID",
  },
  {
    name: "OnlyBikes",
    description:
      "A Bike Rental Platform that utilizes Tensorflow Machine Learning and MapQuest API to detect bikes, returns, and rentals.",
    tags: [
      {
        name: "Python | Django",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow | OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "MapQuest | Twillio | Auth0",
        color: "pink-text-gradient",
      },
    ],
    image: onlybikes,
    source_code_link: "https://github.com/TeachMeTW/TigerHacks2022",
  },
  {
    name: "VReader",
    description:
      "A Virtual Reality Book Reader with a mission of sparking reading interest for younger individuals.",
    tags: [
      {
        name: "Lua",
        color: "blue-text-gradient",
      },
      {
        name: "Project Gutenberg | Gutendex API",
        color: "green-text-gradient",
      },
      {
        name: "Oculus Quest",
        color: "pink-text-gradient",
      },
    ],
    image: vreader,
    source_code_link: "https://github.com/TeachMeTW/VReader",
  },
  {
    name: "WorldView Wanderer",
    description:
      "Destination Viewer with local cuisine and music.",
    tags: [
      {
        name: "Python | Pygame",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
    ],
    image: wvw,
    source_code_link: "https://github.com/TeachMeTW/WorldView-Wanderer",
  },
  {
    name: "DLS Repo",
    description:
      "Holds DLS meetings and info",
    tags: [
    ],
    image: dls,
    source_code_link: "https://github.com/DVC-DeepLearningSociety",
  },

];

const clubs = [
  {
    title: "High School Student - Industrial and Manufacturing Engineering",
    company_name: "Clark Magnet High School",
    icon: clark,
    iconBg: "#FFFFFF",
    date: "August 2016 - June 2020",
    points: [
      "Focused on mainly manufacturing and robotics: Team696.",
      "Worked with HAAS CNC Machines including Routers, Lathes, Mills.",
      "Utilzed machinery such as bandsaws, TIG Welders, Laser Cutters, and programmed in G-Code."
    ],
  },
  {
    title: "Undergrad - Aerospace Engineering",
    company_name: "Pasadena City College",
    icon: pcc,
    iconBg: "#E6DEDD",
    date: "August 2020 - June 2022",
    points: [
      "Original Major, wanted to work with planes and rocketry systems.",
      "Located near JPL, toured the facility and studied in a class under Erick Sturm -- Cassini Saturn Space Probe Mission Planner.",
      "Decided to switch majors for flexibility and to encompass all of my interests."
    ],
  },
  {
    title: "Undergrad - Computer Engineering",
    company_name: "Diablo Valley College",
    icon: dvc,
    iconBg: "#E6DEDD",
    date: "August 2022 - May 2023",
    points: [
      "Continued my undergraduate studies at DVC due to a sudden relocation.",
      "Got Involved in many student associations revolving my field, specifically Deep Learning Society (DLS).",
      "Completed most required classes after switching majors."
    ],
  },
  {
    title: "Bachelors and Masters - Computer Engineering",
    company_name: "California Polytechnic State San Luis Obispo",
    icon: calpoly,
    iconBg: "#E6DEDD",
    date: "August 2023 - June 2026",
    points: [
      "Continue studying Computer Engineering at CalPoly SLO through the 'Learn by Doing' philosophy.",
      "Looking to double major in Aerospace/Astro and complete masters in CS."
    ],
  },

];



const involv = [
  {
    name: "Deep Learning Society (DLS) - Vice President",
    description:
      "Machine Learning focued organization with weekly lectures and workshops based on different algorithms and use cases.",

    tags: [

    ],
    image: dls,

  },
  {
    name: "Project Bracket - Project Lead",
    description:
      "Multiskill club that focused on creating projects throughout the semester surrounding different fields like Web Dev, Game Dev, or Machine Learning.",
    tags: [

    ],
    image: pb,

  },
  {
    name: "Code for Your Future - Co President",
    description:
      "A club focused on resume building, interview preparation, and opportunity sharing to help fellow students secure internships.",
    tags: [

    ],
    image: cycf,
   
  },
  {
    name: "Code the Change  - Project Lead",
    description:
      "A club focused on assisting Non-Profits through website and service creation.",
    tags: [

    ],
    image: ctc,
  
  },
  {
    name: "MESA",
    description:
      "Academic Enrichment Organization of underrepresented students majoring in STEM.",
    tags: [

    ],
    image: mesa,
 
  },
  {
    name: "DLSLO - President",
    description:
      "Upcoming DLS branch at Cal Poly SLO.",

    tags: [

    ],
    image: dl,

  },

];


export { services, technologies, experiences, testimonials, projects, clubs, involv };
