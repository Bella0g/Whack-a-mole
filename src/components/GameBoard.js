// Manages the grid of moles and the game logic like randomly showing moles.

import React, { useState, useEffect } from "react";
import Mole from "./Mole";

const GameBoard = ({ incrementScore, isPlaying }) => {
  const [molePositions, setMolePositions] = useState(Array(25).fill(false));

  // Function to show up to 3 moles at once
  const showRandomMoles = () => {
    if (!isPlaying) {
      setMolePositions(Array(25).fill(false));
      return;
    }

    const newMolePositions = Array(25).fill(false);
    const numberOfMoles = Math.floor(Math.random() * 3) + 1;

    // Generate unique random indices for moles
    const indices = new Set();
    while (indices.size < numberOfMoles) {
      indices.add(Math.floor(Math.random() * 25));
    }

    // Set moles to visible (true) at the randomly selected positions
    indices.forEach((index) => (newMolePositions[index] = true));

    setMolePositions(newMolePositions);
  };

  useEffect(() => {
    if (isPlaying) {
      showRandomMoles(); // Show moles
      const intervalId = setInterval(showRandomMoles, 4000); // Show moles every four seconds

      return () => clearInterval(intervalId); // Returns cleanup function to stop the interval when the component unmounts
    } else {
      setMolePositions(Array(25).fill(false)); // Hide all moles when not playing
    }
  }, [isPlaying]);

  const handleMoleClick = (index) => {
    if (isPlaying && molePositions[index]) {
      incrementScore();
      const newMolePositions = [...molePositions];
      newMolePositions[index] = false;
      setMolePositions(newMolePositions);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-4 w-[500px] h-[500px]">
    {molePositions.map((isVisible, index) => (
      <div
        key={index}
        onClick={() => handleMoleClick(index)}
        className="bg-amber-800 rounded-md flex items-center justify-center w-24 h-24"
      >
        <Mole isVisible={isVisible && isPlaying} />
      </div>
    ))}
  </div>
  );
};

export default GameBoard;
