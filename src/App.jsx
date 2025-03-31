import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Project from "./Components/Project";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="w-full overflow-hidden" >
      <Header />
      <About/>
      <Project/>
     <Testimonials/>
    </div>
  );
}

export default App;
