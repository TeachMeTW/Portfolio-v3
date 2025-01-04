// src/components/AutoScaleSite.jsx

import React, { useEffect, useState } from "react";
import "./AutoScaleSite.css"; // Ensure this CSS file is properly linked

export default function AutoScaleSite({ width = 1200, height = 860, children }) {
  const [scale, setScale] = useState(1);
  const [padding, setPadding] = useState({
    top: 80,
    bottom: 80,
    leftRight: 80,
  });

  useEffect(() => {
    function handleResize() {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let paddingTop, paddingBottom, paddingLeftRight;

      // Define padding based on viewport width for responsiveness
      if (viewportWidth <= 480) { // Mobile devices
        paddingTop = 250;
        paddingBottom = 250;
        paddingLeftRight = 30;
      } else if (viewportWidth <= 768) { // Tablets
        paddingTop = 200;
        paddingBottom = 200;
        paddingLeftRight = 50;
      } else { // Desktops and larger screens
        paddingTop = 80;
        paddingBottom = 80;
        paddingLeftRight = 80;
      }

      setPadding({ top: paddingTop, bottom: paddingBottom, leftRight: paddingLeftRight });

      // Calculate available width and height within the frame
      const availableWidth = viewportWidth - 2 * paddingLeftRight;
      const availableHeight = viewportHeight - paddingTop - paddingBottom;

      // Calculate scale based on the smallest ratio to maintain aspect ratio
      const scaleWidth = availableWidth / width;
      const scaleHeight = availableHeight / height;
      const newScale = Math.min(scaleWidth, scaleHeight, 1); // Prevent upscaling beyond 1

      setScale(newScale);
    }

    // Initial calculation
    handleResize();

    // Recalculate on window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, height]);

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
        }}
      >
        {children}
      </div>
    </div>
  );
}
