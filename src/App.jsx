import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import TestimonialPage from "./Pages/TestimonialPage";
import ContactPage from "./Pages/ContactPage";
import LoginSignupPage from "./Pages/LoginSignupPage";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
