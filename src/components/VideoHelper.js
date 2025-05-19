// Helper module for handling optimized video sources

/**
 * Get the optimized video path for a GIF, with fallback
 * @param {string} gifPath - Original path to the GIF file
 * @returns {Object} - Object containing WebM source and GIF fallback
 */
export const getOptimizedVideoSource = (gifPath) => {
  if (!gifPath) return { src: '', fallbackSrc: '' };
  
  // Extract the filename from the path
  const filename = gifPath.split('/').pop();
  const baseFilename = filename.replace(/\.[^.]+$/, ''); // Remove extension
  
  // Path to the WebM version
  const webmPath = `/src/assets/optimized/${baseFilename}.webm`;
  
  return {
    src: webmPath,
    fallbackSrc: gifPath
  };
};

/**
 * Check if a file exists at the given path
 * @param {string} path - Path to check
 * @returns {Promise<boolean>} - Whether the file exists
 */
export const fileExists = async (path) => {
  try {
    const response = await fetch(path, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
};

/**
 * Handle lazy loading of videos as user scrolls
 * @param {HTMLElement} element - The element to observe
 * @param {Function} onVisible - Callback when element is visible
 * @param {number} rootMargin - Margin around the element for early loading
 * @returns {Function} - Function to disconnect the observer
 */
export const observeElement = (element, onVisible, rootMargin = '100px') => {
  if (!element || !window.IntersectionObserver) return () => {};
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onVisible();
          observer.disconnect();
        }
      });
    },
    { rootMargin }
  );
  
  observer.observe(element);
  
  // Return a function to disconnect the observer
  return () => observer.disconnect();
}; 