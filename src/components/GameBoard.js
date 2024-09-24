// Manages the grid of moles and the game logic like randomly showing moles.

import React, { useState, useEffect } from "react";
import Mole from "./Mole";
import ReactionTime from "./ReactionTime";

const GameBoard = ({ incrementScore, isPlaying }) => {
  const [molePositions, setMolePositions] = useState(
    Array(25).fill({ visible: false, appearanceTime: null })
  );

  const [reactionTimes, setReactionTimes] = useState([]); // store reaction times

  const showRandomMoles = () => {
    if (!isPlaying) {
      setMolePositions(Array(25).fill(false));
      return;
    }

    const newMolePositions = Array(25).fill(false);
    const numberOfMoles = Math.floor(Math.random() * 3) + 1;

    // Generate unique random indices for the moles
    const indices = new Set();
    while (indices.size < numberOfMoles) {
      indices.add(Math.floor(Math.random() * 25));
    }

    // Set moles to visible (true) at the randomly selected positions
    indices.forEach((index) => {
      newMolePositions[index] = {
        visible: true,
        // set mole appearance time
        appearanceTime: Date.now(),
      };
      // Generate a random time for how long the mole stays visible (between 1 and 4 seconds)
      const randomTime = Math.random() * 3000 + 1000;

      // Hide the mole after the random time
      setTimeout(() => {
        setMolePositions((prevPositions) => {
          const updatedPositions = [...prevPositions];
          updatedPositions[index] = false;
          return updatedPositions;
        });
      }, randomTime);
    });

    setMolePositions(newMolePositions); // Update the mole positions
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
      // get current time
      const currentTime = Date.now();
      // calculate individual mole reactiontime
      const moleReactionTime =
        currentTime - molePositions[index].appearanceTime;
      // set reaction time
      setReactionTimes((prevTimes) => [...prevTimes, moleReactionTime]);

      const newMolePositions = [...molePositions];
      newMolePositions[index] = false;
      setMolePositions(newMolePositions);
    }
  };

  return (
    <>
      {reactionTimes.length > 0 && (
        <div>
          <ReactionTime reactionTimes={reactionTimes} />
        </div>
      )}{" "}
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
    </>
  );
};

export default GameBoard;
