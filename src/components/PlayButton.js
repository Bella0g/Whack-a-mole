import { useState, React } from "react";

/*3. 
Som spelare vill jag ha en knapp i toppen av spelet som säger "Start New Game" 
och som sätter poängen till 0 och tiden till 60 sekunder, 
samtidigt som spelets tillstånd sätts till "startat".

Skapa start knapp i komponent för poäng och nedräkning
Funktion som nollställer poäng
Funktion som startar om nedräkningen från 60 sekunder
Status för spel ska ändras till "startat"*/

function PlayButton() {
  const [playing, setPlaying] = useState(false);

  const [gameEnd, setGameEnd] = useState(false);

  const [score, setScore] = useState(0);

  const startGame = () => {
    /* start timer */
    setScore(0);
    setPlaying(true);
    setGameEnd(false);
  };

  return (
    <div>
      <button
        onClick={startGame}
        className={`flex rounded-md w-full p-4 bg-purple-600 outline outline-offset-2 outline-cyan-700 shadow-lg">
          {/* add conditional styles */ }
          ${
            !playing
              ? "hover:bg-purple-800 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300"
              : "bg-gray-700 cursor-not-allowed opacity-50 disabled"
          }`}
      >
        Start new game!
      </button>
    </div>
  );
}

export default PlayButton;
