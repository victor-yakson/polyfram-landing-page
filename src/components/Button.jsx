import React, { useState } from "react";

const Button = ({ styles, func }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (typeof func === "function") {
      func();
    } else {
      window.open(func, "_blank", "noopener,noreferrer");
    }
    setTimeout(() => setIsClicked(false), 300); // Reset clicked state after 300ms
  };
  

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none transition-all duration-300 transform ${
        isClicked ? "scale-95" : "scale-100"
      } hover:bg-blue-600 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
