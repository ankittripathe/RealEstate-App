import  { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginSignup from "../Components/LoginSignup";
import Navbar from "../Components/Navbar";

const LoginSignupPage = () => {
  const location = useLocation();

  useEffect(() => {
    const loginSection = document.getElementById("LoginSignup");
    if (loginSection) {
      loginSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    // <div className="min-h-screen bg-gray-800">
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <Navbar />
      <LoginSignup />
    </div>
  );
};

export default LoginSignupPage;
