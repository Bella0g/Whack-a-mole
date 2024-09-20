const express = require('express');
const mongoose = require('mongoose');
const dotenv =  require('dotenv');
const cors = require('cors');

// fetch environment variables from .env-file
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connection to MongoDB with URI from .env-file.
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Ansluten till MongoDB'))
.catch(err=> console.error('Kunde inte ansluta till MongoDB', err));

// Define scheme for user.
const userSchema = new mongoose.Schema({
    playername: {type: String, required: true},
    scoreboard: {type: Number, required: true},
});

// Creates model for user.
const User = mongoose.model('User', userSchema);

// Route to create a new user
app.post('/api/users', async (req, res) =>{
    const {playername, scoreboard} = req.body;

    try {
        // Create and save a new user.
        const newUser = new User({ playername, scoreboard });
        await newUser.save();
        res.status(201).json({ message: 'Användare sparad', user: newUser });
      } catch (error) {
        res.status(500).json({ error: 'Fel vid sparning av användare' });
      }
    });
    // Route to fetch all users
    app.get('/api/users', async (req, res)=>{
        try {
            // Fetch all users from database.
            const users = await User.find();
            res.status(200).json(users);
        }
        catch(error) {
        res.status(500).json({error: 'Fel vid hämtning av användare'});
        }
    });
// Set port to start the server.
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, ()=> {
        console.log(`Servern kör på port ${PORT}`)
    });