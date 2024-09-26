# Whack-a-Mole Game

This is a web-based **Whack-a-Mole** game built using React for the frontend and MongoDB for backend data storage. The game features a fun and interactive user experience, including score tracking and customizable game settings.

![Alt text](/assets/)
![Alt text](/assets/)

## Features
- Interactive "Whack-a-Mole" gameplay.
- Score tracking system.
- Timed game sessions (default: 60 seconds).
- Randomly appearing moles.
- User-friendly minimal design.
- Real-time score updates using MongoDB via API requests.
- Cross-environment Axios integration for communication between frontend and backend.
- Light and dark mode for customized user experience.

## Technologies Used
- **React**: Frontend framework for building UI components.
- **MongoDB & MongoDB Compass**: Database for storing game scores and user data, with Compass for database management.
- **Node.js & Express**: Backend for handling API requests and serving game data.
- **Axios**: For cross-environment HTTP requests between React frontend and Node.js backend.
- **Tailwind CSS**: For styling the application.

## Getting Started
Follow these instructions to set up and run the project on your local machine.

### Prerequisites
Ensure that the following software is installed on your system:
- **Node.js** and **npm**: Download from [nodejs.org](https://nodejs.org).
- **MongoDB**: You can install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community).
- **MongoDB Compass**: Download from [MongoDB Compass](https://www.mongodb.com/products/compass) to manage your database.


### Installation
1. Clone the repository to your local machine using:
    ```bash
    git clone https://github.com/YourUsername/whack-a-mole-game.git
    ```

2. Navigate to the project directory:
    ```bash
    cd whack-a-mole-game
    ```

3. Install the project dependencies:
    ```bash
    npm install
    ```

4. Set up MongoDB:
   - Start your MongoDB server.
   - Use **MongoDB Compass** to create a new database and collection for storing game scores.
   - Update the MongoDB connection URI in your backend configuration file (`.env` or `config.js`), replacing it with your MongoDB server's connection string.

### Cross-Environment Configuration with Axios
The app uses **Axios** to handle HTTP requests between the frontend (React) and backend (Node.js/Express). Make sure your backend server is configured to accept requests from your frontend environment.


### Usage
1. Start the development server:
    ```bash
    npm start
    ```

2. Start the backend server (from the `backend` folder):
    ```bash
    npm run server
    ```

3. Open your web browser and go to `http://localhost:3000` to access the game.

4. Play the game by clicking on the moles that randomly appear on the screen. Each successful click will increase your score, which is updated in real-time using Axios to communicate with MongoDB.

5. At the end of the game session, your score will be stored in MongoDB and can be viewed using **MongoDB Compass**.

6. You can switch between dark and light mode by toggling the mode button in the top right corner of the app.

### Future Enhancements
- Leaderboard to display high scores.
- User authentication to save personal scores.
- Power-ups and game difficulty settings.

