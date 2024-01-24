# youtube-transcript

[![npm version](https://badge.fury.io/js/youtube-transcript.svg)](https://badge.fury.io/js/youtube-transcript)

I wanted to extract a transcript from a youtube video but there was only a python script so I created this to do it in node.
This package use unofficial YTB API so it can be broken over the time if no update appears.

## Installation

```bash
$ npm i youtube-transcript
```

or

```bash
$ yarn add youtube-transcript
```

## Usage

```js
import { YoutubeTranscript } from 'youtube-transcript';

YoutubeTranscript.fetchTranscript('videoId or URL').then(console.log);
```

### Methods

- fetchTranscript(videoId: string [,options: TranscriptConfig]): Promise<TranscriptResponse[]>;

## License

**[MIT](LICENSE)** Licensed




---

# YouTube Transcript API

This project provides a simple API to fetch transcripts for YouTube videos. It's built with Node.js and Express, and utilizes the YouTube Transcript API for fetching the transcripts.

## Features

- Fetch transcripts for YouTube videos by video ID.
- API key authentication to secure access to the API.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/youtube-transcript.git
   ```

2. Navigate to the project directory:

   ```bash
   cd youtube-transcript
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your API key:

   ```
   MY_API_KEY=your_secret_api_key_here
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## Usage

### Endpoints

- **GET /transcript**

  Fetches the transcript for a given YouTube video ID.

  **Query Parameters:**

  - `videoId` (required): The YouTube video ID for which to fetch the transcript.

  **Headers:**

  - `X-API-KEY` (required): Your API key to authenticate the request.

  **Example Request:**

  ```bash
  curl --location 'http://localhost:3000/transcript?videoId=VIDEO_ID' \
  --header 'X-API-KEY: your_api_key'
  ```

  **Response:**

  A JSON array of transcript entries, each containing the text, duration, and offset of a transcript segment.

### Security

This API uses an API key for authentication. Ensure your API key is kept secret and never expose it in client-side code.

## Customization

### Changing the API Key

To change the API key:

1. Update the `MY_API_KEY` value in the `.env` file.
2. Restart the server for the changes to take effect.

### Modifying the Endpoint

The server logic is defined in `server.js`. You can modify the existing endpoint or add new ones by editing this file.

## Deployment

This project is set up for easy deployment to Railway. Ensure you set the `MY_API_KEY` environment variable in your Railway project settings.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
