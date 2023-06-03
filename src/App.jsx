import { BrowserRouter } from "react-router-dom";

import { About, Contact,Cursor, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, OtherExperience, Extra } from "./components";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
