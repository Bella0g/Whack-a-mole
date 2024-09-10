//Component for counting down from 60 to 0 

import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [count, setCount] = useState(60);

    useEffect(() => {
        if (count === 0) return;

        const timer = setInterval(() => {
            setCount(prevCount => prevCount -1);
        }, 1000);

        return () => clearInterval(timer);
    }, [count]);

    return (
        <div>
            <h2 className="px-4">Time left: {count}</h2>
        </div>
    );
  };

export default CountDown;
