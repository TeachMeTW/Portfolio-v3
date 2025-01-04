// src/components/Wrapper.jsx

import React from "react";
import "./Wrapper.css";

const Wrapper = () => {
  return (
    <div className="movie-frame-wrapper">
      {/* If you have interactive elements within the frame, adjust pointer-events accordingly */}
      <div className="movie-frame-scroller">
        <div className="movie-frame-content">
          {/* Add any interactive elements within the frame here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
