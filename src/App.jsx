import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Contact,Cursor, Experience, Feedbacks, Hero, Navbar, Tech, Works, OtherExperience, Extra } from "./components";
import Personal from '/src/components/fun/personal.jsx'
import Aki from '/src/components/fun/aki.jsx'

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
    <main>
      <Personal />
      <div className="w-full bg-[#1e1529]">
        <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300">
          <div className="flex items-center space-x-4">
            <div className="w-[1800px] h-[600px] border-2 border-neutral-300 p-1 -ml-10">
              <img src="kass.jpg" alt="Description" className="w-full h-full object-cover" />
            </div>
            <p className="self-center">
              This is my 3D printed Kassadin model. He was made with a Bambu X1C printer. Currently I am in the process of painting him. I also plan on making more models -- of my favorite games and characters; next on the line is Aatrox, my main from League of Legends. After that, I was thinking of machines from Horizon Zero Dawn/Forbidden West.
            </p>
          </div>
        </div>
      </div>
      <Aki />
      <div className="w-full bg-[#5d4a34]">
        <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300 text-center">
          <div className="w-[500px] h-[300px] border-2 border-neutral-300 p-1 mx-auto">
            <img src="divergence.gif" alt="Description" className="w-full h-full object-cover" />
          </div>
          <p className="self-center">
            My divergence meter, inspired by Steins;Gate its a nixie tube clock.
          </p>
        </div>
      </div>
    </main>
  );
};





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/personal" element={<Sub />
      } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;