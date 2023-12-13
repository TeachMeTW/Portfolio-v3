import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useState, useEffect } from "react";

const generateOrangeShades = (length) => {
  const shades = [];
  for (let i = 0; i < length; i++) {
    const shade = Math.floor((255 / length) * i);
    shades.push(`rgb(255, ${shade}, 0)`);
  }
  return shades;
};

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const toRotate = [
    "Computer Engineering Student",
    "Aspiring Software Developer",
    "Space Enthusiast",
    "Astrophysics Enjoyer",
  ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  const shadesOfOrange = generateOrangeShades(text.length);

  return (
    <section className={`relative w-full h-[35vh] mx-auto bg-primary`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 mb-0`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FFFFFF]' />
          <div className='w-1 sm:h-80 h-40 bg-[#FFFFFF]' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-secondary`}>
            Hi, I'm <span className='text-secondary'>Robin</span>
          </h1>
          <span className='typing text-secondary' style={{ fontSize: "69px" }}>
            {text.split('').map((char, index) => (
              <span key={index} style={{ color: shadesOfOrange[index] }}>
                {char}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
