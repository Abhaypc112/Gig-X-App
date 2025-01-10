import React from "react";
// import logo from "../assets/Logo.png"; 
import { ThreeDot } from "react-loading-indicators";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen rounded-md bg-transparent">
      <div className="flex flex-col items-center space-y-4">
        {/* Rotating Logo */}
        {/* <div className="w-14 h-14 animate-spin ">
          <img src={logo} alt="Logo" className="object-contain" />
        </div> */}
        {/* Loading Text */}
        <ThreeDot color="#FABD00" size="medium" text="" textColor="#8cef15" />
      </div>
    </div>
  );
};

export default LoadingPage;
