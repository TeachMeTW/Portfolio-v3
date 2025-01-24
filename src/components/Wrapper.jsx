import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Wrapper.css";

/* 
  Adjust these imports to match your actual file paths.
  Make sure that your `movie_frame.png` 
  has transparency if you want to see through the middle.
*/
import movieFrameImage from "../assets/movie_frame.png";
import movieBtn from "../assets/movie_btn2.png";

// Adjust if you use navLinks or some other logic
import { navLinks } from "../constants";

const Wrapper = () => {
  const [isTurningOn, setIsTurningOn] = useState(false);
  const [isTurningOff, setIsTurningOff] = useState(false);
  const [showNoise, setShowNoise] = useState(false);
  const [noiseKey, setNoiseKey] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasSkippedFirstLink, setHasSkippedFirstLink] = useState(false);

  // We'll measure the bounding rect of the displayed frame image:
  const frameRef = useRef(null);
  const [frameRect, setFrameRect] = useState({ left: 0, top: 0, width: 0, height: 0 });

  // For noise overlays (portal target)
  const [bgCustomBackground, setBgCustomBackground] = useState(null);
  useEffect(() => {
    const container = document.querySelector(".bg-custom-background");
    if (container) setBgCustomBackground(container);
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
  const handleClick = () => {
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

  // Pin the button to the right edge of the displayed image
  const offsetX = -30;
  const offsetY = 500;
  const buttonStyle = {
    position: "fixed",
    zIndex: 100000,
    pointerEvents: "auto",
    // Top edge aligns with the top edge of the frame:
    top: frameRect.top + offsetY,
    // Left edge is right at the image's right side:
    left: frameRect.left + frameRect.width + offsetX,
    // Translate so that the button’s right edge is flush with frame’s right edge
    transform: "translate(-100%, 0)",
  };

  return (
    <>
      {/* 
        Fullscreen overlay that just centers the frame image 
        with NO dark background => transparent 
      */}
      <div className="movie-frame-container">
        <img
          ref={frameRef}
          src={movieFrameImage}
          alt="Movie Frame"
          onLoad={handleFrameLoad}
          className="movie-frame-img"
        />
      </div>

      {/* The button, pinned to the frame's right edge. */}
      <div className="movie-button-container" style={buttonStyle}>
        <button
          className={`movie-button ${isTurningOn ? "turning-on" : ""} ${
            isTurningOff ? "turning-off" : ""
          }`}
          onClick={handleClick}
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
      {bgCustomBackground &&
        ReactDOM.createPortal(
          <div className="global-noise-overlay" />,
          bgCustomBackground
        )
      }
    </>
  );
};

export default Wrapper;
