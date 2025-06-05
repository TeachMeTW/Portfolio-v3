import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { involv } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Club Modal component for displaying club details
const ClubModal = ({ club, onClose }) => {
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
    // If the club has a galleryImages array, use that
    if (club.galleryImages && club.galleryImages.length > 0) {
      return club.galleryImages;
    }
    // Otherwise, just use the main club image
    return [club.image];
  }, [club]);
    
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

  if (!club) return null;
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 club-modal-container" 
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
            <img
              src={carouselImages[currentSlide]}
              alt={`${club.name} fullscreen`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
            
            {/* Close button inside the modal container */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center z-[1002]"
            >
              ✕
            </button>
          </div>
          
          {/* Navigation controls for fullscreen mode */}
          {carouselImages.length > 1 && (
            <>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-1/4 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 text-2xl z-[1001]"
                style={{ transform: 'translateX(-60px)' }}
              >
                &#8249;
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-1/4 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 text-2xl z-[1001]"
                style={{ transform: 'translateX(60px)' }}
              >
                &#8250;
              </button>
            </>
          )}
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
              {/* Header with club info */}
              <div className="mb-4">
                <h3 className="text-[22px] font-bold text-orange-500">{club.name}</h3>
                {club.position && (
                  <p className="text-[15px] font-semibold text-white">{club.position}</p>
                )}
              </div>
              
              {/* Image Carousel */}
              <div className="rounded-lg border-2 border-orange-500 relative overflow-hidden group" style={{ height: "300px" }}>
                {/* Only render the current slide for better performance */}
                <div 
                  key={`slide-${currentSlide}`}
                  className="carousel-slide absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-100 z-10"
                >
                  <img
                    src={carouselImages[currentSlide]}
                    alt={`${club.name} ${currentSlide + 1}`}
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
                      className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 z-20 text-sm opacity-70 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="transform scale-125">⤢</span>
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnails for quick navigation */}
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
              <div className="prose prose-sm prose-invert max-w-none">
                <div className="text-gray-300 mb-4">
                  <p className="mb-2">{club.activities}</p>
                </div>
                
                {club.tags && club.tags.length > 0 && (
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {club.tags.map((tag, index) => (
                        <span 
                          key={`tag-${index}`} 
                          className="px-2 py-1 text-xs rounded bg-gray-700 text-gray-200"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Club logo at the bottom of details */}
                <div className="mt-4 max-w-[200px]">
                  <img 
                    src={club.image} 
                    alt={`${club.name} logo`} 
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                {/* Link to the club */}
                {club.source_code_link && (
                  <a 
                    href={club.source_code_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-xs"
                  >
                    Visit Website
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

const ClubCard = ({
  index,
  club,  // Pass the entire club object
  onImageClick,  // Click handler for opening the modal
}) => {
  return (
    <div className="px-4">
      <div 
        className="proj-imgbx animate__animated animate__fadeIn cursor-pointer"
        onClick={() => onImageClick(club)}
        style={{ 
          height: "350px",
          maxWidth: "500px",
          margin: "0 auto"
        }}
      >
        <div className="bg-gray-800 h-full flex items-center justify-center">
          <img 
            src={club.image} 
            alt={club.name} 
            style={{
              maxWidth: '85%',
              maxHeight: '85%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>
        <div className="proj-txtx">
          <h4 className="text-xl">{club.name}</h4>
          {club.position && <span className="text-lg">{club.position}</span>}
          {club.activities && (
            <span className="mt-2 text-base line-clamp-3">
              {club.activities.length > 100 
                ? `${club.activities.substring(0, 100)}...` 
                : club.activities}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ClubCarousel = ({ clubs, isMobile }) => {
  const [selectedClub, setSelectedClub] = useState(null);

  // Handler for opening the modal
  const handleClubClick = (club) => {
    if (isMobile) return; // Disable modal on mobile
    setSelectedClub(club);
    // Disable scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setSelectedClub(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    centerMode: false,
    arrows: true,
    autoplay: false,
    initialSlide: 0 // Start with the latest entry (first item in the array)
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', marginTop: '2rem' }}>
      <Slider {...settings}>
        {clubs.map((club, index) => (
          <ClubCard 
            key={`club-${index}`} 
            index={index} 
            club={club} 
            onImageClick={handleClubClick} 
          />
        ))}
      </Slider>
      
      {/* Modal component - renders in a portal to the document body */}
      {selectedClub && 
        ReactDOM.createPortal(
          <ClubModal 
            club={selectedClub}
            onClose={handleCloseModal} 
          />,
          document.body  // Render directly to the body
        )
      }
    </div>
  );
};

const Works = ({ isMobile }) => {
  // Combine all clubs into a single array
  const allClubs = involv;

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center text-[40px] font-bold`} style={{ color: '#FF4500' }}>
          Clubs, Organizations, and Extracurriculars
        </h2>
        <p className="mt-4 mb-6 text-[#FFFFFF] text-[17px] max-w-3xl mx-auto leading-[30px] text-center">
          Here are the various clubs, organizations, and extracurricular activities I've been involved with. 
          Click on any card to see more details.
        </p>
      </motion.div>
      
      <ClubCarousel clubs={allClubs} isMobile={isMobile} />
    </>
  );
};

export default SectionWrapper(Works, "extra");
