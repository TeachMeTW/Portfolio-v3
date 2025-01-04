// src/components/Internships.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { internshipData } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const importAllImages = () => {
  // Import all images from src/assets/internship*/ folders with lowercase extensions
  const images = import.meta.globEager(
    "../assets/internship*/*.{png,jpg,jpeg,gif,svg}"
  );

  // Organize images by folder
  const imageMap = {};

  Object.keys(images).forEach((path) => {
    // Extract folder name using regex
    const match = path.match(/\/internship\d+\//);
    if (match) {
      const folder = match[0].split("/").filter(Boolean)[0];
      if (!imageMap[folder]) {
        imageMap[folder] = [];
      }
      const fileName = path.split("/").pop();
      imageMap[folder].push({
        src: images[path].default,
        name: fileName,
      });
    }
  });

  return imageMap;
};

const InternshipCard = ({
  index,
  title,
  description,
  logoFile,
  imageFolder,
  imageMap,
}) => {
  const [images, setImages] = useState([]);
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    if (imageMap && imageMap[imageFolder]) {
      const fetchedImages = imageMap[imageFolder];
      // Separate logo image from other images
      const logoImage = fetchedImages.find(
        (img) => img.name.toLowerCase() === logoFile.toLowerCase()
      );
      const otherImages = fetchedImages
        .filter((img) => img.name.toLowerCase() !== logoFile.toLowerCase())
        .map((img) => img.src);

      setImages(otherImages);
      if (logoImage) {
        setLogo(logoImage.src);
      } else {
        console.warn(`No logo image found for folder: ${imageFolder}`);
        setLogo(null);
      }
    } else {
      console.warn(`No images found for folder: ${imageFolder}`);
      setImages([]);
      setLogo(null);
    }
  }, [imageFolder, imageMap, logoFile]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Determine layout based on index for alternating pattern
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className={`flex flex-col ${
        isEven ? "sm:flex-row" : "sm:flex-row-reverse"
      } w-full my-8`}
    >
      {/* Image Carousel */}
      <div className="w-full sm:w-1/2 p-4">
        {images.length > 0 ? (
          <Slider {...settings}>
            {images.map((imgSrc, imgIndex) => (
              <div key={`img-${imgIndex}`} className="px-2">
                <img
                  src={imgSrc}
                  alt={`${title} screenshot ${imgIndex + 1}`}
                  className="object-cover rounded-md w-full h-64 sm:h-80"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-white">No images available for this internship.</p>
        )}
      </div>

      {/* Text Content with flicker & glitch */}
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-4">
        <div className="steinsgate-textbox glitch-box">
          <div className="flex items-center mb-4">
            {logo ? (
              <img
                src={logo}
                alt={`${title} logo`}
                className="w-16 h-16 object-contain rounded-md mr-4"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-500 rounded-md mr-4" />
            )}
            {/* Glitch text effect on the title */}
            <h3
              className="glitch-text text-2xl font-bold"
              data-text={title}   // used by pseudo-elements for glitch
            >
              {title}
            </h3>
          </div>
          <p className="mb-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const InternshipsCarousel = ({ internships, imageMap }) => {
  if (!internships || internships.length === 0) {
    return <p className="text-center text-white">No internships to display.</p>;
  }

  return (
    <div className="w-full">
      {internships.map((internship, index) => (
        <InternshipCard
          key={`internship-${index}`}
          index={index}
          {...internship}
          imageMap={imageMap}
        />
      ))}
    </div>
  );
};

const Internships = () => {
  const imageMap = importAllImages();

  // Debugging: Log the imageMap to verify imports
  console.log("Image Map:", imageMap);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} text-center text-[40px] font-bold`}
          style={{ color: "#FF4500" }}
        >
          Memories from Professional Work
        </h2>
      </motion.div>
      <InternshipsCarousel internships={internshipData} imageMap={imageMap} />
    </>
  );
};

export default SectionWrapper(Internships, "internships");
