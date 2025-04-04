import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="flex items-center w-full min-h-screen mb-4 overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >

    <Navbar />

      <div className="container px-6 py-4 mx-auto text-center text-white md:px-20 lg:px-32">
        <h2 className="inline-block max-w-3xl pt-20 text-5xl font-semibold sm:text-6xl md:text-[82px]">
          Explore homes that fit your dreams
        </h2>
        <div className="mt-16 space-x-6">
          <a href="#Projects" className="px-8 py-3 border border-white rounded">Projects</a>
          <a href="#Contact" className="px-8 py-3 bg-blue-500 border border-white rounded">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;


