import React, { useEffect } from "react";

const CountDown = ({ count, setCount, isPlaying }) => {
    useEffect(() => {
        if (!isPlaying || count === 0) return;

        //timer that decreases the count by one every second
        const timer = setInterval(() => {
            //subtracting one from the previous count
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        //Cleanup function that clears the interval when the component unmounts or when the dependencies changes
        return () => clearInterval(timer);
    }, [isPlaying, count, setCount]);

    //Render the countdown display
    return (
        <div className="text-xl">
            <h2 className="px-4">Time left: {count}</h2>
        </div>
    );
};

export default CountDown;
