import React from "react";
import { testimonialsData } from "../assets/assets";
import star_icon from "../assets/star_icon.svg";

const Testimonials = () => {
  return (
    <div
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
              className="max-w-[280px] border-0 shadow-lg rounded px-6 py-6 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <h2 className="text-xl text-gray-700 font-medium">
                {testimonial.name}
              </h2>
              <p className="text-gray-500 mb-2 text-sm">{testimonial.title}</p>

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
    </div>
  );
};

export default Testimonials;
