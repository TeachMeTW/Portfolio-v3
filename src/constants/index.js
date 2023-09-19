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
    proj: cybercity,
    link: cyberdoc,
    date: "June 2022 - August 2022",
    points: [
      "Developed a standalone application that geolocated and simulated critical infrastructures.",
      "Utilized cytoscape, deck.gl, heroku, and python in order to display a 3D arc/heat render of dataset.",
      "Implemented data scraping location data using beautifulsoup as well as manual user input stored in PostgreSQL.",
      "Codesigned unity 3D simulation of infrastructure connections."
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
      "Collaborated on a team of 3 fellow interns under the OMNI Program to research cybersecurity vulnerabilities presentable to the Department of Energy."
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
      "Participated in Agile methodology consisting of weekly Scrum and Sprint meetings to ensure streamlined development processes, ticket assignment, and deployment process."
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Cal Poly COSAM",
    icon: calpoly,
    proj: lsst,
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
    points: [
      "Conducting in-depth research on galaxies and cosmology utilizing datasets from the LSST (Legacy Survey of Space and Time) provided by the Rubin Observatory.",
      "Leveraging Python for advanced data analysis, enhancing the precision of findings.",
      "Implementing machine learning algorithms to identify patterns and draw meaningful insights from vast astronomic data",
      "Utilizing state-of-the-art visualization tools to effectively represent complex celestial phenomena.",
      "Collaborating with a team of astronomers and scientists to analyze and interpret results, driving forward the understanding of our universe.",
      "Staying updated with the latest in cosmological research, ensuring the application of cutting-edge methodologies in all projects."
    
    ],
  },      
];

const testimonials = [

];

const projects = [
  {
    name: "Neethub",
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
    name: "Who Inted Me",
    description:
      "A fullstack app for League of Legends enthusiasts. Using machine learning and data analysis, we pinpoint who jeopardized your ranked games. Base your arguments on solid FACTS and LOGIC.",

    tags: [
      {
        name: "Python Flask",
        color: "#FF4500",
      },
      {
        name: "React Javascript",
        color: "#FF6A00",
      },
      {
        name: "RESTFUL | CRUD | SQLite",
        color: "#FF8C00",
      },
    ],
    image: whointed,
    source_code_link: "https://github.com/TeachMeTW/WhoIntedMe",
  },
  {
    name: "Kon Academy",
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
    description:
      "Destination Viewer with local cuisine and music.",
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
    name: "DLS Repo",
    description:
      "Holds DLS meetings and info",
    tags: [
    ],
    image: dls,
    source_code_link: "https://github.com/DVC-DeepLearningSociety",
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
    title: "Bachelors and Masters - Computer Engineering w/ Minor in Astronomy",
    company_name: "California Polytechnic State San Luis Obispo",
    icon: calpoly,
    iconBg: "#E6DEDD",
    date: "August 2023 - June 2026",
    points: [
      "Continue studying Computer Engineering at CalPoly SLO through the 'Learn by Doing' philosophy.",
      "Pursuing a minor in Astronomy/Astrophysics."
    ],
  },

];



const involv = [
  {
    name: "Hack4Impact",
    description:
      "A student-run organization that empowers engineers, designers, activists, and humanitarians to create lasting social change by developing projects for local nonprofits.",

    tags: [

    ],
    current: true,
    image: hackfor,
    source_code_link: "https://calpoly.hack4impact.org/",

  },
  {
    name: "SLO Climate Coalition",
    description:
      "SLO Climate Coalition is a local non-profit organization dedicated to champion high impact regional climate solutions. Its members include environmental advocates, climate and energy professionals, and San Luis Obispo City liaisons.",

    tags: [

    ],
    current: true,
    image: slocc,
    source_code_link: "https://sites.google.com/sloclimatecoalition.org/slocc-college-corps/home?authuser=0",

  },
  {
    name: "CSAI",
    description:
      "Cal Poly's premier computer science and artificial intelligence club. We are a group of students who are passionate about learning and applying AI to solve real-world problems. Host workshops, projects, and competitions to help students learn about AI and its applications",

    tags: [

    ],
    current: true,
    image: csai,
    source_code_link: "https://csaicalpoly.com/",

  },
  {
    name: "Cal Poly Space Systems",
    description:
      "Cal Poly Space Systems (CPSS) is a dynamic club that offers hands-on training in all areas of rocketry design including propulsion, structures, controls, and electronics.",

    tags: [

    ],
    current: true,
    image: cpss,
    source_code_link: "https://www.calpolyspacesystems.com/",

  },
  {
    name: "Deep Learning Society (DLS) - Vice President",
    description:
      "Machine Learning focued organization with weekly lectures and workshops based on different algorithms and use cases.",

    tags: [

    ],
    current: false,
    image: dl,
    source_code_link: "https://github.com/DVC-DeepLearningSociety",

  },
  {
    name: "Project Bracket - Project Lead",
    description:
      "Multiskill club that focused on creating projects throughout the semester surrounding different fields like Web Dev, Game Dev, or Machine Learning.",
    tags: [

    ],
    current: false,
    image: pb,
    source_code_link: "https://projectbracket.webflow.io/",

  },
  {
    name: "Code for Your Future - Co President",
    description:
      "A club focused on resume building, interview preparation, and opportunity sharing to help fellow students secure internships.",
    tags: [

    ],
    current: false,
    image: cycf,
    source_code_link: "https://www.instagram.com/codeforyourfuturedvc/?hl=en",
   
  },
  {
    name: "Code the Change  - Project Lead",
    description:
      "A club focused on assisting Non-Profits through website and service creation.",
    tags: [

    ],
    current: false,
    image: ctc,
    source_code_link: "https://www.instagram.com/codethechange_dvc/?hl=en",
  
  },
  {
    name: "MESA",
    description:
      "Academic Enrichment Organization of underrepresented students majoring in STEM.",
    tags: [

    ],
    current: false,
    image: mesa,
    source_code_link: "https://www.dvc.edu/current/learning-community/mesa/",
 
  },

];


export { services, technologies, experiences, testimonials, projects, clubs, involv };
