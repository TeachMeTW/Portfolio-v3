import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import 'animate.css';
import './ProjectCard.css'; // Importing the CSS file

const categories = {
  all: "All",
  EE: "EE",
  CPE: "CPE",
  CS: "CS",
  // Add other categories here
};

const ProjectCard = ({
  title,
  description,
  imgUrl,
  tags,
  githubUrl,
}) => {
  return (
    <div className="col size-12 col-sm-6 col-md-4">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className="proj-imgbx animate__animated animate__fadeIn">
          <img 
            src={imgUrl} 
            alt={title} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              display: 'block'
            }}
          />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="tags">
              {tags.map((tag, index) => (
                <span key={index} style={{ color: tag.color }}>
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
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
    <section className="project" id="projects">
      <div className="container">
        <div className="row">
          <div className="col size-12">
            <div className="animate__animated animate__fadeIn">
              <h2 className={`${styles.sectionHeadText} font-bold`} style={{ color: "#FF4500", fontSize: "40px" }}>
                Projects
              </h2>
              <p className="mt-4 mb-6 text-[#FFFFFF] text-[17px] max-w-3xl leading-[30px]">
                Following projects showcase my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos. It reflects my ability to
                solve complex problems, work with different technologies, and manage
                projects effectively. Please select whether you'd like to view CS, EE,
                CPE, or all projects!
              </p>

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

              <div className="row">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={`${selectedCategory}-${project.name}-${index}`}
                    title={project.name}
                    description={project.description}
                    imgUrl={project.image}
                    tags={project.tags}
                    githubUrl={project.source_code_link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");
