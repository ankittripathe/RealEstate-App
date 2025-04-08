import React from "react";
import logo from "../assets/logo_dark.svg";
import { toast } from "react-toastify";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubscribe = async () => {
    if (!email) {
      return toast.error("Please enter a valid email");
    }

    if (!isValidEmail(email)) {
      return toast.error("Please enter a valid email address");
    }

    const formData = new FormData();
    formData.append("access_key", "64c9ab25-04e4-4a55-b884-809052a9a080");
    formData.append("email", email);

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        formData
      );
      if (response.data.success) {
        toast.success("Subscribed Successfully!");
        setEmail("");
      } else {
        toast.error("Subscription failed.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    // main
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-6 md:mb-0   flex flex-col items-center md:items-start">
          <img src={logo} alt="logo" />
          <p className="text-gray-400 mt-2 md:mt-3">
            Shaping the Future of Property
          </p>
        </div>

        <div className="w-full mb-6 md:w-1/5 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-1  text-center md:text-start">
            Company
          </h3>
          <ul className="flex flex-row justify-center md:justify-start md:flex-col gap-2 text-gray-400">
            <li>
              <a href="#Header" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#Privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-2 md:mb-3 text-center md:text-start">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 w-full md:max-w-90  text-center md:text-start">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button
              onClick={onSubscribe}
              className="py-2 px-4 rounded bg-blue-500 text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* copyright */}

      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        © 2025 AnkitTripathi.dev. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
