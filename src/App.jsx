import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Contact,Cursor, Experience, Feedbacks, Hero, Navbar, Tech, Works, OtherExperience, Extra } from "./components";
import Personal from '/src/components/fun/personal.jsx'
import Aki from '/src/components/fun/aki.jsx'
import './App.css';

import './components/ProjectCard.css'; // Updated CSS file name

const HardcodedProjectCard = () => {
  const title = 'PLA-SSADIN';
  const description = 'Bro took a WHOLE week to print. Don\'t have the time to paint him right now.';
  const imgUrl = './public/kass.jpg';
  const tags = [

  ];
  const githubUrl = 'https://www.op.gg/summoners/na/EyelessGlasses-NA1';

  return (
    <div className="custom-center-container">
      <div className="project-card">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="c-proj-imgbx animate__animated animate__fadeIn">
            <img src={imgUrl} alt={title} />
            <div className="c-proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
              <div className="tags">
                {tags.map((tag, index) => (
                  <span key={index} style={{ color: tag.color }}>
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">Yes I play League of Legends</h1>
                <p id="textblock-content">
                *used to at least* -- ok maybe a little bit<br/><br/>
                You are stuck at home during the start of the COVID-19 pandemic, with nothing else to do. With social interactions limited and a longing for some sense of normalcy, you turn to playing League of Legends.<br/><br/>
                As days turns into months and then years, you think nothing much of it -- until it has taken over your life.<br/><br/>
                You begin to think, "what is all of this for?", as you mindlessly try to fill the void with more ranked games (hah get it?? Kassadin??).<br/><br/>
                The only one you played with is long gone and you join a team but your not really that good, so what is the point of it all?<br/><br/>
                Anyway, I still think the League of Legends world and characters is pretty cool, so take a look at my 3D printed statue of Kassadin from my Bambu X1C!
                </p>
            </div>
            
        </div>
    );
}

const HardcodedProjectCard2 = () => {
  const title = 'Divergence Meter';
  const description = 'I\'m in the wrong world line.';
  const imgUrl = './public/divergence.gif';
  const tags = [

  ];
  const githubUrl = 'https://www.op.gg/summoners/na/EyelessGlasses-NA1';

  return (
    <div className="custom-center-container-2">
      <div className="project-card">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="c-proj-imgbx animate__animated animate__fadeIn">
            <img src={imgUrl} alt={title} />
            <div className="c-proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
              <div className="tags">
                {tags.map((tag, index) => (
                  <span key={index} style={{ color: tag.color }}>
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

function TextBlock2() {
    return (
        <div id="textblock-2">
            <div id="textblock-container">
                <h1 id="textblock-title">Yes I like Steins;Gate</h1>
                <p id="textblock-content">
                I literally am Okabe Rintarou<br/><br/>


                WIP PAGE
                </p>
            </div>
            
        </div>
    );
}
















const CombinedComponent = () => {
  return (
    <div className="combined-container" style={{ display: 'flex' }}>
      <div className="image-container" style={{ flex: 1 }}>
        <HardcodedProjectCard />
      </div>
      <div className="text-container" style={{ flex: 1 }}>
        <TextBlock />
      </div>
    </div>
  );
};

const CombinedComponent2 = () => {
  return (
    <div className="combined-container" style={{ display: 'flex' }}>
      <div className="image-container" style={{ flex: 1 }}>
        <HardcodedProjectCard2 />
      </div>
      <div className="text-container" style={{ flex: 1 }}>
        <TextBlock2 />
      </div>
    </div>
  );
};



const MainPage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Cursor />
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <OtherExperience />
      <Extra />
      <div className='relative z-0'>
      </div>
    </div>
  );
};

const Sub = () => {
  return (
    <div>
    <Personal/>
    <CombinedComponent/>
    <Aki/>
    <CombinedComponent2/>
    </div>
  );
};





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/personal" element={<Sub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;