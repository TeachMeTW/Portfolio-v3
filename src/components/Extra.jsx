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
  image,
  galleryImages,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} style={{ width: '100%', display: 'flex' }}>
      <a href={source_code_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '100%', display: 'flex' }}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl w-full flex'
        >
        {/* Left Section - Main Image */}
        <div className='w-1/3 h-[230px] flex justify-center items-center p-4'>
            <img
                src={image}
                alt='club_main_image'
                className='max-w-full max-h-full object-contain rounded-md shadow-md'
            />
        </div>

        {/* Middle Section - Details */}
        <div className='w-1/3 h-[230px] flex flex-col justify-center items-start p-4'>
            <h3 className="text-2xl font-bold mb-3 text-nixie">{name}</h3> {/* Adjusted for the nixie tube color */}
            <p className="text-base mb-2">{position}</p>
            <p className="text-sm mb-2 overflow-hidden" style={{ maxHeight: '2.5rem' }}>{description}</p>
            <p className="text-sm overflow-hidden" style={{ maxHeight: '2.5rem' }}>{activities}</p>
        </div>

        {/* Right Section - Gallery Image */}
        <div className='w-1/3 h-[230px] flex justify-center items-center p-4'>
            {galleryImages && galleryImages.length > 0 && (
                <img
                    src={galleryImages[0]}
                    alt='club_gallery_image'
                    className='w-full h-full object-contain rounded-md shadow-md'
                />
            )}
        </div>

        </Tilt>
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
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0'
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
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
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center text-[40px] font-bold`} style={{ color: '#FF4500' }}>
          Current Clubs and Organizations
        </h2>
      </motion.div>
      <ClubCarousel clubs={currentClubs} />

      <motion.div className="mt-10" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center text-[40px] font-bold`} style={{ color: '#FF4500' }}>
          Previous Clubs and Organizations
        </h2>
      </motion.div>
      <ClubCarousel clubs={previousClubs} />
    </>
  );
};

export default Works;
