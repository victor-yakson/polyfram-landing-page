import React, { useState } from "react";
import styles from "../style"; // Assuming styles are imported from here

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center transition-opacity duration-300 ${
        isOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-[#f0f0f0] rounded-lg shadow-lg p-6 transition-transform duration-300 ${
          isOpen ? "transform scale-100" : "transform scale-95"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
