import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import About from "../Components/About";
import Project from "../Components/Project";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <About />
      <Project />
      <Testimonials />
      <Contact />
    </>
  );
};

export default AboutPage;
