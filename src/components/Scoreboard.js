// component will simply display the current score and handle the game reset logic.

import React, { useEffect, useState } from "react";
import axios from "axios";

const Scoreboard = ({ returnToLogin }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/users")
      .then((response) => {
        // Sort users by points in descending order
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Cant fetch users", error);
      });

  }, []);

        const sortedUsers = [...users].sort((a, b) => b.points - a.points);
        const sortedReactions =[...users].sort((a, b)=> a.bestReactionTime - b.bestReactionTime);

  return (
    <div className="relative bg-white shadow-md rounded-lg p-6 w-full max-w-3xl" style={{display:'flex', justifyContent:'space-around'}}>
<section>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">High score</h2>
      <table className="table-auto w-full justify-center">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-4">Place</th>
            <th className="p-4">Player</th>
            <th className="p-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user._id} className="border-b">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{user.playername}</td>
              <td className="p-4">{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
      <section>
      <button
        className="absolute top-4 right-4 bg-purple-700 text-white rounded-full px-3 py-1 hover:bg-red-700"
        onClick={returnToLogin}
      >
        X
      </button>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Fastest Reaction</h2>
      <table className="table-auto w-full justify-center">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-4">Place</th>
            <th className="p-4">Player</th>
            <th className="p-4">Reaction Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedReactions.map((user, index) => (
            <tr key={user._id} className="border-b">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{user.playername}</td>
              <td className="p-4">{user.bestReactionTime} ms</td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
    </div>
  );
};

export default Scoreboard;