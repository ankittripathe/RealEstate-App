import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import About from "./Components/About";
import Project from "./Components/Project";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Project />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
