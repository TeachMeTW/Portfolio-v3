import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import '../../App.css';

const subtleBreathingEffect = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

const subtleUpDownEffect = {
  animate: {
    y: [0, -12, 0, 12, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

const Personal = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <Parallax pages={1} style={{ top: '0', left: '0' }} className="animation">
        
        <ParallaxLayer offset={0} speed={0.25}>
          <motion.div className="animation_layer parallax" id="background" ></motion.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.005} speed={0.35}>
          <motion.div className="animation_layer parallax" id="main" {...subtleBreathingEffect}></motion.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <motion.div className="animation_layer parallax" id="top" {...subtleUpDownEffect}></motion.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <motion.div className="animation_layer parallax" id="bot" {...subtleUpDownEffect}></motion.div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Personal;
