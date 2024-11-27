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
import "./App.css";

import "./components/ProjectCard.css"; // Updated CSS file name

const MainPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Cursor />
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
      <div className="relative z-0"></div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
