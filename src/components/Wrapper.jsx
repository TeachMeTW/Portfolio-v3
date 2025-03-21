import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Wrapper.css";

/* 
  Adjust these imports to match your actual file paths.
  Make sure that your `movie_frame.png` 
  has transparency if you want to see through the middle.
*/
import movieFrameImage from "../assets/movie_frame.png";
import movieFrameImage2 from "../assets/movie_frame2.png";
import movieBtn from "../assets/movie_btn2.png";

// Adjust if you use navLinks or some other logic
import { navLinks } from "../constants";

const Wrapper = () => {
  // State for Tuner Noise
  const [isTurningOn, setIsTurningOn] = useState(false);
  const [isTurningOff, setIsTurningOff] = useState(false);
  const [showNoise, setShowNoise] = useState(false);
  const [noiseKey, setNoiseKey] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasSkippedFirstLink, setHasSkippedFirstLink] = useState(false);

  // New state for Constant Noise
  const [isConstantNoiseEnabled, setIsConstantNoiseEnabled] = useState(true); // Noise is on initially
  
  // State to track if disclaimer has been dismissed
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  
  // New state to track which frame image to display
  const [currentFrame, setCurrentFrame] = useState(movieFrameImage);

  // Reset disclaimer when noise toggle changes
  useEffect(() => {
    if (isConstantNoiseEnabled) {
      setShowDisclaimer(true); // Show disclaimer when noise is enabled
    }
  }, [isConstantNoiseEnabled]);

  // We'll measure the bounding rect of the displayed frame image:
  const frameRef = useRef(null);
  const [frameRect, setFrameRect] = useState({ left: 0, top: 0, width: 0, height: 0 });

  // For noise overlays (portal target)
  const [bgCustomBackground, setBgCustomBackground] = useState(null);
  useEffect(() => {
    const container = document.querySelector(".bg-custom-background");
    if (container) setBgCustomBackground(container);
  }, []);

  // Track current window height
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On mount + window resize, measure the image's bounding box
  useEffect(() => {
    function updateRect() {
      if (frameRef.current) {
        const rect = frameRef.current.getBoundingClientRect();
        setFrameRect({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    }
    updateRect();

    window.addEventListener("resize", updateRect);
    return () => window.removeEventListener("resize", updateRect);
  }, []);

  // Also measure once the image loads
  const handleFrameLoad = () => {
    if (frameRef.current) {
      const rect = frameRef.current.getBoundingClientRect();
      setFrameRect({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  // ---------- Tuner Button Click ----------
  const handleTunerClick = () => {
    if (isTurningOn || isTurningOff || showNoise) return;

    // Turn ON
    setIsTurningOn(true);
    setShowNoise(true);
    setNoiseKey(Date.now());

    setTimeout(() => {
      let idx = currentIndex;

      // Skip first link on first cycle only
      if (idx === 0 && !hasSkippedFirstLink) {
        idx = 1;
        setHasSkippedFirstLink(true);
      }

      const link = navLinks[idx];
      if (link && link.path && link.path.includes("#")) {
        const targetId = link.path.split("#")[1];
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // E.g. path = "/", just scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      let nextIndex = idx + 1;
      if (nextIndex >= navLinks.length) {
        nextIndex = 0;
        // Optional: reset so first link is only skipped once
        setHasSkippedFirstLink(false);
      }
      setCurrentIndex(nextIndex);

      // Turn OFF
      setIsTurningOn(false);
      setIsTurningOff(true);
      setTimeout(() => {
        setIsTurningOff(false);
        setShowNoise(false);
      }, 1000);
    }, 1000);
  };

  // ---------- Constant Noise Toggle ----------
  const toggleConstantNoise = () => {
    setIsConstantNoiseEnabled((prev) => !prev);
    // Toggle between the two frame images
    setCurrentFrame(currentFrame === movieFrameImage ? movieFrameImage2 : movieFrameImage);
  };

  // Decide how to position/scale the buttons based on window height
  const offsetX = -10;   // how far left from the frame's edge in normal mode
  const offsetY = 500;   // how far down from the frame's top
  let buttonContainerStyle = {};

  if (windowHeight < 1000) {
    // For smaller heights, adjust positioning and scaling
    buttonContainerStyle = {
      position: "fixed",
      zIndex: 100000,
      pointerEvents: "none", // Allow clicks on buttons
      top: frameRect.top + offsetY - 200,
      left: frameRect.left + frameRect.width - 115, 
      transform: "scale(0.6)",         // scale down
      transformOrigin: "top right",    // so it shrinks from the top-right corner
    };
  } else {
    // For taller windows, position relative to the image bounding rect
    buttonContainerStyle = {
      position: "fixed",
      zIndex: 100000,
      pointerEvents: "none", // Allow clicks on buttons
      top: frameRect.top + offsetY,
      left: frameRect.left + frameRect.width + offsetX,
      transform: "translate(-100%, 0)",
    };
  }

  // Styles for individual buttons to enable pointer events
  const individualButtonStyle = {
    pointerEvents: "auto",
    marginBottom: "10px", // Space between buttons
  };

  return (
    <>
      {/* TV Mode Disclaimer - Only shows when noise is enabled and not dismissed */}
      {isConstantNoiseEnabled && showDisclaimer && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '8px 16px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            color: 'white',
            textAlign: 'center',
            zIndex: 9999999, // Higher than frame container
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(2px)',
            borderBottom: '2px solid #FF4500',
            fontFamily: 'sans-serif',
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p style={{ margin: '0 auto' }}>
            Having trouble seeing content? Click the <span style={{ color: '#FF4500', fontWeight: 'bold' }}>Noise Toggle</span> button on the right side of the TV to turn off static effect.
          </p>
          <button 
            onClick={() => setShowDisclaimer(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginLeft: '16px',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 69, 0, 0.4)',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 69, 0, 0.8)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 69, 0, 0.4)'}
          >
            ×
          </button>
        </div>
      )}

      {/* 
        Fullscreen overlay that just centers the frame image 
        with NO dark background => transparent 
      */}
      <div className="movie-frame-container">
        <img
          ref={frameRef}
          src={currentFrame}
          alt="Movie Frame"
          onLoad={handleFrameLoad}
          className="movie-frame-img"
        />
      </div>

      {/* 
        Container for both buttons, positioned based on the style logic above.
        pointerEvents is set to 'none' to allow the buttons inside to receive pointer events.
      */}
      <div className="movie-button-container" style={buttonContainerStyle}>
        {/* Channel Tuner Button */}
        <div style={individualButtonStyle}>
          <button
            className={`movie-button ${isTurningOn ? "turning-on" : ""} ${
              isTurningOff ? "turning-off" : ""
            }`}
            onClick={handleTunerClick}
          >
            <span className="movie-button-inner">
              <img src={movieBtn} alt="Movie Button" />
            </span>
          </button>
          <div className="movie-button-label">
            <span className="movie-button-label-line">Channel</span>
            <span className="movie-button-label-line">Tuner</span>
          </div>
        </div>

        {/* Constant Noise Toggle Button */}
        <div style={individualButtonStyle}>
          <button
            className={`movie-button ${isConstantNoiseEnabled ? "noise-on" : "noise-off"}`}
            onClick={toggleConstantNoise}
          >
            <span className="movie-button-inner">
              {/* You can use a different icon for the noise button if desired */}
              <img src={movieBtn} alt="Noise Toggle Button" />
            </span>
          </button>
          <div className="movie-button-label">
            <span className="movie-button-label-line">Noise</span>
            <span className="movie-button-label-line">Toggle</span>
          </div>
        </div>

        <div style={individualButtonStyle}>
          <button
            className={`movie-button`}
            onClick={() => window.location.href = 'https://side.robinttw.com'}
          >
            <span className="movie-button-inner">
              {/* You can use a different icon for the noise button if desired */}
              <img src={movieBtn} alt="Noise Toggle Button" />
            </span>
          </button>
          <div className="movie-button-label">
            <span className="movie-button-label-line">Switch</span>
            <span className="movie-button-label-line">Worldline</span>
          </div>
        </div>
      </div>

      {/* Noise Overlays (Portals) */}
      {showNoise && bgCustomBackground &&
        ReactDOM.createPortal(
          <div
            key={noiseKey}
            className={`noise-overlay ${isTurningOff ? "closing" : "opening"}`}
          />,
          bgCustomBackground
        )
      }
      {/* Conditionally render the global noise overlay based on isConstantNoiseEnabled */}
      {isConstantNoiseEnabled && bgCustomBackground &&
        ReactDOM.createPortal(
          <div className="global-noise-overlay" />,
          bgCustomBackground
        )
      }
    </>
  );
};

export default Wrapper;
