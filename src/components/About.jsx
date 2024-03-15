import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import resume from "../assets/resume.pdf"



const About = () => {
  return (
    <>

    <motion.div variants={textVariant()} >

    <h2 className={`${styles.sectionHeadText} font-bold`} style={{ color: '#FF4500', fontSize: '40px' }}>Overview</h2>

    </motion.div>

    <div className='w-full flex'>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-[#FFFFFF] text-[17px] max-w-3xl leading-[30px]'
    >
      I'm a Computer Engineer studying at California Polytechnic State San Luis Obispo.
        My main techstack would be Python, but I have used C++ and Java in the past. Feel free to click on my experiences and projects to learn more about my works and see source code!
    </motion.p>
    </div>
    <div className="mt-5 flex space-x-4">
      <a href="https://github.com/teachmetw" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-white hover:text-[#FF4500] transition-colors w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/in/rsimpsontw/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-[#FF4500] transition-colors w-6 h-6" />
      </a>
      <a href={resume} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500] transition-colors">
        View Resume
      </a>
    </div>


    </>
  );
};

export default SectionWrapper(About, "about");
