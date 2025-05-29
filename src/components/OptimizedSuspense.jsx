import React, { Suspense, useEffect, useState, useRef } from 'react';

// This component prevents too many suspense fallbacks from rendering at once
// It will only render the children when the component is in or near the viewport
const OptimizedSuspense = ({ 
  children, 
  fallback,
  threshold = 200,  // Load when within 200px of viewport
  priority = false, // If true, load immediately without intersection observer
}) => {
  const [isVisible, setIsVisible] = useState(priority); // Start as visible if priority
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    // If priority is set, skip intersection observer
    if (priority) {
      setIsVisible(true);
      return;
    }

    // Early return if no container or IntersectionObserver is not supported
    if (!containerRef.current || !window.IntersectionObserver) {
      setIsVisible(true); // Fallback to always visible
      return;
    }

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
        threshold: 0.01, // Trigger when even a tiny bit is visible
      }
    );
    
    // Start observing the actual container
    observer.observe(containerRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, [threshold, priority]);
  
  // Only render Suspense/children when visible or already loaded
  if (isVisible || hasLoaded) {
    return (
      <div ref={containerRef}>
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      </div>
    );
  }
  
  // Otherwise show the fallback with the observer container
  return (
    <div ref={containerRef}>
      {fallback}
    </div>
  );
};

export default OptimizedSuspense; 