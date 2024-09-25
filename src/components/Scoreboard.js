// component will simply display the current score and handle the game reset logic.

import React, { useEffect, useState } from "react";
import axios from "axios";

const Scoreboard = () => {
  // State to hold user fetchd from API
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Get users from API
    axios
      .get("http://localhost:2000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      // If there's an error fetching the data, log the error message to the console
      .catch((error) => {
        console.error("Det gick inte att hämta användare", error);
      });
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Scoreboard</h2>
      {/* Table to display users and their scores */}
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-4">#</th>
            <th className="p-4">Player Name</th>
            <th className="p-4">Points</th>
          </tr>
        </thead>
        {/* Loop through each user and render a row for each */}
        <tbody>
        {users.map((user, index) => (
            <tr key={user._id} className="border-b">
              <td className="p-4">{user.playername}</td> 
              <td className="p-4">{user.points}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;