// src/App.jsx

import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Cursor from "./components/Cursor"; // Import directly to avoid circular dependencies
import OptimizedSuspense from "./components/OptimizedSuspense";

// Loading spinner component (defined locally to avoid extra imports)
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
  </div>
);

// Minimal loading placeholder for sections
const MinimalPlaceholder = () => (
  <div className="h-screen w-full flex justify-center items-center">
    <div className="animate-pulse w-full h-64 bg-gray-300/10"></div>
  </div>
);

// Preload critical components
const Hero = lazy(() => import("./components/Hero"));

// Fully lazy-loaded components 
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const OtherExperience = lazy(() => import("./components/OtherExperience"));
const Extra = lazy(() => import("./components/Extra"));
const PoliceTapeHero = lazy(() => import("./components/PoliceTapeHero"));
const Wrapper = lazy(() => import("./components/Wrapper"));
const AutoScaleSite = lazy(() => import("./components/AutoScaleSite"));

// Import only the CSS we need
import "./App.css";
import "./components/ProjectCard.css";

// Create smaller chunks of UI for better code-splitting
const MainPageContent = () => (
  <>
    <OptimizedSuspense fallback={<MinimalPlaceholder />}>
      <About />
    </OptimizedSuspense>
    <OptimizedSuspense fallback={<MinimalPlaceholder />}>
      <Experience />
    </OptimizedSuspense>
    <OptimizedSuspense fallback={<MinimalPlaceholder />}>
      <Tech />
    </OptimizedSuspense>
    <OptimizedSuspense fallback={<MinimalPlaceholder />}>
      <Works />
    </OptimizedSuspense>
    <OptimizedSuspense fallback={<MinimalPlaceholder />}>
      <OtherExperience />
    </OptimizedSuspense>
    <OptimizedSuspense fallback={<MinimalPlaceholder />}>
      <Extra />
    </OptimizedSuspense>
    <OptimizedSuspense fallback={<MinimalPlaceholder />}>
      <PoliceTapeHero />
    </OptimizedSuspense>
  </>
);

const MainPage = () => {
  return (
    <div className="relative z-0 bg-custom-background">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
      </div>
      <MainPageContent />
    </div>
  );
};

const App = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [layoutReady, setLayoutReady] = useState(false);

  // Optimized screen size check with debounce
  useEffect(() => {
    let timeoutId;
    
    function handleResize() {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
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
        
        // Set layout as ready after initial check
        setLayoutReady(true);
      }, 200);
    }

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
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
  
  // Show loading spinner until layout is determined
  if (!layoutReady) {
    return <LoadingSpinner />;
  }

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
                </Routes>
              </BrowserRouter>
            </AutoScaleSite>

            {/* 2. Movie Frame Overlay */}
            <Wrapper />
          </Suspense>
        </>
      ) : (
        // Render the site without scaling and without the movie frame
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      )}

      {/* Custom Cursor remains visible in both cases */}
      <Cursor />
    </>
  );
};

export default App;
