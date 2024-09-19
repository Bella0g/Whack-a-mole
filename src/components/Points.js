import React from 'react';

//Receives the prop 'score', represents the current score
const Points = ({ score }) => {
    //Renders a div that displays the score
    return (
        <div className='text-xl'>
        <h1>Points: {score}</h1>
        </div>
    );
};

export default Points;
