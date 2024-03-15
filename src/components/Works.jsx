import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const categories = {
  all: "All",
  EE: "EE",
  CPE: "CPE",
  CS: "CS",
  // Add other categories here
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="sm:w-[360px] w-full"
      key={index}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-2xl overflow-hidden"
      >
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-decoration-none"
        >
          <div className="p-4">
            {" "}
            {/* Padding applied to the entire card content */}
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-[#FF4500] font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-[#FFFFFF] text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => (
                <p
                  key={`${name}-${tag.name}-${tagIndex}`}
                  style={{ color: tag.color }}
                  className="text-[14px] font-bold"
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </a>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories.all);

  // Ensuring the filtering logic is correct
  const filteredProjects = projects.filter((project) => {
    // If 'All' is selected, return all projects
    if (selectedCategory === categories.all) {
      return true;
    }
    // Otherwise, return projects that match the selected category
    return project.category === selectedCategory;
  });
  return (
    <>
      <div>
        <h2
          className={`${styles.sectionHeadText} font-bold`}
          style={{ color: "#FF4500", fontSize: "40px" }}
        >
          Projects
        </h2>
      </div>

      <div className="w-full flex">
        <p
         
          className="mt-4 mb-6 text-[#FFFFFF] text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively. Please select whether you'd like to view CS, EE,
          CPE, or all projects!
        </p>
      </div>

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

      <div className="mt-20 flex flex-wrap gap-7">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={`${selectedCategory}-${project.name}-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
