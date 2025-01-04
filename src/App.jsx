// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

import Wrapper from "./components/Wrapper";
import AutoScaleSite from "./components/AutoScaleSite";

import "./App.css";
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
    </div>
  );
};

const App = () => {
  return (
    <>
      {/* Scaled and Centered Site */}
      <AutoScaleSite width={1200} height={860}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* Add other routes here if needed */}
          </Routes>
        </BrowserRouter>
      </AutoScaleSite>

      {/* Movie Frame Overlay */}
      <Wrapper />

      {/* Custom Cursor */}
      <Cursor />
    </>
  );
};

export default App;
