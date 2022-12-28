import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./Context";

const About = () => {
  // const data = {
  //   name: "karthik Pokharel",
  //   image: "./images/about1.svg",
  // };
  const { updateAboutPage } = useGlobalContext();
  useEffect(() => updateAboutPage(), []);
  return (
    <>
      <HeroSection />
    </>
  );
};

export default About;
