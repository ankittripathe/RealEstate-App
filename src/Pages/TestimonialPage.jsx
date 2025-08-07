import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import About from "../Components/About";
import Project from "../Components/Project";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const TestimonialPage = () => {
  const location = useLocation();

  useEffect(() => {
    const testimonialSection = document.getElementById("Testimonials");
    if (testimonialSection) {
      testimonialSection.scrollIntoView({ behavior: "smooth" });
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

export default TestimonialPage;
