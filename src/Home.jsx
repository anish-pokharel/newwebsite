import React, { useEffect } from "react";
import HeroSection from "../src/components/HeroSection";
import { useGlobalContext } from "./Context";
import Service from "./Service";
import Contact from "./Contact";

const Home = () => {
  // const data = {
  //   name: "Anish Pokharel",
  //   image: "./images/hero.svg",
  // };
  const { updateHomePage } = useGlobalContext();
  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Service />
      <Contact />
    </>
  );
};

export default Home;
