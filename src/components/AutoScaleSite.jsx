// src/components/AutoScaleSite.jsx

import React, { useEffect, useState, memo, useCallback } from "react";
import "./AutoScaleSite.css"; // Ensure this CSS file is properly linked

const AutoScaleSite = memo(({ width = 1200, height = 860, children }) => {
  const frameAspectRatio = 1360 / 1020; // Aspect ratio of the TV frame
  const [scale, setScale] = useState(1);
  const [adjustedWidth, setAdjustedWidth] = useState(width);
  const [adjustedHeight, setAdjustedHeight] = useState(height);
  const [padding, setPadding] = useState({
    top: 0,
    bottom: 0,
    leftRight: 0,
  });

  // Add zoom out factor - smaller value = more zoomed out
  const zoomOutFactor = 0.9; 

  const handleResize = useCallback(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Ensure content matches the frame's aspect ratio
    let newWidth = viewportWidth;
    let newHeight = viewportWidth / frameAspectRatio;

    if (newHeight > viewportHeight) {
      newHeight = viewportHeight;
      newWidth = viewportHeight * frameAspectRatio;
    }

    setAdjustedWidth(newWidth);
    setAdjustedHeight(newHeight);

    // Calculate scale based on the smallest ratio to maintain aspect ratio
    const scaleWidth = viewportWidth / newWidth;
    const scaleHeight = viewportHeight / newHeight;
    // Apply zoom out factor to scale the content slightly smaller
    const newScale = Math.min(scaleWidth, scaleHeight, 1) * zoomOutFactor; 

    setScale(newScale);
  }, [frameAspectRatio, zoomOutFactor]);

  useEffect(() => {
    // Initial calculation
    handleResize();

    // Debounce resize events
    let timeoutId;
    const debouncedResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleResize, 200);
    };

    // Recalculate on window resize with debounce
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return (
    <div
      className="autoscale-container"
      style={{
        top: `${padding.top}px`,
        bottom: `${padding.bottom}px`,
        left: `${padding.leftRight}px`,
        right: `${padding.leftRight}px`,
      }}
    >
      <div
        className="autoscale-content"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: `${adjustedWidth}px`,
          height: `${adjustedHeight}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
});

export default AutoScaleSite;
