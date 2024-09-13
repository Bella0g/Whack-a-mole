import React, { useEffect } from "react";

const CountDown = ({ count, setCount, isPlaying }) => {
    useEffect(() => {
        if (!isPlaying || count === 0) return;

        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isPlaying, count, setCount]);

    return (
        <div>
            <h2 className="px-4">Time left: {count}</h2>
        </div>
    );
};

export default CountDown;
