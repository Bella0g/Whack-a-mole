// Will display whether the mole is visible or not and handle the click event.

import React from "react";
import moleImage from "../assets/mole-cartoon.png";

const Mole = ({ isVisible }) => {
  return (
    <div
      className={`flex items-center justify-center transition-opacity duration-600 ${
        isVisible ? "opacity-100" : "opacity-0"
      } w-full h-full`}
    >
      <img src={moleImage} alt="Mole" className="w-18 h-18" />
    </div>
  );
};


export default Mole;
