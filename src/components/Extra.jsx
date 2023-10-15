import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { styles } from "../styles";
import { involv } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ClubCard = ({
  index,
  name,
  description,
  position,
  activities,
  image,  // This is the logo image
  galleryImages,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
        <div className='p-4' style={{ backgroundColor: '#333', textAlign: 'center', flex: 1 }}>
          <img
              src={image}
              alt='club_logo'
              className='object-cover rounded-md'
              style={{ width: '100%', height: '100%' }} // Logo will stretch to fill the container
          />
        </div>
        <div className='p-4' style={{ backgroundColor: '#333', textAlign: 'center', flex: 2 }}>
          <p className="text-base mb-2">{activities}</p>
        </div>
      </div>

      <a href={source_code_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {galleryImages && galleryImages.length > 0 && (
            <img
                src={galleryImages[0]}
                alt='club_main_image'
                className='object-cover rounded-md shadow-md'
                style={{ width: '100%', height: '100%' }} // Main image will also stretch to fill the container
            />
        )}
      </a>
    </motion.div>
  );
};

const ClubCarousel = ({ clubs }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    centerMode: true,
    centerPadding: '0'
  };

  return (
    <div style={{ width: '50%', margin: '0 auto'}}>
      <Slider {...settings}>
        {clubs.map((club, index) => (
          <ClubCard key={`club-${index}`} index={index} {...club} />
        ))}
      </Slider>
    </div>
  );
};



const Works = () => {
  const currentClubs = involv.filter(club => club.current);
  const previousClubs = involv.filter(club => !club.current);

  return (
    <>
      {/* <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center text-[40px] font-bold`} style={{ color: '#FF4500' }}>
          Current Clubs and Organizations
        </h2>
      </motion.div>
      <ClubCarousel clubs={currentClubs} /> */}

      <motion.div className="mt-10" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center text-[40px] font-bold`} style={{ color: '#FF4500' }}>
          Clubs, Organizations, and Extracurriculars
        </h2>
      </motion.div>
      <ClubCarousel clubs={previousClubs} />
    </>
  );
};

export default Works;
