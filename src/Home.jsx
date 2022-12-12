import React from "react";
import HeroSection from "../src/components/HeroSection";

const Home = () => {
  const data = {
    name: "Anish Pokharel",
    image: "./images/hero.svg",
  };
  return (
    <>
      <HeroSection {...data} />
    </>
  );
};

export default Home;
