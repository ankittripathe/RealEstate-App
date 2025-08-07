import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import About from "../Components/About";
import Project from "../Components/Project";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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

export default ContactPage;
