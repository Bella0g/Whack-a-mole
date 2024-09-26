import React from "react";
/**
 * Component to display reactiontime
 *
 * @component
 * @param {Object} props - component props
 * @param {state} props.currentReactionTime - state for current reactiontime
 * @returns {React.ReactElement} - display current reactiontime
 */
export default function ReactionTime({ currentReactionTime }) {
  return (
    <div>
      <h4 className="text-xs">Reaction Time: {currentReactionTime} .ms</h4>
    </div>
  );
}
