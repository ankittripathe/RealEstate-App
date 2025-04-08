import React from "react";
import { assetsCollection } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className=" flex flex-col items-center justify-center container mx-auto p-14 md:p20 lg:p-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 lg:max-w-80 md:max-w-100 text-center mb-8">
        Passionate About Proprties, Dedicated to Your Vision
      </p>

      {/* 2nd main div */}
      <div className="flex flex-col items-center  lg:flex-row lg:items-start md:gap-5 lg:gap-20">
        <img
          src={assetsCollection.brand_img}
          className="w-full  max-w-lg md:mt-10 lg:mt-0"
          alt=""
        />

        <div className="flex flex-col items-center  md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Project Completed</p>
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
          <p className="my-6 max-w-lg">
            Passionate About Properties, Dedicated to Your Vision With over 10
            years of excellence in the real estate industry, we take pride in
            delivering exceptional results. We have successfully completed 12+
            projects and delivered 20+ million square feet of property, with 25+
            ongoing projects that reflect our commitment to quality and client
            satisfaction. At our company, we believe in turning your dreams into
            reality. Our dedicated team works closely with you to understand
            your vision and ensure that every detail aligns with your goals. Let
            us help you find your perfect property!
          </p>
          <button className="bg-blue-600 text-white rounded px-8 py-2 md:mx-auto lg:mx-0">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
