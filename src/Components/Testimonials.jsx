import React from "react";
import { testimonialsData } from "../assets/assets";
import star_icon from "../assets/star_icon.svg";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Real Stories from Those Who Found Home With Us
      </p>

      <div className="flex flex-wrap justify-center gap-8 ">
        {testimonialsData.map((testimonial, index) => {
          return (
            <div
              key={index}
              className="max-w-[320px] border-0 shadow-lg rounded px-9 py-10 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-24 h-24 rounded-full mx-auto mb-3"
              />
              <h2 className="text-xl text-gray-700 font-medium">
                {testimonial.name}
              </h2>
              
              <p className="text-gray-500 mb-2 text-sm">
                {testimonial.title}
              </p>

              {/* doubt */}
              <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({ length: testimonial.rating }, (item, index) => {
                  return (
                    <img
                      key={index}
                      src={star_icon}
                      alt="Star Rating"
                      className="inline-block w-5 h-5 m-1"
                    />
                  );
                })}
              </div>
              <p className="text-gray-600 ">{testimonial.text}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Testimonials;
