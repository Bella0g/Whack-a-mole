// Manages the grid of moles and the game logic like randomly showing moles.

import React from 'react';

const GameBoard = ({ incrementScore }) => {
    return (
        <div className="grid grid-cols-5 gap-2 w-96 h-96">
            {Array.from({ length: 25 }).map((_, index) => (
                <div
                    key={index}
                    onClick={incrementScore}
                    className="bg-neutral-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-neutral-600 transition-colors"
                >
                </div>
            ))}
        </div>
    );
};

export default GameBoard;
