const express = require('express');
const axios = require('axios');
const { Groq } = require('groq-sdk');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = 3000;

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to search for a movie
app.post('/api/search', async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Movie title is required' });
    }

    // Fetch movie data from OMDb API
    const omdbUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${process.env.OMDB_API_KEY}`;
    const omdbResponse = await axios.get(omdbUrl);
    const omdbData = omdbResponse.data;

    if (omdbData.Response === 'False') {
      return res.status(404).json({ error: omdbData.Error || 'Movie not found' });
    }

    // Extract relevant movie details
    const movieDetails = {
      title: omdbData.Title || 'N/A',
      genre: omdbData.Genre || 'N/A',
      plot: omdbData.Plot || 'N/A',
      imdbRating: omdbData.imdbRating || 'N/A',
      poster: omdbData.Poster || 'N/A',
      year: omdbData.Year || 'N/A',
      director: omdbData.Director || 'N/A',
      actors: omdbData.Actors || 'N/A',
    };

    // Create prompt for Groq API
    const prompt = `Write a concise movie review (150-200 words) for ${movieDetails.title} based on the following details: Genre: ${movieDetails.genre}, Plot: ${movieDetails.plot}, IMDb Rating: ${movieDetails.imdbRating}. Include the movie's strengths, weaknesses, a rating out of 5 stars, and suggest 3 similar movies.`;

    // Generate review using Groq API (Llama 3.3 70B model)
    const groqResponse = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile', // Updated model
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300,
    });
    const review = groqResponse.choices[0].message.content;

    // Combine movie details and review
    const response = {
      movie: movieDetails,
      review,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `An error occurred: ${error.message}` });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});