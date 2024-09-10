// Act as main page that ties everything together and manages the score state.
import React, { useState, useEffect } from "react";

import GameBoard from "../components/GameBoard";
import CountDown from "../components/CountDown";
import Points from "../components/Points";
import PlayButton from "../components/PlayButton";

const GamePage = () => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <header className="text-center text-white mb-4">
        <h1 className="text-4xl font-bold">Whack-a-Mole Game</h1>
      </header>
      <div className=" w-1/6 flex py-2 text-left mb-4">
        <div className="flex text-white text-2xl px-4">
          <CountDown />
          <Points score={score} />
          <PlayButton />
        </div>
      </div>
      <GameBoard incrementScore={incrementScore} />{" "}
      {/*Pass the function to increment the score to GameBoard*/}
    </div>
  );
};

export default GamePage;
