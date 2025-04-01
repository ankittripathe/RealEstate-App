import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "64c9ab25-04e4-4a55-b884-809052a9a080");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      // alert();
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div
      className=" container mx-auto text-center px-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
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
      <form
        onSubmit={onSubmitHandler}
        className="max-w-2xl mx-auto text-gray-600  pt-3 md:pt-8"
      >
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
              type="email"
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
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
