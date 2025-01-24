// src/App.jsx

import React, { useEffect, useState } from "react";
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
import PoliceTapeHero from "./components/PoliceTapeHero";
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
      <Works />
      <OtherExperience />
      <Extra />
      <PoliceTapeHero />
    </div>
  );
};

const App = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    function handleResize() {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const aspectRatio = viewportWidth / viewportHeight;

      // Define your threshold values
      const minWidth = 768; // Minimum width in pixels to enable scaling and movie frame
      const minAspectRatio = 4 / 3; // Minimum aspect ratio (width/height)
      const minHeight = 700; // Minimum height in pixels

      // Check if all conditions are met
      if (
        viewportWidth >= minWidth &&
        aspectRatio >= minAspectRatio &&
        viewportHeight >= minHeight
      ) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    }

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      // When the movie frame is present, hide global overflow
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // When the movie frame is absent, allow global scrolling
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [isLargeScreen]);

  return (
    <>
      {isLargeScreen ? (
        <>
          {/* 1. Scaled and Centered Site */}
          <AutoScaleSite width={1200} height={860}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainPage />} />
                {/* Add other routes here if needed */}
              </Routes>
            </BrowserRouter>
          </AutoScaleSite>

          {/* 2. Movie Frame Overlay */}
          <Wrapper />

          {/* 3. Movie Button */}
          {/* Add Movie Button component here if needed */}
        </>
      ) : (
        // Render the site without scaling and without the movie frame
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* Add other routes here if needed */}
          </Routes>
        </BrowserRouter>
      )}

      {/* 4. Custom Cursor remains visible in both cases */}
      <Cursor />
    </>
  );
};

export default App;
