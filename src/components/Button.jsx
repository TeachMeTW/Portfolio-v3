// src/components/Button.jsx

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM for portals
import "./Button.css";
import movieBtn from "../assets/movie_btn2.png"; // Ensure the path is correct
import { navLinks } from "../constants"; // Import navLinks

const Button = () => {
  const [isTurningOn, setIsTurningOn] = useState(false);
  const [isTurningOff, setIsTurningOff] = useState(false);
  const [showNoise, setShowNoise] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Start at 0
  const [hasSkippedFirstLink, setHasSkippedFirstLink] = useState(false); // To skip first link only on first loop
  const [noiseKey, setNoiseKey] = useState(0); // Unique key for noise overlay
  const [bgCustomBackground, setBgCustomBackground] = useState(null); // State to hold the target container

  // useEffect to set the bgCustomBackground after component mounts
  useEffect(() => {
    const container = document.querySelector(".bg-custom-background");
    if (container) {
      setBgCustomBackground(container);
    } else {
      console.warn(
        'Element with class "bg-custom-background" not found in the DOM.'
      );
    }
  }, []); // Empty dependency array ensures this runs once after mount

  const handleClick = () => {
    if (isTurningOn || isTurningOff || showNoise) return; // Prevent multiple clicks

    // Start turning on
    setIsTurningOn(true);
    setShowNoise(true);
    const newNoiseKey = Date.now(); // Unique key based on timestamp
    setNoiseKey(newNoiseKey);

    // Duration of turning on animation (in milliseconds)
    const turningOnDuration = 1000;

    setTimeout(() => {
      let targetIndex = currentIndex;

      // Handle skipping first link only on first loop
      if (currentIndex === 0 && !hasSkippedFirstLink) {
        targetIndex = 1; // Skip the first link
        setHasSkippedFirstLink(true);
      }

      const currentLink = navLinks[targetIndex];
      if (currentLink.path.includes("#")) {
        const targetId = currentLink.path.split("#")[1];
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn(
            `No element found with id "${targetId}" for navigation.`
          );
        }
      } else {
        // If path is "/", scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Update index for next click
      let nextIndex = targetIndex + 1;
      if (nextIndex >= navLinks.length) {
        nextIndex = 0; // Loop back to start
        // Reset skip flag to allow inclusion of the first link in subsequent loops
        setHasSkippedFirstLink(false);
      }
      setCurrentIndex(nextIndex);

      // Start turning off
      setIsTurningOn(false);
      setIsTurningOff(true);

      // Duration of turning off animation (in milliseconds)
      const turningOffDuration = 1000;

      setTimeout(() => {
        // Hide the noise overlay after turning off
        setIsTurningOff(false);
        setShowNoise(false);
      }, turningOffDuration);
    }, turningOnDuration);
  };

  return (
    <>
      {/* Container for Button and Label */}
      <div className="movie-button-container">
        {/* Movie Button */}
        <button
          className={`movie-button ${isTurningOn ? "turning-on" : ""} ${
            isTurningOff ? "turning-off" : ""
          }`}
          onClick={handleClick}
          aria-label="Navigate to Next Section"
        >
          {/* Inner Wrapper for Hover Effect */}
          <span className="movie-button-inner">
            <img src={movieBtn} alt="Movie Button" />
          </span>
        </button>

        {/* White Label with Two Lines */}
        <div className="movie-button-label">
          <span className="movie-button-label-line">Channel</span>
          <span className="movie-button-label-line">Tuner</span>
        </div>
      </div>

      {/* Noise Overlay */}
      {showNoise && bgCustomBackground && ReactDOM.createPortal(
        <div
          key={noiseKey} // Unique key to re-mount and re-trigger animation
          className={`noise-overlay ${isTurningOff ? "closing" : "opening"}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></div>,
        bgCustomBackground // Render inside .bg-custom-background
      )}

      {/* Global Noise Overlay */}
      {bgCustomBackground && ReactDOM.createPortal(
        <div className="global-noise-overlay"></div>,
        bgCustomBackground // Render into the same container as noise-overlay
      )}
    </>
  );
};

export default Button;
