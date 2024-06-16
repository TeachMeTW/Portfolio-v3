import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SectionWrapper } from "../hoc";
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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} 
      className="flex flex-col sm:flex-row w-full">
      
      {/* Image Container */}
      <div className="w-full sm:w-1/2">
        <div className="p-4 bg-[#333] text-center">
          <img
              src={galleryImages}
              alt="club_logo"
              className="object-cover rounded-md w-full"
              style={{ height: 'auto', aspectRatio: '1 / 1' }} // Adjust aspect ratio as needed
          />
        </div>
      </div>
      
      {/* Text Content Container */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center p-4 bg-[#333]">
        <a href={source_code_link} target="_blank" rel="noopener noreferrer" 
          className="text-base mb-2 text-white no-underline hover:underline">
            <img
              src={image}
              alt="club_logo"
              className="object-cover rounded-md w-full"
              style={{ height: 'auto', aspectRatio: 'auto' }} // Adjust aspect ratio as needed
          />
          {activities}
        </a>
      </div>
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
    <div style={{ width: '80%', margin: '0 auto'}}>
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
export default SectionWrapper(Works, "extra");
