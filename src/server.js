const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Assuming you have a function to fetch transcripts in src/index.ts
// You might need to adjust this import based on how you compile your TypeScript
const { getTranscript } = require('./dist/youtube-transcript.common.js');

app.use(express.json()); // For parsing application/json

app.get('/transcript', async (req, res) => {
  const videoId = req.query.videoId;

  if (!videoId) {
    return res.status(400).send({ error: 'Please provide a videoId query parameter' });
  }

  try {
    const transcript = await getTranscript(videoId);
    res.json(transcript);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
