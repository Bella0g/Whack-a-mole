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
    points: {type: Number, required: true },
    //reactionTime: {type:Number, required: true}
});

// Creates model for user and score.
const User = mongoose.model('User', userSchema);

// Route to create a new user
app.post('/api/users', async (req, res) =>{
    const {playername, points} = req.body;

    try {
        // Create and save a new user.
        const newUser = new User({ playername, points });
        await newUser.save();
        res.status(201).json({ message: 'Användare och poäng sparad', user: newUser });
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

// app.post('/api/:id/score', async (req, res) => {
//     const { id } = req.params;  
//     const { points } = req.body;

//     try {
//         // controll if the user exists.
//         const user = await User.findById(id);
//         if (!user) {
//             return res.status(404).json({ error: 'Användare inte hittad' });
//         }

//         // Create and saves new points for the users.
//         const newScore = new Score({ userId: id, points });
//         await newScore.save();

//         res.status(201).json({ message: 'Poäng sparad', score: newScore });
//     } catch (error) {
//         res.status(500).json({ error: 'Fel vid sparning av poäng' });
//     }
// });

    // Route to fetch scores for a user
    // app.get('/api/users/:id/scores', async (req, res)=>{
    //     const {id} = req.params;
    //     try{
    //         const scores = await Score.find({userId: id});
    //         res.status(200).json(scores);
    //     }catch(error){
    //         res.status(500).json({error: 'Fel vid hämtning av poäng'});
    //     }
    // });
 // Set port to start the server.
     const PORT = process.env.PORT || 2000;
        app.listen(PORT, ()=> {
        console.log(`Servern kör på port ${PORT}`)
   });