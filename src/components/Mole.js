// Mole component: Displays a mole image and controls its visibility

import React from "react";
import moleImage from "../assets/mole-cartoon.png";

const Mole = ({ isVisible }) => {
  return (
       // Container div with dynamic opacity based on isVisible prop
    <div
      className={`flex items-center justify-center transition-opacity duration-600 ${
        isVisible ? "opacity-100" : "opacity-0"
      } w-full h-full`}
    >
       {/* Mole image that's always rendered but may be invisible */}
      <img src={moleImage} alt="Mole" className="w-18 h-18" />
    </div>
  );
};


export default Mole;
