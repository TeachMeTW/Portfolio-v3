import React, { Suspense, useEffect, useState } from 'react';

// This component prevents too many suspense fallbacks from rendering at once
// It will only render the children when the component is in or near the viewport
const OptimizedSuspense = ({ 
  children, 
  fallback,
  threshold = 200,  // Load when within 200px of viewport
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the component is about to enter viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      {
        rootMargin: `${threshold}px`, // Load before it's fully visible
      }
    );

    // Create a placeholder div to observe
    const placeholder = document.createElement('div');
    placeholder.id = `suspense-placeholder-${Math.random().toString(36).substr(2, 9)}`;
    document.body.appendChild(placeholder);
    
    // Start observing
    observer.observe(placeholder);
    
    return () => {
      observer.disconnect();
      if (document.body.contains(placeholder)) {
        document.body.removeChild(placeholder);
      }
    };
  }, [threshold]);
  
  // Only render Suspense/children when visible or already loaded
  if (isVisible || hasLoaded) {
    return (
      <Suspense fallback={fallback}>
        {/* Once children successfully render, remember this */}
        {React.cloneElement(children, {
          ref: () => setHasLoaded(true)
        })}
      </Suspense>
    );
  }
  
  // Otherwise show a minimal placeholder
  return fallback;
};

export default OptimizedSuspense; 