import React from 'react';
import './App.css';
import GamePage from './pages/GamePage';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-emerald-600">
      <GamePage />
    </div>
  );
}

export default App;
