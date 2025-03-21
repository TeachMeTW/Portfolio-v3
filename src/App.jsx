// src/App.jsx

import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Cursor,
  Hero,
} from "./components";

// Lazy-loaded components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const OtherExperience = lazy(() => import("./components/OtherExperience"));
const Extra = lazy(() => import("./components/Extra"));
const PoliceTapeHero = lazy(() => import("./components/PoliceTapeHero"));

// Wrapper components with smaller initial footprint
const Wrapper = lazy(() => import("./components/Wrapper"));
const AutoScaleSite = lazy(() => import("./components/AutoScaleSite"));

import "./App.css";
import "./components/ProjectCard.css";

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
  </div>
);

const MainPage = () => {
  return (
    <div className="relative z-0 bg-custom-background">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Tech />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Works />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <OtherExperience />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Extra />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <PoliceTapeHero />
      </Suspense>
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
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>

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
