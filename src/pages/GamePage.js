import React, { useState, useEffect } from "react";
import GameBoard from "../components/GameBoard";
import CountDown from "../components/CountDown";
import Points from "../components/Points";
import PlayButton from "../components/PlayButton";

const GamePage = () => {
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(60);
    const [isPlaying, setIsPlaying] = useState(false);


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

    useEffect(() => {
        if (count === 0) {
            setIsPlaying(false);
        }
    }, [count]);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <header className="text-center text-white mb-4">
                <h1 className="text-5xl font-bold">Whack-a-Mole Game</h1>
            </header>


            <div className="grid grid-cols-3 items-center text-white text-1xl font-bold py-2 mb-6">
                <CountDown count={count} setCount={setCount} isPlaying={isPlaying} />

                <Points score={score} />

                <PlayButton startGame={startGame} isPlaying={isPlaying} />
            </div>

            <GameBoard incrementScore={incrementScore} isPlaying={isPlaying} />
        </div>
    );
};

export default GamePage;
