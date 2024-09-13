import React from "react";

function PlayButton({ startGame, isPlaying }) {
    return (
        <div>
            <button
                onClick={startGame}
                className={`flex px-3 rounded-md py-3 bg-purple-600 outline outline-2 outline-offset-2 outline-teal-300 shadow-lg ${isPlaying
                        ? "bg-gray-700 cursor-not-allowed opacity-50"
                        : "hover:bg-purple-700 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300"
                    }`}
                disabled={isPlaying}
            >
                Start new game!
            </button>
        </div>
    );
}

export default PlayButton;
