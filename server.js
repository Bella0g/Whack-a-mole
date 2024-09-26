const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// fetch environment variables from .env-file
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connection to MongoDB with URI from .env-file.
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Ansluten till MongoDB"))
  .catch((err) => console.error("Kunde inte ansluta till MongoDB", err));

// Define scheme for user.
const userSchema = new mongoose.Schema({
  playername: { type: String, required: true },
  points: { type: Number, required: true },
  bestReactionTime: { type: Number, required: true },
});

// Creates model for user and score.
const User = mongoose.model("User", userSchema);

// Route to create a new user
app.post("/api/users", async (req, res) => {
  const { playername, points, bestReactionTime } = req.body;

  try {
    // Create and save a new user.
    const newUser = new User({ playername, points, bestReactionTime });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Användare och poäng sparad", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Fel vid sparning av användare" });
  }
});

// Route to fetch all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1, bestReactionTime: 1 }).limit(10);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Fel vid hämtning av användare" });
  }
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Servern kör på port ${PORT}`);
});
