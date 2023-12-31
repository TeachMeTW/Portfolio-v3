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
  ieee215,
  ieeesc,
  basys3,
  cpe133,
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
      "Developed a standalone application that geolocated and simulated critical infrastructures.",
      "Utilized cytoscape, deck.gl, heroku, and python in order to display a 3D arc/heat render of dataset.",
      "Implemented data scraping location data using beautifulsoup as well as manual user input stored in PostgreSQL.",
      "Codesigned unity 3D simulation of infrastructure connections.",
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
      "Participated in file analysis, file carving, malware decomposition, network traffic analysis, and host forensics.",
      "Assisted the IT team via ServiceNow and Crowdstrike in updating 5000 outdated and out-of-compliance systems in the laboratory’s network.",
      "Supported the HelpDesk and Endpoint Management Team with troubleshooting, on-boarding, and maintenance tickets throughout all 22 laboratory departments.",
      "Collaborated on a team of 3 fellow interns under the OMNI Program to research cybersecurity vulnerabilities presentable to the Department of Energy.",
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
      "Contributed to the laboratory’s Data Archive codebase through the development of new features, RESTful API endpoints, unit and integration test creation, bug fixes, and code reviews on a team of 7.",
      "Designed, implemented, and deployed a full stack web application utilizing Python, Angular, FastAPI, MongoDB, Docker, and Gitlab CI.",
      "Assisted in the migration from MarkLogic to MongoDB and ElasticSearch database stack, improving search speeds.",
      "Participated in Agile methodology consisting of weekly Scrum and Sprint meetings to ensure streamlined development processes, ticket assignment, and deployment process.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Cal Poly COSAM",
    icon: calpoly,
    proj: lsst,
    link: cosam,
    iconBg: "#E6DEDD",
    date: "September 2023 - December 2023",
    points: [
      "Conducting in-depth research on galaxies and cosmology utilizing datasets from the LSST (Legacy Survey of Space and Time) provided by the Rubin Observatory.",
      "Leveraging Python for advanced data analysis, enhancing the precision of findings.",
      "Utilizing state-of-the-art visualization tools to effectively represent complex celestial phenomena.",
      "Collaborating with a team of astronomers and scientists to analyze and interpret results, driving forward the understanding of our universe.",
      "Staying updated with the latest in cosmological research, ensuring the application of cutting-edge methodologies in all projects.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Cal Poly CLA",
    icon: calpoly,
    proj: cla,
    link: clas,
    iconBg: "#E6DEDD",
    date: "October 2023 - Present",
    points: [
      "Supporting the research team in performing keyword searches and web scraping to aggregate a substantial image dataset, facilitating the identification of robotic functional areas in the hospitality industry. ",
      "Aiding in training and validating machine-learning models by utilizing Python and various open-source libraries, ensuring precise identification and analysis of functional areas where robots can collaborate in the hospitality sector. ",
      "Working alongside industry-leading annotators like Scale AI, assisting in the development of labeling frameworks and ensuring accurate data labeling for subsequent analysis. ",
      "Preparing to author a research paper for submission to the 2024 National Conference on Undergraduate Research (NCUR), with an invaluable opportunity to present findings, network with professionals, and enhance research and professional skills.",
    ],
  },
  {
    title: "Incoming Data & Analytics Intern",
    company_name: "NASA",
    icon: nasa,
    proj: nasal,
    iconBg: "#E6DEDD",
    date: "January 2024 - May 2024",
    points: [
      "Empower decision making by leveraging data assets within AETC and designing tools to enhance capabilities for business analytics and data driven solutions.",
      "Steamline data and communication pipelines for AETC's facilities and workforce.",
      "Optimitze workflow for portfolio management.",
      "Improve evaluation and test data access within the organization.",
      "Ensure data security and facilitate appropriate data access for designated personnel both within and outside of organization.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Neethub",
    category: "CS",
    description:
      "Neethub offers fans of the popular multiplayer online battle arena game, League of Legends, an immersive video experience inspired by platforms like Netflix and YouTube. With its sleek design and user-friendly interface, Neethub stands out as the go-to destination for players and enthusiasts looking for game highlights, tutorials, strategies, and more.",

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
    name: "Portfolio V3",
    category: "CS",
    description:
      "This portfolio showcases the work, skills, and experiences of me. Designed with a modern user interface, it provides a comprehensive view of projects, tech stack, and other professional engagements. ",

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
    source_code_link: "https://robinttw.com",
  },
  {
    name: "Virtual World",
    category: "CS",
    description:
      "Developed an innovative Java OOP project for CSC203, featuring the integration of the iconic character Dio from 'JoJo's Bizarre Adventure' into a virtual world. Implemented advanced features like time-stopping ability, A* pathfinding, and interactive gameplay with 'Among Us' crewmates, demonstrating strong proficiency in Java and object-oriented design principles.",

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
    name: "Kon Academy",
    category: "CS",
    description:
      "Interactive video lesson generator: Upload PDFs, ask questions, and receive accurate video answers using streamlit, MindsDB, LangChain, and Pinecone. ",

    tags: [
      {
        name: "Python",
        color: "#FF4500",
      },
      {
        name: "Langchain",
        color: "#FF6A00",
      },
      {
        name: "MindsDB",
        color: "#FF8C00",
      },
    ],
    image: lau,
    source_code_link: "https://devpost.com/software/kon-academy",
  },

  {
    name: "ARID",
    category: "CS",
    description:
      "Experimental AR Projection using ARUCO codes with a web interface.",
    tags: [
      {
        name: "Python",
        color: "#FF4500",
      },
      {
        name: "OpenCV",
        color: "#FF6A00",
      },
      {
        name: "Django",
        color: "#FF8C00",
      },
    ],
    image: arid,
    source_code_link: "https://github.com/TeachMeTW/ARID",
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
      "A Virtual Reality Book Reader with a mission of sparking reading interest for younger individuals.",
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
  {
    name: "WorldView Wanderer",
    category: "CS",
    description: "Destination Viewer with local cuisine and music.",
    tags: [
      {
        name: "Python | Pygame",
        color: "#FF4500",
      },
      {
        name: "Tkinter",
        color: "#FF6A00",
      },
    ],
    image: wvw,
    source_code_link: "https://github.com/TeachMeTW/WorldView-Wanderer",
  },
  {
    name: "Simple FSK IR Communication System",
    category: "EE",
    description:
      "As the culmination of our explorations in EE 245: Electrical and Electronic Circuits II Laboratory, this report details the design, implementation, and testing of a simple Frequency-Shift Keying (FSK) Infrared (IR) Communication System. This project, conducted over the final three weeks of the quarter, required the integration of a variety of electronic components and principles, culminating in a functional transmitter and receiver pair.",
    tags: [],
    image: fs,
    source_code_link: ee215,
  },
  {
    name: "IEEE Formatted Report",
    category: "EE",
    description:
      "This lab report, formatted as a conference paper, showcases my ability to conduct in-depth scientific research and present findings in a structured and professional manner. Tasked with an experiment assigned during class, I crafted a detailed and analytical paper, demonstrating both my technical expertise and writing proficiency. This report serves as a polished example of my work, suitable for sharing with future employers as evidence of my skills in research, analysis, and communication.",
    tags: [],
    image: ieeesc,
    source_code_link: ieee215,
  },
  {
    name: "Basys3 Morse Translator",
    category: "CPE",
    description:
      "This project features an innovative system designed to translate and teach Morse code using a hardware interface. It operates in two modes: translation and learning. In translation mode, users input Morse code via buttons, which is then converted into alphanumeric characters (A-E, 0-3) and displayed on a Seven Segment Display. The learning mode challenges users to input correct Morse code for randomly displayed characters, with correct answers indicated by an LED. This interactive system not only aids in learning Morse code but also demonstrates the application of binary accumulators and translation logic in a user-friendly interface.",
    tags: [],
    image: basys3,
    source_code_link: cpe133,
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
    title: "Bachelors and Masters - Computer Engineering w/ Minor in Astronomy",
    company_name: "California Polytechnic State San Luis Obispo",
    icon: calpoly,
    iconBg: "#E6DEDD",
    date: "August 2023 - June 2026",
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
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  clubs,
  involv,
};
