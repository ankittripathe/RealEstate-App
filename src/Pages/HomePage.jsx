import  { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import About from "../Components/About";
import Project from "../Components/Project";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const homeSection = document.getElementById("Header");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]); // triggers every time query param changes

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

export default HomePage;
