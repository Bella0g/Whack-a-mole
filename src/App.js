import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard'; 

function App() {
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-emerald-400">
      <header className="text-center text-white mb-8">
        <h1 className="text-4xl font-bold">Whack-a-Mole Game</h1>
      </header>
      <GameBoard />
    </div>
  );
}

export default App;
