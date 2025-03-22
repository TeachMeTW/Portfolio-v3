import React, { useState, useEffect, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import 'animate.css';
import './ProjectCard.css'; // Importing the CSS file

// Project Modal component for displaying project details
const ProjectModal = ({ project, onClose }) => {
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
  }, [onClose]);

  // State for carousel and fullscreen
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  
  // Create an array of images for the carousel
  const carouselImages = useMemo(() => {
    // If the project has a galleryImages array, use that
    if (project.galleryImages && project.galleryImages.length > 0) {
      return project.galleryImages;
    }
    // Otherwise, just use the main project image
    return [project.image];
  }, [project]);
    
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

  if (!project) return null;
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 project-modal-container" 
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
          {/* Container that matches dimensions and position */}
          <div 
            style={{
              width: 'calc(100vw - 500px)',
              height: 'calc(100vh - 200px)',
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
              className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-[1002]"
            >
              ×
            </button>
            
            {/* Only render the current image in fullscreen mode */}
            <img
              src={carouselImages[currentSlide]}
              alt={`${project.name} fullscreen`}
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
            
            {/* Controls inside the frame */}
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
              {/* Header with project info */}
              <div className="mb-4">
                <h3 className="text-[22px] font-bold text-orange-500">{project.name}</h3>
                <p className="text-[15px] font-semibold text-white">{project.category}</p>
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
                      alt={`${project.name} project ${currentSlide + 1}`}
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
              
              {/* Thumbnail Strip for quick navigation - Only show if there are multiple images */}
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
              {/* Project Description */}
              <div className="mb-3">
                <h4 className="text-[16px] font-semibold text-orange-500 mb-1">About</h4>
                <p className="text-white text-[13px] tracking-wider">
                  {project.description}
                </p>
              </div>
              
              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-[16px] font-semibold text-orange-500 mb-1">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={`tag-${index}`} 
                        className="bg-gray-800 text-white px-2 py-0.5 text-xs rounded-full"
                        style={{ color: tag.color }}
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Links and buttons */}
              <div className="flex justify-between items-center mt-6">
                {/* Link to the project */}
                {project.source_code_link && (
                  <a 
                    href={project.source_code_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-xs"
                  >
                    View Project
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

const categories = {
  all: "All",
  EE: "EE",
  CPE: "CPE",
  CS: "CS",
  // Add other categories here
};

const ProjectCard = ({
  project,  // Pass the entire project object
  onImageClick,  // Click handler for opening the modal
}) => {
  return (
    <div className="col size-12 col-sm-6 col-md-4">
      <div 
        className="proj-imgbx animate__animated animate__fadeIn cursor-pointer"
        onClick={() => onImageClick(project)}
      >
        <img 
          src={project.image} 
          alt={project.name} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            display: 'block'
          }}
        />
        <div className="proj-txtx">
          <h4>{project.name}</h4>
          <span>{project.description}</span>
          <div className="tags">
            {project.tags.map((tag, index) => (
              <span key={index} style={{ color: tag.color }}>
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories.all);
  const [selectedProject, setSelectedProject] = useState(null);

  // Ensuring the filtering logic is correct
  const filteredProjects = projects.filter((project) => {
    // If 'All' is selected, return all projects
    if (selectedCategory === categories.all) {
      return true;
    }
    // Otherwise, return projects that match the selected category
    return project.category === selectedCategory;
  });

  // Handler for opening the modal
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Disable scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="project" id="projects">
      <div className="container">
        <div className="row">
          <div className="col size-12">
            <div className="animate__animated animate__fadeIn">
              <h2 className={`${styles.sectionHeadText} font-bold`} style={{ color: "#FF4500", fontSize: "40px" }}>
                Projects
              </h2>
              <p className="mt-4 mb-6 text-[#FFFFFF] text-[17px] max-w-3xl leading-[30px]">
                Following projects showcase my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos. It reflects my ability to
                solve complex problems, work with different technologies, and manage
                projects effectively. Please select whether you'd like to view CS, EE,
                CPE, or all projects!
              </p>

              {/* Dropdown for selecting categories */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mb-5 p-2 rounded-md"
              >
                {Object.keys(categories).map((key) => (
                  <option key={key} value={categories[key]}>
                    {categories[key]}
                  </option>
                ))}
              </select>

              <div className="row">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={`${selectedCategory}-${project.name}-${index}`}
                    project={project}
                    onImageClick={handleProjectClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal component - renders in a portal to the document body */}
      {selectedProject && 
        ReactDOM.createPortal(
          <ProjectModal 
            project={selectedProject}
            onClose={handleCloseModal} 
          />,
          document.body  // Render directly to the body
        )
      }
    </section>
  );
};

export default SectionWrapper(Works, "");
