// Experience.jsx
import React, { useState, useEffect, lazy, Suspense, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, experienceDetails } from "../constants";
import { SectionWrapper } from "../hoc";
// Removed duplicate textVariant import
// import { textVariant } from "../utils/motion"; // Already defined inside Experience component

// Modal component for displaying experience details
const ExperienceModal = ({ experienceDetail, experience, onClose }) => {
  // Make sure keyboard handlers are properly set
  useEffect(() => {
    // Handle ESC key to close the modal
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    // Add event listener
    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [experience, onClose]);

  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  
  // Create an array of images for the carousel using the images from experienceDetail
  const carouselImages = useMemo(() => {
    return experienceDetail && experienceDetail.images ? 
      experienceDetail.images : 
      (experience ? [experience.proj].filter(Boolean) : []);
  }, [experienceDetail, experience]);
    
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  }, [carouselImages.length]);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  }, [carouselImages.length]);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  const handleImageLoad = useCallback((index) => {
    setImagesLoaded(prev => ({...prev, [index]: true}));
  }, []);

  if (!experience || !experienceDetail) return null;
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 experience-modal-container" 
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 900,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh'
      }}
      onClick={() => onClose()} // Simplified click handler
    >
      {isFullscreen ? (
        <div 
          className="fixed inset-0 bg-transparent z-[1000] flex items-center justify-center pointer-events-auto"
          onClick={(e) => {
            e.stopPropagation();
            toggleFullscreen();
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Container that matches the TV screen dimensions and position */}
          <div 
            style={{
              width: '60%',  // 60% of autoscale-content width
              height: '60%', // 60% of autoscale-content height
              maxWidth: 'calc(0.6 * 1200px)', // 60% of the base autoscale-content width (1200px)
              maxHeight: 'calc(0.6 * 860px)', // 60% of the base autoscale-content height (860px)
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              backgroundColor: '#111',
              zIndex: 1000
            }}
          >
            {/* Close button moved inside the frame */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-[1002]"
            >
              ×
            </button>
            
            {/* Only render the current image in fullscreen mode */}
            <img
              src={carouselImages[currentSlide]}
              alt={`${experience.title} project fullscreen`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
              loading="lazy"
              onLoad={() => handleImageLoad(`fullscreen-${currentSlide}`)}
            />
            
            {/* Loading indicator */}
            {!imagesLoaded[`fullscreen-${currentSlide}`] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
              </div>
            )}
            
            {/* Controls inside the TV frame */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-[1001]">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="bg-black bg-opacity-75 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 text-2xl"
              >
                &#8249;
              </button>
              <div className="bg-black bg-opacity-75 text-white px-4 py-2 rounded-full">
                {currentSlide + 1} / {carouselImages.length}
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="bg-black bg-opacity-75 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 text-2xl"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div 
          className="relative bg-[#1d1d1d] rounded-lg max-w-3xl w-full mx-auto p-5 shadow-xl border-2 border-orange-500 overflow-auto max-h-[75vh]"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the content
        >
          {/* Close button */}
          <button 
            onClick={() => onClose()} // Simplified click handler
            className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer z-10"
          >
            ×
          </button>
          
          {/* Main content with more horizontal layout */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* Left column - Header and carousel */}
            <div className="md:w-1/2">
              {/* Header with company info */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <img src={experience.icon} alt={experience.company_name} className="w-6 h-6 object-contain" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-[22px] font-bold text-orange-500">{experienceDetail.title}</h3>
                  <p className="text-[15px] font-semibold text-white">{experienceDetail.company}</p>
                  <p className="text-[13px] text-gray-400">{experienceDetail.duration}</p>
                </div>
              </div>
              
              {/* Image Carousel */}
              <div className="rounded-lg border-2 border-orange-500 relative overflow-hidden group">
                <div className="carousel relative h-64">
                  {/* Only render the current slide for better performance */}
                  <div 
                    key={`slide-${currentSlide}`}
                    className="carousel-slide absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-100 z-10"
                  >
                    <img
                      src={carouselImages[currentSlide]}
                      alt={`${experience.title} project ${currentSlide + 1}`}
                      className="w-full h-full object-contain rounded cursor-pointer"
                      loading="lazy"
                      onLoad={() => handleImageLoad(currentSlide)}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFullscreen();
                      }}
                    />
                    <div className="absolute bottom-2 right-2 z-20 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {currentSlide + 1} / {carouselImages.length}
                    </div>
                  </div>
                  
                  {/* Loading indicator */}
                  {!imagesLoaded[currentSlide] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                    </div>
                  )}
                  
                  {/* Carousel Navigation */}
                  {carouselImages.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 z-20 text-xl opacity-70 group-hover:opacity-100 transition-opacity"
                      >
                        &#8249;
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 z-20 text-xl opacity-70 group-hover:opacity-100 transition-opacity"
                      >
                        &#8250;
                      </button>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {carouselImages.map((_, index) => (
                          <button 
                            key={`dot-${index}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSlide(index);
                            }}
                            className={`w-2 h-2 rounded-full ${
                              index === currentSlide ? 'bg-orange-500' : 'bg-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                      {/* Fullscreen button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFullscreen();
                        }}
                        className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-md hover:bg-opacity-75 z-20 opacity-70 group-hover:opacity-100 transition-opacity"
                        title="View fullscreen"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
              
              {/* Thumbnail Strip for quick navigation (compressed) - Only show 5 thumbnails at a time */}
              {carouselImages.length > 3 && (
                <div className="mt-2 flex space-x-1 overflow-x-auto pb-1">
                  {carouselImages.slice(
                    Math.max(0, currentSlide - 2), 
                    Math.min(carouselImages.length, currentSlide + 3)
                  ).map((src, idx) => {
                    const index = idx + Math.max(0, currentSlide - 2);
                    return (
                      <div 
                        key={`thumb-${index}`}
                        onClick={() => setCurrentSlide(index)}
                        className={`flex-shrink-0 w-12 h-12 cursor-pointer rounded overflow-hidden transition-all ${
                          currentSlide === index ? 'border-2 border-orange-500' : 'border border-gray-500 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={src} 
                          alt={`Thumbnail ${index + 1}`} 
                          className="w-full h-full object-cover" 
                          loading="lazy" 
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            
            {/* Right column - Details */}
            <div className="md:w-1/2">
              {/* Role Description */}
              <div className="mb-3">
                <h4 className="text-[16px] font-semibold text-orange-500 mb-1">About</h4>
                <p className="text-white text-[13px] tracking-wider">
                  {experienceDetail.detailed_description}
                </p>
              </div>
              
              {/* Tools Used */}
              <div className="mb-3">
                <h4 className="text-[16px] font-semibold text-orange-500 mb-1">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {experienceDetail.tools.map((tool, index) => (
                    <span 
                      key={`tool-${index}`} 
                      className="bg-gray-800 text-white px-2 py-0.5 text-xs rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Skills Gained */}
              <div className="mb-3">
                <h4 className="text-[16px] font-semibold text-orange-500 mb-1">Skills Gained</h4>
                <div className="flex flex-wrap gap-1">
                  {experienceDetail.skills_gained.map((skill, index) => (
                    <span 
                      key={`skill-${index}`} 
                      className="bg-orange-800 text-white px-2 py-0.5 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Links and buttons */}
              <div className="flex justify-between items-center mt-3">
                {/* Optional: Link to the full document */}
                {experience.link && (
                  <a 
                    href={experience.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-xs"
                  >
                    View Document
                  </a>
                )}
                
                {/* Close button */}
                <button 
                  onClick={() => onClose()}
                  className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ExperienceCard = ({ experience, isFirst, onImageClick, isMobile }) => {
  const handleClick = () => {
    if (isMobile) return;
    console.log("Image clicked for:", experience.title);
    if (typeof onImageClick === 'function') {
      onImageClick(experience);
    } else {
      console.error("onImageClick is not a function:", onImageClick);
    }
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        border: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* PDF Thumbnail above the text box */}
      <div className="flex flex-col">
        {/* Conditionally render "Click Me" message above the image */}
        {isFirst && (
          <div
            className="mb-2 bg-orange-500 text-white px-2 py-1 rounded cursor-pointer shadow-lg hover:bg-orange-600 transition text-center"
            onClick={() => {
              alert("Click the image to see more details!");
            }}
          >
            Click the images to see more!
          </div>
        )}
        
        <div className="mb-4 rounded-lg flex-grow border-2 border-orange-500">
          <div 
            onClick={handleClick}
            className="cursor-pointer hover:opacity-90 transition-opacity"
            style={{ position: 'relative' }}
          >
            <img
              src={experience.proj}
              alt={`Thumbnail for ${experience.title}`}
              className="w-full object-contain rounded"
              title="Click to view details"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                handleClick(); // Call handler directly
              }}
              style={{ cursor: 'pointer' }}
            />
            {/* Overlay to ensure click events work */}
            <div 
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // Stop propagation
                handleClick(); // Call handler directly
              }}
              style={{ pointerEvents: 'auto' }} // Force pointer events
            ></div>
          </div>
        </div>
      </div>

      {/* Experience box */}
      <div
        style={{
          background: "#1a1a1a",
          boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.07)",
          border: "2px solid #FF4500",
          backgroundImage: "linear-gradient(to bottom right, #1a1a1a, #2a2a2a)",
        }}
        className="p-4 rounded-lg flex-grow relative" // Added 'relative' for positioning
      >
        <h3 className="text-secondary text-[24px] font-bold">
          {experience.title}
        </h3>
        <p className="text-white-100 text-[16px] font-semibold mt-2">
          {experience.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = ({ isMobile }) => {
  // State to manage which experience modal is shown
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedExperienceDetail, setSelectedExperienceDetail] = useState(null);

  // Debug useEffect to track modal state changes
  useEffect(() => {
    console.log("Selected experience updated:", selectedExperience?.title || "none");
  }, [selectedExperience]);

  // Ensure textVariant is defined correctly and returns an object for animations
  const textVariant = () => {
    // Example variant, adjust as needed
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  };

  // Handler for opening the modal
  const handleImageClick = (experience) => {
    if (isMobile) return; // Disable modal on mobile
    console.log("handleImageClick called with:", experience.title);
    
    // Extract company name to match with the id in experienceDetails
    const companyId = experience.company_name.toLowerCase().includes('argonne') ? 'anl' :
                     experience.company_name.toLowerCase().includes('berkeley') ? 'lbnl' :
                     experience.company_name.toLowerCase().includes('livermore') ? 'llnl' :
                     experience.company_name.toLowerCase().includes('nasa') ? 'nasa' :
                     experience.company_name.toLowerCase().includes('los alamos') ? 'lanl' :
                     experience.company_name.toLowerCase().includes('renewable') ? 'nrel' :
                     experience.company_name.toLowerCase().includes('microsoft') ? 'microsoft' : '';
    
    // Find the matching detail
    const detail = experienceDetails.find(detail => detail.id === companyId);
    
    if (detail) {
      setSelectedExperienceDetail(detail);
      setSelectedExperience(experience);
      // Optional: Disable scrolling on the body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      console.error("No matching experienceDetail found for:", companyId);
      // Fallback to just showing the experience without details
      setSelectedExperience(experience);
      document.body.style.overflow = 'hidden';
    }
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    console.log("Closing modal");
    
    // Simply update the state - let React handle the DOM
    setSelectedExperience(null);
    setSelectedExperienceDetail(null);
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative">
      {/* Experience Section Content */}
      <div className="mt-10">
        <h2
          className={`${styles.sectionHeadText} text-center text-[40px] font-bold`}
          style={{ color: "#FF4500" }}
        >
          Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="mt-20 flex flex-col" style={{ transform: "scale(0.9)", transformOrigin: "center top" }}>
        <VerticalTimeline>
          {[...experiences].reverse().map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isFirst={index === 0} // Pass isFirst prop
              onImageClick={handleImageClick}
              isMobile={isMobile}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Modal component - renders in a portal to the document body */}
      {selectedExperience && 
        ReactDOM.createPortal(
          <ExperienceModal 
            experience={selectedExperience}
            experienceDetail={selectedExperienceDetail}
            onClose={handleCloseModal} 
          />,
          document.body  // Render directly to the body
        )
      }
    </div>
  );
};

export default SectionWrapper(Experience, "work");
