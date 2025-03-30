import React from "react";

const About = () => {
  return (
    <div
      className=" flex flex-col justify-center items-center container mx-auto w-full p-14 md:p-20 lg:p-32 overflow-hidden"
      id="About">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About <span className="underline underline-offset-4 decoration-1 under font-light">Our Brand</span>
      </h1>
      {/* <p>Passionate About Properties, Dedicated to Your Vision</p> */}
      <p className="text-gray-500 max-w-80 text-center mb-8">Turning Dreams into Reality with Commitment and Care</p>
    </div>
  );
};

export default About;
