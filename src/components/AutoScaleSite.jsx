// src/components/AutoScaleSite.jsx

import React, { useEffect, useState } from "react";
import "./AutoScaleSite.css"; // Ensure this CSS file is properly linked

export default function AutoScaleSite({ width = 1200, height = 860, children }) {
  const frameAspectRatio = 1360 / 1020; // Aspect ratio of the TV frame
  const [scale, setScale] = useState(1);
  const [adjustedWidth, setAdjustedWidth] = useState(width); // Track adjusted width
  const [adjustedHeight, setAdjustedHeight] = useState(height); // Track adjusted height
  const [padding, setPadding] = useState({
    top: 0,
    bottom: 0,
    leftRight: 0,
  });

  useEffect(() => {
    function handleResize() {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      console.log(`Viewport Width: ${viewportWidth}px`);
      console.log(`Viewport Height: ${viewportHeight}px`);
      
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
      const newScale = Math.min(scaleWidth, scaleHeight, 1); // Prevent upscaling beyond 1

      setScale(newScale);
      console.log(`Adjusted Width: ${newWidth}px`);
      console.log(`Adjusted Height: ${newHeight}px`);
      console.log(`Calculated Scale: ${newScale.toFixed(2)}`);
    }

    // Initial calculation
    handleResize();

    // Recalculate on window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameAspectRatio]);

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
}
