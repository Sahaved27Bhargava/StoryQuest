const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/singer', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Define schema
const artistSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  
});

// Define model
const Artist = mongoose.model('Artist', artistSchema);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/artists', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/artists', async (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    rating: req.body.rating,
    
  });

  try {
    const newArtist = await artist.save();
    res.status(201).json(newArtist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
