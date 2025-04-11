import React, { useEffect, useState } from "react";
import { assetsCollection } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false); // toogle

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scrolling behavior
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto bg-transparent md:px-20 lg:px-32">
        {/* logo */}
        <div className="flex gap-1.5 text-white">
          <img src={assetsCollection.logo} alt="Logo" />
          <h1 className="text-3xl font-semibold">NexusHome</h1>
        </div>

        <ul className="hidden text-white md:flex gap-7">
          <Link to="/" className="cursor-pointer hover:text-gray-400">
            Home
          </Link>

          <Link to="/about" className="cursor-pointer hover:text-gray-400">
            About
          </Link>

          <Link to="/projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </Link>

          <Link
            to="/testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </Link>
        </ul>

        <Link to="/login">
          <button className="hidden px-8 py-2 bg-white rounded-full md:block">
            Sign up
          </button>
        </Link>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assetsCollection.menu_icon}
          className="w-7 md:hidden"
          alt="MenuIcon"
        />
      </div>

      {/* --- mobile-menu --- */}
      <div
        className={`md:hidden ${showMobileMenu ? "fixed h-screen w-full" : "hidden"} top-0 right-0 bottom-0 cursor-pointer bg-blue-100 transition-all`}
      >
        <div className="flex justify-end pt-6 pr-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assetsCollection.cross_icon}
            className="w-6 cursor-pointer"
            alt="Icon"
          />
        </div>
        <ul className="flex flex-col items-center gap-6 px-5 mt-5 text-3xl font-medium">
          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/"
            className="inline-block py-2 transition duration-100 ease-in-out rounded-full px-9 hover:bg-emerald-700"
          >
            Home
          </Link>

          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/about"
            className="inline-block py-2 transition duration-100 ease-in-out rounded-full px-9 hover:bg-emerald-700"
          >
            About
          </Link>

          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/projects"
            className="inline-block py-2 transition duration-100 ease-in-out rounded-full px-9 hover:bg-emerald-700"
          >
            Projects
          </Link>

          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/testimonials"
            className="inline-block py-2 transition duration-100 ease-in-out rounded-full px-9 hover:bg-emerald-700"
          >
            Testimonials
          </Link>

          <Link
            onClick={() => setShowMobileMenu(false)}
            to="/login"
            className="inline-block py-2 transition duration-100 ease-in-out rounded-full px-9 hover:bg-emerald-700"
          >
            Signup
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
