import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "karthik Pokharel",
    image: "./images/about1.svg",
  };
  return (
    <>
      <HeroSection {...data} />
    </>
  );
};

export default About;
