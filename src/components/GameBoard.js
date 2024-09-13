// will manage the grid of moles and the game logic like randomly showing moles.

import React from 'react';

const GameBoard = ({ incrementScore }) => {
    return (
        <div className="grid grid-cols-5 gap-1 w-80 h-80">
            {Array.from({ length: 25 }).map((_, index) => (
                <div
                    key={index}
                    onClick={incrementScore}
                    className="bg-slate-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-500 transition-colors"
                >
                </div>
            ))}
        </div>
    );
};

export default GameBoard;
