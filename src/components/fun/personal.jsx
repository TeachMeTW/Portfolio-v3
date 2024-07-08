import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Personal = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const mainY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const topY = useTransform(scrollYProgress, [0, 1], ["-50%", "400%"]);
  const bottomY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div>
      <div
        ref={ref}
        className="w-full h-screen overflow-hidden relative grid place-items-center"
      >
        <motion.h1
          style={{ y: bottomY }}
          className="font-bold text-white text-7xl md:text-9xl relative z-10"
        >
          
        </motion.h1>

        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/image-full.jpg)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(/image-top.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: topY,
          }}
        />
        <motion.div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(/image-main.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mainY,
          }}
        />
        <motion.div
          className="absolute inset-0 z-30"
          style={{
            backgroundImage: `url(/image-bottom.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: bottomY,
          }}
        />
      </div>
      <motion.div
        style={{
          opacity: scrollYProgress,
          display: scrollYProgress >= 1 ? "block" : "none",
        }}
      >
      </motion.div>
    </div>
  );
};

export default Personal;
