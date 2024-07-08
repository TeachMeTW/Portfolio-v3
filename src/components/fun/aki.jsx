import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Aki() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const akiY = useTransform(scrollYProgress, [0, 1], ["-75%", "150%"]); // Transform for aki.png

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY, color: '#302920' }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
        
      >
    
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/back.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/aki.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: akiY, // Apply vertical animation
        }}
      />
    </div>
  );
}
