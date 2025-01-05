import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
const PoliceTapeHero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4"
      style={{
        background: `
          repeating-linear-gradient(
            45deg,
            #FF4500 0 20px,
            #000000 20px 40px
          )
        `,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 text-center">
      <h1
  className="text-4xl md:text-6xl lg:text-8xl text-white font-bold"
  style={{
    textShadow: `
      2px 2px 0 black, 
      -2px 2px 0 black, 
      2px -2px 0 black, 
      -2px -2px 0 black, 
      2px 0 0 black, 
      -2px 0 0 black, 
      0 2px 0 black, 
      0 -2px 0 black
    `,
  }}
>
  Under Construction
</h1>
<p
  className="text-white text-xl md:text-2xl lg:text-3xl mt-4"
  style={{
    textShadow: `
      1px 1px 0 black, 
      -1px 1px 0 black, 
      1px -1px 0 black, 
      -1px -1px 0 black, 
      1px 0 0 black, 
      -1px 0 0 black, 
      0 1px 0 black, 
      0 -1px 0 black
    `,
  }}
>
  What lies beyond here is the void...
</p>

      </div>
    </section>
  );
};

export default SectionWrapper(PoliceTapeHero, "next");
