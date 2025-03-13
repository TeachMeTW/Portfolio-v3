import {
  dl,
  pb,
  py,
  cpp,
  anl,
  cnn,
  sc24,
  sc24g,
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
  darcpdf,
  DARC,
  omni,
  omnipdf,
  cybercity,
  cyberdoc,
  whointed,
  portfolio,
  lau,
  neet,
  cpss,
  csai,
  slocc,
  hackfor,
  lsst,
  dlsgroup,
  ctcg,
  act,
  pbg,
  mesag,
  cpssg,
  csaig,
  sloccg,
  cfyfg,
  h4ig,
  lahacks,
  lahacksl,
  calhacks_ai,
  calhacks_ail,
  treehacks,
  treehacksl,
  makeuc,
  makeucl,
  tigerhacks,
  tigerhacksl,
  mcvr,
  mcvrl,
  nasal,
  nasa,
  cla,
  calhacks10,
  calhacksp,
  cosam,
  clas,
  javap,
  fs,
  ee215,
  ee315,
  ieee215,
  ieeesc,
  basys3,
  cpe133,
  ieee315,
  vca,
  basys3clock,
  basys3man,
  arc,
  lanl,
  lanlposter,
  lanllogo,
  nasafinal,
  nrellogo,
  nrel,
  micrologo,
  micro,
  prog3,
  prog2,
} from "../assets";

export const navLinks = [
  {
    id: "side",
    title: "Switch Worldlines!",
    path: "https://side.robinttw.com",
  },
  {
    id: "about",
    title: "Home",
    path: "/",
  },
  {
    id: "work",
    title: "Work",
    path: "/#work",
  },
  {
    id: "edu",
    title: "Education",
    path: "/#edu",
  },
  {
    id: "extra",
    title: "Extracurriculars",
    path: "/#extra",
  },
  {
    id: "next",
    title: "WIP",
    path: "/#next",
  },
];

const services = [];

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
    proj: cybercity,
    link: cyberdoc,
    date: "June 2022 - August 2022",
    points: [
      "Developed a standalone application that geolocated and simulated critical infrastructures using cytoscape and deck.gl",
      "Implemented data scraping with beautifulsoup and PostgreSQL storage for infrastructure location data",
      "Co-designed Unity 3D simulation visualizing infrastructure connections and vulnerabilities",
    ],
  },
  {
    title: "Information Technology and Cyber Intern",
    company_name: "Lawrence Berkeley National Laboratory",
    icon: berk,
    iconBg: "#E6DEDD",
    proj: omni,
    link: omnipdf,
    date: "June 2023 - August 2023",
    points: [
      "Conducted file analysis, malware decomposition, network traffic analysis, and host forensics",
      "Updated 5000+ out-of-compliance systems using ServiceNow and Crowdstrike across 22 laboratory departments",
      "Researched and presented cybersecurity vulnerabilities to the Department of Energy as part of the OMNI Program",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Lawrence Livermore National Laboratory",
    icon: llnl,
    iconBg: "#E6DEDD",
    proj: DARC,
    link: darcpdf,
    date: "June 2023 - August 2023",
    points: [
      "Built full-stack web application using Python, Angular, FastAPI, MongoDB, Docker, and Gitlab CI",
      "Contributed to Data Archive codebase through new features, RESTful API endpoints, and test creation",
      "Assisted in database migration from MarkLogic to MongoDB/ElasticSearch, improving search performance",
    ],
  },
  {
    title: "Data & Analytics Intern",
    company_name: "NASA",
    icon: nasa,
    proj: nasal,
    link: nasafinal,
    iconBg: "#E6DEDD",
    date: "January 2024 - May 2024",
    points: [
      "Designed analytics tools to enhance data-driven decision making capabilities within AETC",
      "Streamlined data pipelines for facilities and workforce management",
      "Implemented secure data access protocols while optimizing portfolio management workflows",
    ],
  },
  {
    title: "High Performance Computing Intern",
    company_name: "Los Alamos National Laboratory",
    icon: lanllogo,
    proj: lanlposter,
    link: lanl,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Configured 10-node HPC Linux cluster using Ansible, Libvirt, AWS S3, and Cloud-Init",
      "Optimized network functionality by deploying containers on Arista and Mellanox switches via Docker/Podman",
      "Presented research findings at Supercomputing 2024 conference",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "National Renewable Energy Laboratory",
    icon: nrellogo,
    proj: nrel,
    link: "https://github.com/e-mission",
    iconBg: "#E6DEDD",
    date: "September 2024 - June 2025",
    points: [
      "Developed open-source software for OpenPATH platform using Python and Dash Plotly",
      "Enhanced data collection and analysis pipelines for tracking travel modes and carbon footprint",
    ],
  },
  {
    title: "Technical Program Manager Intern",
    company_name: "Microsoft",
    icon: micrologo,
    proj: micro,
    link: "",
    iconBg: "#E6DEDD",
    date: "June 2025 - September 2025",
    points: [
      "Led cross-functional implementation of complex product features from planning to delivery",
      "Managed specifications development and monitored operations to improve customer experience",
      "Applied data-driven approach to communicate technical challenges and customer needs across teams",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Cisco Neural Networks",
    category: "CS",
    description:
      "Developed a platform for Cisco engineers to easily train autoencoders without Python expertise. The application allows engineers to load and modify data, train neural network models, visualize results, and save their work efficiently. Built with Streamlit for the frontend UI and MongoDB for the backend database, with CI/CD pipeline for automatic deployment.",
    tags: [
      {
        name: "Python",
        color: "#3776AB",
      },
      {
        name: "Machine Learning",
        color: "#FF6B6B",
      },
      {
        name: "MongoDB",
        color: "#4DB33D",
      },
      {
        name: "Streamlit",
        color: "#FF4B4B",
      },
      {
        name: "Docker",
        color: "#2496ED",
      },
    ],
    image: cnn,
    source_code_link: "https://cisconeural.net",
  },
  {
    name: "Chat Program",
    category: "CPE",
    description:
      "Developed a TCP-based chat application with client-server architecture. Implemented a custom protocol with packet headers, message routing, and multiple communication modes (direct messaging, multicast, broadcast). The server acts as a message router between clients, maintaining a dynamic handle table and supporting concurrent connections through poll().",
    tags: [
      {
        name: "C",
        color: "#FF4500",
      },
      {
        name: "Networking",
        color: "#FF6A00",
      },
      {
        name: "TCP/IP",
        color: "#FF8C00",
      },
    ],
    image: prog2,
    source_code_link: "https://github.com/TeachMeTW/Chat-TCP",
  },
  {
    name: "Rcopy and Server",
    category: "CPE",
    description:
      "Developed a reliable file transfer system with sliding window flow control, selective repeat for retransmission, checksums for error detection, and sequence numbers for packet ordering. The client-server architecture handles packet loss, corruption, and reordering with a custom protocol design.",
    tags: [
      {
        name: "C",
        color: "#FF4500",
      },
      {
        name: "Networking",
        color: "#FF6A00",
      },
      {
        name: "Protocol Design",
        color: "#FF8C00",
      },
    ],
    image: prog3, 
    source_code_link: "https://github.com/TeachMeTW/RCopy-Server",
  },
  {
    name: "Neethub",
    category: "CS",
    description:
      "Developed a video streaming platform with Typescript, MongoDB, Prisma.",

    tags: [
      {
        name: "Typescript",
        color: "#FF4500",
      },
      {
        name: "Next.JS",
        color: "#FF6A00",
      },
      {
        name: "MongoDB",
        color: "#FF8C00",
      },
    ],
    image: neet,
    source_code_link: "https://neethub.vercel.app/",
  },
  {
    name: "SQL From Scratch",
    category: "CS",
    description:
      "Developed a program that can read and write data into txt files in SQL format using SQL commands. Features standard SQL commands; select, create, update, insert, drop. Integrated automatic batch line processor as well as manual command input.",

    tags: [
      {
        name: "C++",
        color: "#FF4500",
      },
      {
        name: "Git",
        color: "#FF6A00",
      },
      {
        name: "Google Test",
        color: "#FF8C00",
      },
    ],
    image: sql,
    source_code_link: "https://github.com/TeachMeTW/SQL-from-Scratch",
  },
  {
    name: "Portfolio Sites",
    category: "CS",
    description:
      "Developed with React, Tailwind, and Vite. See side.robinttw.com or league.robinttw.com (WIP) for more.",

    tags: [
      {
        name: "Vite React Javascript",
        color: "#FF4500",
      },
      {
        name: "HTML CSS TAILWIND",
        color: "#FF6A00",
      },
    ],
    image: portfolio,
    source_code_link: "https://side.robinttw.com",
  },
  {
    name: "Virtual World",
    category: "CS",
    description:
      "Developed a Java OOP project for CSC203. Implemented A* pathfinding algorithm.",

    tags: [
      {
        name: "Java",
        color: "#FF4500",
      },
      {
        name: "TTD",
        color: "#FF6A00",
      },
    ],
    image: javap,
    source_code_link: "https://github.com/TeachMeTW/Dio-Project",
  },
  {
    name: "Frequency Controlled Locking System",
    category: "EE",
    description:
      "Developed a frequency-triggered lock system using an Arduino Uno R3, designed to unlock only when a specific acoustic frequency is detected. It combines a microphone, amplifier, comparator, and a solenoid actuator.",
    tags: [
      {
        name: "Arduino R3",
        color: "#FF4500",
      },
      {
        name: "Signal Processing",
        color: "#FF6A00",
      },
      {
        name: "Frequency Analysis",
        color: "#FF8C00",
      },
    ],
    image: act,
    source_code_link: ee315,
  },
  {
    name: "FSK IR Communication System",
    category: "EE",
    description:
      "Developed a Frequency-Shift Keying (FSK) Infrared (IR) Communication System.",
    tags: [
      {
        name: "Hardware Design",
        color: "#FF4500",
      },
      {
        name: "Signal Processing",
        color: "#FF6A00",
      },
      {
        name: "Frequency Analysis",
        color: "#FF8C00",
      },
    ],
    image: fs,
    source_code_link: ee215,
  },
  {
    name: "Microcontroller Unit from Scratch",
    category: "CPE",
    description:
      "This project showcases the creation of a custom microcontroller unit (MCU) from scratch, utilizing SystemVerilog for hardware description and RISC-V as the architecture. ",
    tags: [
      {
        name: "Microcontrollers",
        color: "#FF4500",
      },
      {
        name: "SystemVerilog",
        color: "#FF6A00",
      },
      {
        name: "RISC-V",
        color: "#FF8C00",
      },
    ],
    image: arc,
    source_code_link:
      "https://drive.google.com/drive/folders/1ViZY9HVluKxznHpp8NVJi9oHcXKc6xMM?usp=drive_link",
  },
  {
    name: "Basys3 Clock",
    category: "CPE",
    description:
      "Developed a digital clock program in RISC-V assembly language for a self-designed microcontroller unit.  ",
    tags: [],
    image: basys3man,
    source_code_link: basys3clock,
  },
  {
    name: "Basys3 Morse Translator",
    category: "CPE",
    description:
      "Built a Morse code translator with Arduino Uno R3 featuring translation mode (button input to alphanumeric display) and learning mode (practice inputting Morse code with LED feedback).",
    tags: [],
    image: basys3,
    source_code_link: cpe133,
  },

  {
    name: "OnlyBikes",
    category: "CS",
    description:
      "A Bike Rental Platform that utilizes Tensorflow Machine Learning and MapQuest API to detect bikes, returns, and rentals.",
    tags: [
      {
        name: "Python | Django",
        color: "#FF4500",
      },
      {
        name: "Tensorflow | OpenCV",
        color: "#FF6A00",
      },
      {
        name: "MapQuest | Twillio | Auth0",
        color: "#FF8C00",
      },
    ],
    image: onlybikes,
    source_code_link: "https://github.com/TeachMeTW/TigerHacks2022",
  },
  {
    name: "VReader",
    category: "CS",
    description:
      "Developed a VR book reader using Lua and the Oculus Quest SDK.",
    tags: [
      {
        name: "Lua",
        color: "#FF4500",
      },
      {
        name: "Project Gutenberg | Gutendex API",
        color: "#FF6A00",
      },
      {
        name: "Oculus Quest",
        color: "#FF8C00",
      },
    ],
    image: vreader,
    source_code_link: "https://github.com/TeachMeTW/VReader",
  },
];

// I know this is not the right name; too lazy to refactor/change right now
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
      "Utilzed machinery such as bandsaws, TIG Welders, Laser Cutters, and programmed in G-Code.",
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
      "Decided to switch majors for flexibility and to encompass all of my interests.",
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
      "Completed most required classes after switching majors.",
    ],
  },
  {
    title: "Bachelors - Computer Engineering w/ Minor in Astronomy",
    company_name: "California Polytechnic State San Luis Obispo",
    icon: calpoly,
    iconBg: "#E6DEDD",
    date: "August 2023 - December 2025",
    points: [
      "Continue studying Computer Engineering at CalPoly SLO through the 'Learn by Doing' philosophy.",
      "Pursuing a minor in Astronomy/Astrophysics.",
    ],
  },
];

const involv = [
  {
    name: "Hack4Impact",
    position: "",
    activities:
      "A student-run organization that empowers engineers, designers, activists, and humanitarians to create lasting social change by developing projects for local nonprofits.",
    tags: [],
    current: true,
    image: hackfor,
    galleryImages: [h4ig], // Placeholder for gallery images
    source_code_link: "https://calpoly.hack4impact.org/",
  },
  {
    name: "SLO Climate Coalition",
    position: "Fellow/Platform Specialist",
    activities:
      "SLO Climate Coalition is a local non-profit organization dedicated to champion high impact regional climate solutions. Its members include environmental advocates, climate and energy professionals, and San Luis Obispo City liaisons.",
    tags: [],
    current: true,
    image: slocc,
    galleryImages: [sloccg], // Placeholder for gallery images
    source_code_link:
      "https://sites.google.com/sloclimatecoalition.org/slocc-college-corps/home?authuser=0",
  },
  {
    name: "CSAI",
    position: "Member",
    activities:
      "Cal Poly's premier computer science and artificial intelligence club. We are a group of students who are passionate about learning and applying AI to solve real-world problems. Host workshops, projects, and competitions to help students learn about AI and its applications",
    tags: [],
    current: true,
    image: csai,
    galleryImages: [csaig],
    source_code_link: "https://csaicalpoly.com/",
  },

  {
    name: "Deep Learning Society (DLS)",
    position: "Vice President",
    activities:
      "Machine Learning focused organization with weekly lectures and workshops based on different algorithms and use cases.",
    tags: [],
    current: false,
    image: dl,
    galleryImages: [dlsgroup], // Placeholder for gallery images
    source_code_link: "https://github.com/DVC-DeepLearningSociety",
  },
  {
    name: "Project Bracket",
    position: "Project Lead",
    activities:
      "Multiskill club that focused on creating projects throughout the semester surrounding different fields like Web Dev, Game Dev, or Machine Learning.",
    tags: [],
    current: false,
    image: pb,
    galleryImages: [pbg], // Placeholder for gallery images
    source_code_link: "https://projectbracket.webflow.io/",
  },
  {
    name: "Code for Your Future",
    position: "Co-President",
    activities:
      "A club focused on resume building, interview preparation, and opportunity sharing to help fellow students secure internships.",
    tags: [],
    current: false,
    image: cycf,
    galleryImages: [cfyfg], // Placeholder for gallery images
    source_code_link: "https://www.instagram.com/codeforyourfuturedvc/?hl=en",
  },
  {
    name: "MESA",
    position: "", // No specific position mentioned for this one
    activities:
      "At MESA, we were all about helping each other out and leveling the playing field for underrepresented STEM students. I spent my time tutoring my peers, sharing knowledge, and getting my hands dirty organizing cool events like Leetcode competitions and hackathons. It was all about creating a space where we could all learn, grow, and have a bit of fun along the way.",
    tags: [],
    current: false,
    image: mesa,
    galleryImages: [mesag], // Placeholder for gallery images
    source_code_link: "https://www.dvc.edu/current/learning-community/mesa/",
  },
  {
    name: "MakeUC",
    position: "", // No specific position mentioned for this one
    activities:
      "MakeUC was the first hackathon I ever attended. I learned a heap about what it means to work in a team and how to navigate through the chaos of coding under pressure.",
    tags: [],
    current: false,
    image: makeucl,
    galleryImages: [makeuc], // Placeholder for gallery images
    source_code_link: "",
  },
  {
    name: "TigerHacks",
    position: "", // No specific position mentioned for this one
    activities:
      "TigerHacks was hackathon round two for me. This time, armed with the lessons from my first, we actually got a working prototype up and running! It was a bike recognition and rental system that we were all pretty chuffed with. Building something that worked from scratch in such a short time was a real win for us.",
    tags: [],
    current: false,
    image: tigerhacksl,
    galleryImages: [tigerhacks], // Placeholder for gallery images
    source_code_link: "",
  },
  {
    name: "TreeHacks",
    position: "", // No specific position mentioned for this one
    activities:
      "At TreeHacks, I got to play around with AR and QR Projection. Being at Stanford, messing around with tech, and imagining all the crazy possibilities was just plain fun and super inspiring.",
    tags: [],
    current: false,
    image: treehacksl,
    galleryImages: [treehacks], // Placeholder for gallery images
    source_code_link: "",
  },
  {
    name: "MCVR Hackathon",
    position: "", // No specific position mentioned for this one
    activities:
      "MCVR Hackathon was where we turned virtual into reality. We created a VR game that turned bland PDFs into actual books you could flip through in a virtual space. ",
    tags: [],
    current: false,
    image: mcvrl,
    galleryImages: [mcvr], // Placeholder for gallery images
    source_code_link: "",
  },
  {
    name: "LAHacks",
    position: "", // No specific position mentioned for this one
    activities:
      "Delved into pygame and game development at UCLA's LAHacks. Although we did not achieve what we were hoping for, we learned a lot about the process of game development and the importance of planning.",
    tags: [],
    current: false,
    image: lahacksl,
    galleryImages: [lahacks], // Placeholder for gallery images
    source_code_link: "",
  },
  {
    name: "CalHacks AI",
    position: "", // No specific position mentioned for this one
    activities:
      "Experimented with LLMs, NLP, and AIs at UC Berkeley. We created an automatic lesson generator -- from images to text to video. It was a great experience to learn about the latest in AI and how to apply it to real-world problems.",
    tags: [],
    current: false,
    image: calhacks_ail,
    galleryImages: [calhacks_ai], // Placeholder for gallery images
    source_code_link: "",
  },
  {
    name: "CalHacks 10",
    position: "", // No specific position mentioned for this one
    activities:
      "Explored python based frameworks such as Taipy and Reflex to create a `dating` app for study groups called StudBud. StudBud was set to feature group and individual matching based on major, year, classes, and study group sizes.",
    tags: [],
    current: false,
    image: calhacks10,
    galleryImages: [calhacksp], // Placeholder for gallery images
    source_code_link: "",
  },
  {
    name: "Supercomputing 2025",
    position: "", // No specific position mentioned for this one
    activities:
      "Attended and presented on behalf of Los Alamos National Laboratory at Supercomputing 2025.",
    tags: [],
    current: false,
    image: sc24, // You'll need to import this image
    galleryImages: [sc24g], // You'll need to import this image
    source_code_link: "",
  },
  // {
  //   name: "RSAC 2025",
  //   position: "", // No specific position mentioned for this one
  //   activities:
  //     "Attended the RSA Conference 2025, one of the world's leading cybersecurity events. Networked with industry professionals and gained insights into the latest trends, technologies, and challenges in the cybersecurity landscape.",
  //   tags: [],
  //   current: false,
  //   image: "COMING SOON", 
  //   galleryImages: ["COMING SOON"],
  //   source_code_link: "",
  // },

];

const internshipData = [
  {
    title: "LBNL",
    description: "Presented my summer project on Cybersecurity to the DOE in Washington, DC.",
    logoFile: "berkeley-logo.png",
    imageFolder: "internship4",
  },
  {
    title: "NASA",
    description: "Got to go to GRC (Glenn Research Center) and AMES.",
    logoFile: "nasa-logo.png", // Name of the logo file in the folder
    imageFolder: "internship1", // Folder name within 'src/assets/'
  },
  {
    title: "NCUR 2024",
    description: "Presented my student research on Human-AI Interaction in the Hospitality Field. Located in Long Beach, CA.",
    logoFile: "ncur-logo.png",
    imageFolder: "internship3",
  },
  {
    title: "Los Alamos",
    description: "Limited photography from this lab (considering its NNSA).",
    logoFile: "lanl-logo.jpg",
    imageFolder: "internship2",
  },
  {
    title: "SC 2024",
    description: "Presented my HPC work from LANL at Supercomputing 2024 in Atlanta, GA.",
    logoFile: "sc-logo.png",
    imageFolder: "internship5",
  },
  // Add more internships as needed
];
export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  clubs,
  involv,
  internshipData,
};
