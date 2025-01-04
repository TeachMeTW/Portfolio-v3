// src/components/Wrapper.jsx
import React from "react";
import "./Wrapper.css";

const Wrapper = () => {
  return (
    <div className="movie-frame-wrapper">
      {/* This extra <div> helps apply absolute centering for the scroller */}
      <div className="movie-frame-scroller">
        <div className="movie-frame-content">
          {/* bruh momement */}
          {/* For now it's just the "shell" on top. */}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
