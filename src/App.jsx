import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Project from "./Components/Project";

function App() {
  return (
    <div className="w-full overflow-hidden" >
      <Header />
      <About/>
      <Project/>
    </div>
  );
}

export default App;
