// server.js

/*
Start the proxy server by running node server.js in one terminal.
Start your React app by running npm start or yarn start in another terminal.
*/
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/fetch-page', async (req, res) => {
  try {
    const url = req.query.url;
    const response = await fetch(url);
    const html = await response.text();
    res.send(html);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch page' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
