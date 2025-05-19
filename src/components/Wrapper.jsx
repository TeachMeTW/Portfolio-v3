import React, { useState, useEffect, useRef, memo } from "react";
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

// Memoized components
const NoiseOverlay = memo(({ isActive, isOpening, isClosing }) => (
  <div className={`noise-overlay ${isOpening ? 'opening' : ''} ${isClosing ? 'closing' : ''}`}></div>
));

const GlobalNoiseOverlay = memo(({ isEnabled }) => (
  isEnabled ? <div className="global-noise-overlay"></div> : null
));

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

  // NEW: Flag to track if we've scrolled to top after clubs but not yet navigated to experience
  const [atTopAfterClubs, setAtTopAfterClubs] = useState(false);
  
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

  // Track current window height with debounce
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setWindowHeight(window.innerHeight);
      }, 200);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // On mount + window resize, measure the image's bounding box with debounce
  useEffect(() => {
    let timeoutId;
    function updateRect() {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        if (frameRef.current) {
          const rect = frameRef.current.getBoundingClientRect();
          setFrameRect({
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
          });
        }
      }, 200);
    }
    
    updateRect();
    window.addEventListener("resize", updateRect);
    return () => {
      window.removeEventListener("resize", updateRect);
      if (timeoutId) clearTimeout(timeoutId);
    };
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

  // Function to force scroll to top with multiple methods
  const forceScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Method 2: Force immediate scroll
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
  };

  // ---------- Tuner Button Click ----------
  const handleTunerClick = () => {
    // Prevent multiple clicks during animation
    if (isTurningOn || isTurningOff || showNoise) return;

    // Turn ON animation and show noise
    setIsTurningOn(true);
    setShowNoise(true);
    setNoiseKey(Date.now());

    setTimeout(() => {
      let nextSection = '';
      let targetIndex;
      
      // Special case: If we're at top after clubs, go to Experience section
      if (atTopAfterClubs) {
        nextSection = 'work';
        setAtTopAfterClubs(false); // Reset the flag
        
        // Now perform the navigation
        const navLinkIndex = navLinks.findIndex(link => link.id === nextSection);
        if (navLinkIndex !== -1) {
          targetIndex = navLinkIndex;
          const link = navLinks[targetIndex];
          
          // Navigate
          if (link && link.path) {
            if (link.path.includes('#')) {
              // For anchor links, scroll to the element
              const targetId = link.path.split('#')[1];
              const el = document.getElementById(targetId);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }
        }
        
        // Update the current index for the next click
        setCurrentIndex(targetIndex);

        // Turn OFF animation and hide noise
        setIsTurningOn(false);
        setIsTurningOff(true);
        setTimeout(() => {
          setIsTurningOff(false);
          setShowNoise(false);
        }, 1000);
        
        return; // Exit early since we've handled this case
      }
      
      // Use a simplified state machine approach
      if (currentIndex === 0 || currentIndex === navLinks.findIndex(link => link.id === "about")) {
        // At Hero/Home, go to Experience
        nextSection = 'work';
      } else if (currentIndex === -1) {
        // At Projects, go to Education
        nextSection = 'edu';
      } else if (currentIndex === navLinks.findIndex(link => link.id === "work")) {
        // At Experience, go to Projects
        nextSection = 'edu';
      } else if (currentIndex === navLinks.findIndex(link => link.id === "edu")) {
        // At Education, go to Clubs
        nextSection = 'extra';
      } else if (currentIndex === navLinks.findIndex(link => link.id === "extra")) {
        // ---------- KEY CHANGE: CLUBS SECTION HANDLING ----------
        // At Clubs, ONLY scroll to top on first click, don't change section yet
        console.log("From Clubs → ONLY scrolling to top (will go to Experience on next click)");
        
        // Force scroll to top
        forceScrollToTop();
        
        // Set flag that we've scrolled to top after clubs
        setAtTopAfterClubs(true);
        
        // Turn OFF animation and hide noise
        setIsTurningOn(false);
        setIsTurningOff(true);
        setTimeout(() => {
          setIsTurningOff(false);
          setShowNoise(false);
        }, 1000);
        
        return; // Exit early since we've handled this case
      } else if (currentIndex >= 0 && currentIndex < navLinks.length && navLinks[currentIndex].id === "extra") {
        // Additional backup check for clubs section using the ID directly
        console.log("BACKUP detected we're at clubs section via ID check - scrolling to top only");
        
        // Force scroll to top
        forceScrollToTop();
        
        // Set flag that we've scrolled to top after clubs
        setAtTopAfterClubs(true);
        
        // Turn OFF animation and hide noise
        setIsTurningOn(false);
        setIsTurningOff(true);
        setTimeout(() => {
          setIsTurningOff(false);
          setShowNoise(false);
        }, 1000);
        
        return; // Exit early
      } else {
        // Check if we could be at clubs (extra) but the index detection isn't working
        // This is a fallback check to help identify the issue
        console.log(`Fallback check - Current section name: ${currentIndex >= 0 && currentIndex < navLinks.length ? navLinks[currentIndex].id : 'unknown'}`);
        
        // Force navigation to Hero as a fallback
        nextSection = 'about';
        console.log("Unknown position → Hero (fallback)");
      }
      
      // Now perform the navigation
      const navLinkIndex = navLinks.findIndex(link => link.id === nextSection);
      console.log(`Looking for section: ${nextSection}, found at index: ${navLinkIndex}`);
      
      if (navLinkIndex !== -1) {
        targetIndex = navLinkIndex;
        const link = navLinks[targetIndex];
        
        // Navigate
        if (link && link.path) {
          if (link.path.includes('#')) {
            // For anchor links, scroll to the element
            const targetId = link.path.split('#')[1];
            const el = document.getElementById(targetId);
            if (el) {
              console.log(`Scrolling to element #${targetId}`);
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              console.log(`Element #${targetId} not found`);
              // Fallback to root if element not found
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          } else if (!link.path.startsWith('http')) {
            // For root path, scroll to top
            console.log("Scrolling to top");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      } else {
        // Fallback if next section not found
        console.log("Could not find next section:", nextSection);
        targetIndex = navLinks.findIndex(link => link.id === "about"); // Default to hero
        console.log("Forcing to Hero (index:", targetIndex, ")");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      // Update the current index for the next click
      console.log("Setting current index from", currentIndex, "to", targetIndex);
      setCurrentIndex(targetIndex);

      // Turn OFF animation and hide noise
      setIsTurningOn(false);
      setIsTurningOff(true);
      setTimeout(() => {
        setIsTurningOff(false);
        setShowNoise(false);
      }, 1000);
    }, 1500);
  };

  // ---------- Toggle Constant Noise ----------
  const toggleConstantNoise = () => {
    setIsConstantNoiseEnabled(!isConstantNoiseEnabled);
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
          <NoiseOverlay 
            isActive={showNoise}
            isOpening={isTurningOn}
            isClosing={isTurningOff}
          />,
          bgCustomBackground
        )
      }
      {/* Conditionally render the global noise overlay based on isConstantNoiseEnabled */}
      {bgCustomBackground && ReactDOM.createPortal(
        <GlobalNoiseOverlay isEnabled={isConstantNoiseEnabled} />,
        bgCustomBackground
      )}
    </>
  );
};

export default Wrapper;
