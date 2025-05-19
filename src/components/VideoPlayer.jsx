import React, { useRef, useEffect, useState } from 'react';

// This component replaces GIFs with more efficient WebM videos
const VideoPlayer = ({ 
  src, 
  fallbackSrc, // Original GIF as fallback
  className = "", 
  autoPlay = true,
  loop = true,
  muted = true,
  style = {},
  onLoad = () => {},
}) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      onLoad();
    };

    const handleError = () => {
      console.warn(`Video failed to load: ${src}`);
      setHasError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [src, onLoad]);

  // If WebM fails, fall back to the GIF
  if (hasError && fallbackSrc) {
    return (
      <img 
        src={fallbackSrc} 
        className={className}
        style={{ 
          ...style,
          display: 'block',  // Ensure proper layout
        }} 
        alt="Animated content"
        onLoad={onLoad}
      />
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        style={{ 
          ...style,
          display: isLoaded ? 'block' : 'none',  // Hide until loaded
        }}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
      >
        <source src={src} type="video/webm" />
        {/* Fallback to GIF if provided */}
        {fallbackSrc && <img src={fallbackSrc} alt="Animated content" />}
      </video>

      {/* Show placeholder while loading */}
      {!isLoaded && (
        <div
          className={className}
          style={{ 
            ...style, 
            backgroundColor: '#f0f0f0', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="animate-pulse w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer; 