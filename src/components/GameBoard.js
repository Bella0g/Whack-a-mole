// Manages the grid of moles and the game logic like randomly showing moles.

import React, { useState, useEffect } from "react";
import Mole from "./Mole";

const GameBoard = () => {
  const [molePositions, setMolePositions] = useState(Array(25).fill(false));

    // Function to show up to 3 moles at once
    const showRandomMoles = () => {
      const newMolePositions = Array(25).fill(false);
      const numberOfMoles = Math.floor(Math.random() * 3) + 1; 
  
      // Generate unique random indices for moles
      const indices = new Set();
      while (indices.size < numberOfMoles) {
          indices.add(Math.floor(Math.random() * 25));
      }
  
      // Set moles to visible (true) at the randomly selected positions
    
      indices.forEach(index => newMolePositions[index] = true);
  
      setMolePositions(newMolePositions);
    };

    useEffect(() => {
        showRandomMoles(); // Call to show moles
        const intervalId = setInterval(showRandomMoles, 2000); // Show moles every two seconds

        return () => clearInterval(intervalId); // Returns cleanup function to stop the interval when the component unmounts
    }, []);

  return (
    <div className="grid grid-cols-5 gap-4 w-[500px] h-[500px]">
      {Array.from({ length: 25 }).map((_, index) => (
        <div
          key={index}
          className="bg-amber-800 rounded-md flex items-center justify-center w-24 h-24"
        >
          {/* Render the Mole component and control visibility */}
          <Mole isVisible={molePositions[index]} />
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
