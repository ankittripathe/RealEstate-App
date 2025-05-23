import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="flex items-center w-full min-h-screen mb-4 overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container px-6 py-4 mx-auto text-center text-white md:px-20 lg:px-32 overflow-x-hidden"
      >
        <h2 className="inline-block max-w-3xl pt-20 text-5xl font-semibold sm:text-6xl md:text-[82px]">
          Explore homes that fit your dreams
        </h2>

        <div className="mt-16 space-x-6">
          <Link
            to="/projects"
            className="px-8 py-3 border border-white rounded"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 bg-blue-500 border border-white rounded"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
