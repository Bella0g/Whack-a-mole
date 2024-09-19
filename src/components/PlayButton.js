import React from "react";

/**
 *  Button component to start game
 *
 * @component
 * @param {Object} props - component props
 * @param {function} props.startGame - function executed when user clicks play button
 * @param {boolean} props.isPlaying - state to handle if game is in play
 * @returns {React.ReactElement} - button to start game, disabled when game is started
 */
function PlayButton({ startGame, isPlaying }) {
  return (
    <div>
      <button
        onClick={startGame}
        className={`flex px-3 rounded-md py-3 bg-purple-600 outline outline-2 outline-offset-2 outline-teal-300 shadow-lg ${
          isPlaying
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
