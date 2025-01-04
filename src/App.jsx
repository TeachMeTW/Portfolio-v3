// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Cursor,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  OtherExperience,
  Extra,
  Internships,
} from "./components";
import Personal from "/src/components/fun/personal.jsx";
import Aki from "/src/components/fun/aki.jsx";

import Wrapper from "./components/Wrapper";
import PoliceTapeHero from "./components/PoliceTapeHero";
import "./App.css";                // We'll use .scaled-content here
import "./components/ProjectCard.css";

const MainPage = () => {
  return (
    <div className="relative z-0 bg-custom-background">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Internships />
      <Works />
      <OtherExperience />
      <Extra />
      <PoliceTapeHero/>
      <div className="relative z-0"></div>
    </div>
  );
};


function App() {
  return (
    <>
      {/* 
        1) The container that bounds scrolling & offsets 
        2) Inside it, we have the "scaled-site" that shrinks site.
      */}
      <div className="scaled-site-container">
        <div className="scaled-site">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      {/* 3) Decorative overlay pinned on top (pointer-events: none, etc.) */}
      <Wrapper />

      {/* 4) Custom cursor above everything */}
      <Cursor />
    </>
  );
}

export default App;


