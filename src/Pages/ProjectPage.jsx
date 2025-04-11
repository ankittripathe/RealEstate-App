import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import About from "../Components/About";
import Project from "../Components/Project";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const ProjectPage = () => {
  const location = useLocation();

  useEffect(() => {
    const projectSection = document.getElementById("Projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
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

export default ProjectPage;
