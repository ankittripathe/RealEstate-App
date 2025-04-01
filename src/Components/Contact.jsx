import React from "react";

const Contact = () => {
  return (
    <div
      className=" container mx-auto text-center px-6 py-20 lg:px-32 w-full overflow-hidden "
      id="Contac"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>
      {/* form section */}

      <form className="max-w-2xl mx-auto text-gray-600  pt-3 md:pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left text-lg">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-2 px-2 mt-2 mb-4"
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4 text-lg">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-2 px-2 mt-2"
              type="password"
              name="Email"
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>
        {/* message */}
        <div className="my-6 text-left text-lg">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-2 px-2 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-10 mb-10 rounded">
           Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
