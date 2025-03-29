import React, { useEffect, useState } from "react";
import { assetsCollection } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return ()=>{
       document.body.style.overflow = 'auto'
    }
  },[showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6  md:px-20  lg:px-32 bg-transparent">
        <img src={assetsCollection.logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400" >Testimonials</a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>
        <img
        onClick={()=>setShowMobileMenu(true)}
         src={assetsCollection.menu_icon} 
         alt="MenuIcon" className="md:hidden w-7"/>
      </div>

      {/* ------ mobile-menu ------ */}
      <div className={`md:hidden ${showMobileMenu ? " fixed w-full h-screen" : "hidden"} top-0 right-0 bottom-0 bg-white transition-all cursor-pointer `}>  

        <div className="flex justify-end pt-6 pr-6">
          <img 
          onClick={()=>setShowMobileMenu(false)}
          src={assetsCollection.cross_icon}
          className="w-6 cursor-pointer"
          alt="Icon"/>
        </div>
        <ul className="flex flex-col items-center gap-6 mt-5 px-5 text-3xl font-medium">
          <a href="#Header" className="px-9 py-2 rounded-full inline-block hover:bg-emerald-700 transition duration-100 ease-in-out">Home</a>
          <a href="#About" className="px-9 py-2 rounded-full inline-block hover:bg-emerald-700 transition duration-100 ease-in-out">About</a>
          <a href="#Projects" className="px-9 py-2 rounded-full inline-block hover:bg-emerald-700 transition duration-100 ease-in-out">Projects</a>
          <a href="#Testimonials" className="px-9 py-2 rounded-full inline-block hover:bg-emerald-700 transition duration-100 ease-in-out">Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
