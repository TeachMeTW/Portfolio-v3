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

const rotatingEffect = {
  animate: {
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

const rotatingOpacityEffect = {
    animate: {
      rotate: [0, 4, -4, 0],
      opacity: [1, 0, 1],
      transition: {
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };
  const fadeOutInEffect = {
    animate: {
      opacity: [1, 0, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };
  
const pulsatingOpacityEffect = {
    animate: {
      opacity: [1, 0, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

const wavingEffect = {
  animate: {
    x: [0, 15, -15, 0],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

const Aki = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <Parallax pages={1} style={{ top: '0', left: '0' }} className="animation">
        
        <ParallaxLayer offset={0} speed={0.25}>
          <motion.div className="animation_layer parallax" id="aki-background" ></motion.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.005} speed={0.35}>
          <motion.div className="animation_layer parallax" id="aki-main" {...wavingEffect}></motion.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <motion.div className="animation_layer parallax" id="aki-side" {...subtleUpDownEffect}></motion.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <motion.div className="animation_layer parallax" id="aki-sat" {...rotatingEffect}></motion.div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Aki;
