// Load environment variables from .env file
const dotenv = require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import the YoutubeTranscript class from the compiled JavaScript
const { YoutubeTranscript } = require('./dist/youtube-transcript.common.js');

function checkApiKey(req, res, next) {
  const requestApiKey = req.headers['x-api-key'] || req.headers['X-API-KEY'];
  console.log(`Received API Key`);
  
  if (!requestApiKey || requestApiKey !== process.env.MY_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }
  next();
}

app.use(express.json()); // For parsing application/json

// Apply the API key check middleware to the /transcript route
app.get('/transcript', checkApiKey, async (req, res) => {
  const videoId = req.query.videoId;

  if (!videoId) {
    return res.status(400).send({ error: 'Please provide a videoId query parameter' });
  }

  try {
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    res.json(transcript);
  } catch (error) {
    res.status(500).send({ error: error.message || 'An error occurred while fetching the transcript.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
