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
    "Astrophysics Enjoyer",
    "Literally Okabe Rintarou",
    "I am the World Ender (Aatrox)",
    "Division 2 Top Laner for SLO Esports (Peaked Iron)",
    "El Psy Congroo",
    "I like Initial D (Also MF Ghost)",
    "Sushi addict -- Eel is the best",
    "I order ramen but dont eat the noodles (unless its udon)",
    "...con lentitud poderosa",
    "Python Supremacy",
    "This is the choice of Steins Gate",
    "Why are you still reading this",
    "Yes I work(ed) for NASA",
    "Love Joji's music (depressionmaxx)",
    "My spotify playlist covers are all from Metal Gear",
    "Vivy is the best anime of 2021",
    "PSYQUI goes hard",
    "Bling-Bang-Bang-Born",
    "I just want a GT86 (or an AE86)",
    "Used to be top 50 World in For Honor",
    "I wish time travel was real -- I'd go back to 2020",
    "Ixion is my favorite space game",
    "Kassadin looks so cool",
    "I should start reading more books -- like 'The Art of Living A Meaningless Existence'",
    "A masterchef in theory",
    "This site is nixie tube themed",
    "Did I mention I love mechs?",
    "Armored Core VI was pretty cool",
    "I should really stop now",
    "I used to be good at osu!",
    "Check out my linkedin recommendations -- its true",
    "🤫🧏‍♂️"
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
<section className="relative w-full mx-auto bg-primary" style={{ height: '50vh' }}>
  <div
    className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 mb-0`}
  >


    <div>
      <h1 className={`${styles.heroHeadText} text-secondary`}>
        Hi, I'm <span className='text-secondary'>Robin</span>
      </h1>
      <span className='typing text-secondary' style={{ fontSize: "4.3vw" }}>
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
