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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        eligendi, velit nesciunt molestiae quas mollitia maxime excepturi
        pariatur repellendus facere, et officia blanditiis aspernatur, est
        temporibus? Ea voluptatibus laudantium nobis?
      </p>
    </>
  );
};

export default About;
