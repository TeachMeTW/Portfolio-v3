import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import resume from "../assets/resume.pdf";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} font-bold`}
          style={{ color: "#FF4500", fontSize: "40px" }}
        >
          Overview
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-[#FFFFFF] text-[17px] max-w-3xl leading-[30px]"
        >
          I am a passionate Computer Engineering student at California
          Polytechnic State University, San Luis Obispo, set to graduate in
          December 2025. With a robust foundation in Python and hands-on
          experience in C++ and Java, I thrive in dynamic environments where I
          can apply my technical skills to solve complex problems. I am actively
          seeking internship and full-time opportunities where I can contribute
          to innovative projects, collaborate with talented teams, and further
          develop my expertise in software development and engineering. My
          portfolio showcases a range of projects that demonstrate my ability to
          design, implement, and optimize solutions effectively. Feel free to
          explore my experiences and projects to learn more about my work and
          access my source code. I am excited to connect and discuss how I can
          add value to your team!
        </motion.p>
      </div>
      <div className="mt-5 flex space-x-4">
        <a
          href="https://github.com/teachmetw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white hover:text-[#FF4500] transition-colors w-6 h-6"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rsimpsontw/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white hover:text-[#FF4500] transition-colors w-6 h-6"
          />
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#FF4500] transition-colors"
        >
          View Resume
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
