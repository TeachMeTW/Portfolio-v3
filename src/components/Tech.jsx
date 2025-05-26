import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex items-center justify-center' key={technology.name}>
          <img 
            src={technology.icon} 
            alt={technology.name}
            className='w-20 h-20 object-contain hover:scale-110 transition-transform duration-300'
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
