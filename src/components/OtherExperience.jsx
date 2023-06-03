import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { clubs } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const OtherExperienceCard = ({ club }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "12px solid  #232631" }}
      date={club.date}
      iconStyle={{ background: club.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={club.icon}
            alt={club.company_name}
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >
      
      <div>
        <h3 className='text-white text-[24px] font-bold'>{club.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {club.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {club.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const OtherExperience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Educational
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Timeline
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {clubs.map((club, index) => (
            <OtherExperienceCard
              key={`experience-${index}`}
              club={club}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(OtherExperience, "edu");
