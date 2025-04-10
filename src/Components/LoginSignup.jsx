import React, { useState } from "react";

const LoginSignup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Form submitted");
    setUserName("");
    setEmail("");
    setPassword("");
    setAgreeTerms(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="w-full min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md bg-pink-100 p-8 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              value={username}
              placeholder="Your Name"
              onChange={(e) => setUserName(e.target.value)}
              required
              className="h-14 px-4 text-lg border border-gray-300 rounded-lg outline-none focus:border-red-600"
            />

            <input
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-14 px-4 text-lg border border-gray-300 rounded-lg outline-none focus:border-red-600"
            />

            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-14 px-4 text-lg border border-gray-300 rounded-lg outline-none focus:border-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white text-xl font-semibold bg-red-600 hover:bg-red-700 rounded-lg shadow-lg active:scale-95 transition-all"
          >
            Continue
          </button>

          <p className="text-center text-gray-600 mt-4 text-sm">
            Already have an account?{" "}
            <span className="text-red-600 font-semibold cursor-pointer">
              Login here
            </span>
          </p>

          <div className="flex items-start gap-2 mt-4 text-sm text-gray-600 font-medium">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
              className="mt-1"
            />
            <p>By Continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginSignup;
