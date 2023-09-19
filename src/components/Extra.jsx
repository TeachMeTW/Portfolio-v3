import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { involv } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <a href={source_code_link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px] flex justify-center items-center'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-contain rounded-2xl'
            />
          </div>

          <div className='mt-5'>
            <h3 className='text-[#FF4500] font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-[#FFFFFF] text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </a>
    </motion.div>
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

      <div className='mt-20 flex flex-wrap gap-7'>
        {currentClubs.map((club, index) => (
          <ProjectCard key={`club-${index}`} index={index} {...club} />
        ))}
      </div>

      <motion.div className="mt-10" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center text-[40px] font-bold`} style={{ color: '#FF4500' }}>
          Previous Clubs and Organizations
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {previousClubs.map((club, index) => (
          <ProjectCard key={`club-${index}`} index={index} {...club} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "extra");
