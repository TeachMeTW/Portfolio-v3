// Experience.jsx
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
// Removed duplicate textVariant import
// import { textVariant } from "../utils/motion"; // Already defined inside Experience component

const ExperienceCard = ({ experience, isFirst }) => {
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
      {/* Conditionally render "Click Me" Box for the first card */}
      {isFirst && (
        <div
          className="absolute top-0 left-0 mt-2 ml-2 bg-orange-500 text-white px-2 py-1 rounded cursor-pointer shadow-lg hover:bg-orange-600 transition"
          onClick={() => {
            // Define what happens when the "Click Me" box is clicked
            // For example, you might want to open a modal or navigate somewhere
            alert("Click the image not this button you 5head");
          }}
        >
          Click the images to see more!
        </div>
      )}

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
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isFirst={index === 0} // Pass isFirst prop
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
