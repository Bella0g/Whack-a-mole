import React, { useState, useEffect } from "react";
import GameBoard from "../components/GameBoard";
import CountDown from "../components/CountDown";
import Points from "../components/Points";
import PlayButton from "../components/PlayButton";
import Login from "../components/Login";
import {SaveResult} from "../components/Api";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");


  // update username when submitted
  const handleSubmit = (input) => {
    setUserName(input);
  };

  // toggle state to show game when username is submitted
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const incrementScore = () => {
    if (isPlaying) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const startGame = () => {
    setScore(0);
    setCount(60);
    setIsPlaying(true);
  };

  // Function to save gameresult for a user and calls function SaveResult(api) to save to the database.
  const saveGameResult = async () => {
    if (userName && score > 0) {
      await SaveResult(userName, score);
    }
  };

  useEffect(() => {
    if (count === 0) {
      setIsPlaying(false);
      // Calls function saveGameResult when the game is done.
      saveGameResult(); 
    }
  }, [count]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <header className="text-center text-white mb-4">
        <h1 className="text-5xl font-bold">Whack-a-Mole Game</h1>
      </header>

      {!isLoggedIn ? (
        <Login handleLogin={handleLogin} onNameSubmitted={handleSubmit} />
      ) : (
        <>
          <div className="text-slate-50 text-right w-3/4 py-2 lg:w-1/3">
            <h3>Logged in: {userName}</h3>
          </div>
          <div className="grid grid-cols-3 items-center text-white text-1xl font-bold py-2 mb-6">
            <CountDown
              count={count}
              setCount={setCount}
              isPlaying={isPlaying}
            />

            <Points score={score} />

            <PlayButton startGame={startGame} isPlaying={isPlaying} />
          </div>

          <GameBoard incrementScore={incrementScore} isPlaying={isPlaying} />
        </>
      )}
    </div>
  );
};

export default GamePage;
