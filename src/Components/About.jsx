import React from "react";
import { assetsCollection } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col justify-center items-center container mx-auto w-full p-14 md:p-20 lg:p-32  overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>

      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      {/* Image */}
      <div className="flex flex-col items-center md:flex-row md:items-start md:gap-20">
        <img
          src={assetsCollection.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />

        <div className="bg-amber-300 flex flex-col items-center">
          <div>
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
