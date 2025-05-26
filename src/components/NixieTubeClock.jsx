import React, { useState, useEffect, useRef } from 'react';
import './NixieTubeClock.css';

const NixieLoadingScreen = ({ 
  onComplete = null, // callback when loading reaches 100%
  loadingSpeed = 50, // milliseconds between updates
  className = ''
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [showTurnOnAnimation, setShowTurnOnAnimation] = useState(false);
  const intervalRef = useRef(null);

  // Moderately faster loading stages
  const getLoadingIncrement = (percentage) => {
    if (percentage < 10) return Math.random() * 4 + 1.5; // Fast start: 1.5-5.5%
    if (percentage < 30) return Math.random() * 3 + 1.5; // Medium: 1.5-4.5%
    if (percentage < 60) return Math.random() * 2 + 1; // Slower: 1-3%
    if (percentage < 85) return Math.random() * 1.5 + 0.5; // Slow: 0.5-2%
    if (percentage < 95) return Math.random() * 1 + 0.3; // Very slow: 0.3-1.3%
    return Math.random() * 0.5 + 0.1; // Crawl to finish: 0.1-0.6%
  };

  // Get moderately faster dynamic delay based on current percentage
  const getLoadingDelay = (percentage) => {
    if (percentage < 10) return 15 + Math.random() * 20; // 15-35ms
    if (percentage < 30) return 20 + Math.random() * 25; // 20-45ms
    if (percentage < 60) return 25 + Math.random() * 30; // 25-55ms
    if (percentage < 85) return 30 + Math.random() * 35; // 30-65ms
    if (percentage < 95) return 40 + Math.random() * 50; // 40-90ms
    return 50 + Math.random() * 60; // 50-110ms
  };

  // Update percentage function with realistic progression
  const updatePercentage = () => {
    setCurrentPercentage(prev => {
      const increment = getLoadingIncrement(prev);
      const newPercentage = Math.min(prev + increment, 100);
      
      if (newPercentage >= 100) {
        // Hold at 100% for half a second, then start turn-on animation
        setTimeout(() => {
          setShowTurnOnAnimation(true);
          // Call onComplete slightly before animation finishes to ensure smooth transition
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1300); // Extended to account for longer initial delay (2200ms total)
        }, 1000); // Hold at 100% for 1000ms
        return 100;
      }
      
      return newPercentage;
    });
  };

  // Start percentage counter with dynamic timing
  useEffect(() => {
    const scheduleNextUpdate = () => {
    if (intervalRef.current) {
        clearTimeout(intervalRef.current);
    }

      intervalRef.current = setTimeout(() => {
        updatePercentage();
        if (currentPercentage < 100) {
          scheduleNextUpdate();
        }
      }, getLoadingDelay(currentPercentage));
    };

    scheduleNextUpdate();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [currentPercentage]);



  // Format percentage as 4 digits (e.g., 025% for 25.3%)
  const displayValue = Math.floor(currentPercentage).toString().padStart(3, '0') + '%';
  const digits = displayValue.split('');

  const renderTube = (tubeNumber, digit) => (
    <div className="clock" id={`tube${tubeNumber}`} key={tubeNumber}>
      <div className="shadow"></div>
      <div className="base-container">
        <div className="base">
          <div></div>
        </div>
      </div>
      <div className="small-outer-pipe">
        <div className="small-inner-pipe"></div>
      </div>
      <div className="outer-pipe">
        <div className="inner-pipe"></div>
      </div>
      <div className="pipe-accents">
        <div className="top-tube"></div>
        <div className="tube-holders">
          <div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <div className="top"></div>
        <div className="topinset"></div>
        <div className="left"><div></div><div></div><div></div></div>
        <div className="right"><div></div><div></div><div></div></div>
        <div className="bottom-left"></div>
        <div className="bottom-right"></div>
      </div>
      <div className="display">
        <div className="row">
          <div className="col">
            <div>8</div>
            <div id={`digit${tubeNumber}-1`}>{digit}</div>
            <div id={`digit${tubeNumber}-2`}>{digit}</div>
            <div className="digit-2">2</div>
            <div className="digit-3">3</div>
            <div className="digit-4">4</div>
            <div className="digit-5">5</div>
            <div className="digit-6">6</div>
            <div className="digit-7">7</div>
            <div className="digit-8">8</div>
            <div className="digit-9">9</div>
          </div>
        </div>
      </div>
      <div className="glass-tube"></div>
      <div className="hex">
        <div className="overlay"></div>
      </div>
      <div className="tube-base-container">
        <div className="wires"><div></div><div></div></div>
        <div className="tube-base"></div>
        <div className="rods">
          <div className="left-rod"></div>
          <div className="center-rod"></div>
          <div className="right-rod"></div>
        </div>
        <div className="tube-btm"></div>
      </div>
      <div className="power-cord"><div></div><div></div></div>
    </div>
  );

  return (
    <div className={`nixie-loading-screen-wrapper ${className} ${showTurnOnAnimation ? 'animation-active' : ''}`}>
      <svg id="noise-svg">
        <filter id='noiseFilter'>
          <feTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch' />
        </filter>
        <rect id="noise-rect" filter='url(#noiseFilter)' />
      </svg>

      {!showTurnOnAnimation && (
        <>
          <div className="clock-container">
        {digits.map((digit, index) => renderTube(index + 1, digit))}
      </div>
          
          {/* Loading text */}
          <div className="loading-text">
            <h2 className="main-title">
              ENTERING <span className="title-transition">
                <span className="original-text">STEINS;GATE</span>
                <span className="replacement-text">ROBIN;TTW</span>
              </span>
            </h2>
            <p className="disclaimer">
              Not official • No rights claimed • Fan made • Creative/educational purpose • PLEASE DONT SUE ME
            </p>
            <div className="loading-bar">
              <div 
                className="loading-progress" 
                style={{ width: `${currentPercentage}%` }}
              ></div>
            </div>
          </div>
        </>
      )}

      {/* CRT Turn-on Animation */}
      {showTurnOnAnimation && (
        <div className="crt-turnon-overlay">
          <div className="crt-turnon-line"></div>
        </div>
      )}
    </div>
  );
};

export default NixieLoadingScreen; 