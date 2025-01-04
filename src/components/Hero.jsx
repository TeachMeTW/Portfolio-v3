import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useState, useEffect } from "react";

const generateOrangeShades = (length) => {
  const shades = [];
  const maxShades = 100; // Prevent excessive shades
  const actualLength = Math.min(length, maxShades);
  for (let i = 0; i < actualLength; i++) {
    const shade = Math.floor((255 / actualLength) * i);
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
    "John Microsoft",
    "John DOE",
    "Government Merchant",
    "I am the World Ender (Aatrox)",
    "Division 2 Top Laner for SLO Esports (Peaked Iron)",
    "El Psy Congroo",
    "Sushi addict -- Eel is the best",
    "I order ramen but dont eat the noodles (unless its udon)",
    "This is the choice of Steins Gate",
    "Why are you still reading this",
    "Yes I work(ed) for NASA",
    "Love Joji's music (depressionmaxx)",
    "PSYQUI goes hard",
    "Used to be top 50 World in For Honor",
    "I wish time travel was real -- I'd go back to 2020",
    "Ixion is my favorite space game",
    "Kassadin looks so cool",
    "A masterchef in theory",
    "This site is nixie tube themed",
    "Did I mention I love mechs?",
    "Armored Core VI was pretty cool",
    "I should really stop now",
    "I used to be good at osu!",
    "Check out my linkedin recommendations -- its true",
    "🤫🧏‍♂️",
  ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

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
    <section className="relative w-full mx-auto bg-custom-background min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-secondary">
            Hi, I'm <span className="text-secondary">Robin</span>
          </h1>
          <span
            className="typing text-secondary"
            style={{ fontSize: "clamp(16px, 4.3vw, 32px)" }}
          >
            {text.split("").map((char, index) => (
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
