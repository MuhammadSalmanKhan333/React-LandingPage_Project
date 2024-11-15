import React, { useEffect, useContext } from "react";
import HeroSection from "./Components/HeroSection";
import { AppContext } from "./Context";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  const { updateHomePage } = useContext(AppContext);
  useEffect(() => {
    updateHomePage();
  }, []);
  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
