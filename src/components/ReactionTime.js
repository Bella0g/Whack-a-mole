import React from "react";

export default function ReactionTime({ reactionTimes }) {
  return (
    <div>
      {reactionTimes.length > 0 && (
        <div>
          <h2>Reaction Times:</h2>
          <ul>
            {reactionTimes.map((time, i) => (
              <li key={i}>
                Mole {i + 1}: {time} ms
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
