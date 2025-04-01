import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Project from "./Components/Project";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Project />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
