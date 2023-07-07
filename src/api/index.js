const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

// GET CALL : ALL VOICE "/v1/voices"
app.get('/v1/voices', async (req, res) => {
  try {
    const apiKey = 'your_api_key';

    const response = await axios.get('https://api.elevenlabs.io/v1/voices', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// POST CALL : FEED BY VOICE-ID "/v1/text-to-speech/{voice_id}"
app.post('/v1/text-to-speech/:voice_id', async (req, res) => {
  try {
    const { voice_id } = req.params;
    const { text } = req.body;
    const apiKey = 'your_api_key';

    const response = await axios.post(`https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`, { text }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/v1/voices/:voice_id', async (req, res) => {
  try {
    const { voice_id } = req.params;
    const apiKey = 'your_api_key';

    const response = await axios.get(`https://api.elevenlabs.io/v1/voices/${voice_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
