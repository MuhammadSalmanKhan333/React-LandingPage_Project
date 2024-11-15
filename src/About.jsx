import React, { useEffect, useContext } from "react";
import HeroSection from "./Components/HeroSection";
import { AppContext } from "./Context";

const About = () => {
  const { udpateAboutPage } = useContext(AppContext);
  useEffect(() => {
    udpateAboutPage();
  }, []);
  return <HeroSection />;
};

export default About;
