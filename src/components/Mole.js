// Mole component: Displays a mole image and controls its visibility

import React from "react";
import moleImage from "../assets/mole-cartoon.png";

const Mole = ({ isVisible }) => {
  if (!isVisible) return null; // Don't render anything if not visible

  return (
    <div className="flex items-center justify-center w-full h-full transition-opacity duration-300">
      <img src={moleImage} alt="Mole" className="w-18 h-18" />
    </div>
  );
};


export default Mole;
