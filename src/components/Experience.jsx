import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
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
      <div className="mb-4 rounded-lg flex-grow border-2 border-orange-500">
        <a href={experience.link} target="_blank" rel="noopener noreferrer">
          <img
            src={experience.proj}
            alt={`Thumbnail for ${experience.title}`}
            className="w-full object-contain rounded cursor-pointer"
            title="Click to view/download PDF"
          />
        </a>
      </div>

      {/* Experience box */}
      <div
        style={{
          background: "#1a1a1a",
          boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.07)",
          border: "2px solid #FF4500",
          backgroundImage: "linear-gradient(to bottom right, #1a1a1a, #2a2a2a)",
        }}
        className="p-4 rounded-lg flex-grow"
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

const Experience = () => {
  // Ensure textVariant is defined correctly and returns an object for animations
  const textVariant = () => {
    // Example variant, adjust as needed
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  };

  return (
    <>
      {/* Render the motion.div with h2 first */}
      <motion.div initial="hidden" animate="visible" variants={textVariant()}>
        <h2
          className="text-center text-[40px] font-bold"
          style={{ color: "#FF4500" }}
        >
          Experience
        </h2>
      </motion.div>

      {/* Then render the timeline */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
