import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    alert(isLogin ? "Login successful" : "Account created successfully");
    setUserName("");
    setEmail("");
    setPassword("");
    setAgreeTerms(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUserName("");
    setEmail("");
    setPassword("");
    setAgreeTerms(false);
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-4 py-10"
      id="LoginSignup"
    > 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 mt-10"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <form onSubmit={submitHandler} className="space-y-3">
          {!isLogin && (
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="h-12 px-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
              />
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="h-12 px-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-1 relative">
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={
                isLogin ? "Enter your password" : "Create a strong password"
              }
              required
              className="h-12 px-3 pr-12 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S3.732 16.057 2.458 12z"
                  />
                </svg>
              )}
            </button>
            {!isLogin && (
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters
              </p>
            )}
          </div>

          {!isLogin && (
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                By continuing, I agree to the{" "}
                <span className="text-red-600 cursor-pointer">
                  terms of use
                </span>{" "}
                &{" "}
                <span className="text-red-600 cursor-pointer">
                  privacy policy
                </span>
                .
              </label>
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 text-white text-lg font-semibold bg-red-600 hover:bg-red-700 rounded-lg shadow-md active:scale-95 transition-all"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleForm}
              className="ml-2 text-red-600 font-semibold hover:text-red-700"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginSignup;

