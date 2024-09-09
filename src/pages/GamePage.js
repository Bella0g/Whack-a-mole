// Act as main page that ties everything together and manages the score state.

import GameBoard from "../components/GameBoard"; 

const GamePage = () => {
  return (
    <div className="game-page">
      <header className="text-center text-white mb-8">
        <h1 className="text-4xl font-bold">Whack-a-Mole Game</h1>
      </header>
      <GameBoard />
    </div>
  );
};

export default GamePage;
