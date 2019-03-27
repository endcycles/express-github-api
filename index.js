const axios = require('axios');
const express = require('express');
const app = express();
const router = express.Router();

const { getFollowers } = require('./util');
const port = 8000;

// Middleware

// Routes

app.get('/', (req, res) => {
  res.json({
    response: 'Please use localhost:8000/api/v1/:username'
  });
});

app.get('/api/v1/:username', async (req, res) => {
  try {
    let response = await axios(
      `https://api.github.com/users/${
        req.params.username
      }/following?per_page=100`
    );
    res.json({
      response: {
        username: req.params.username,
        followers: getFollowers(response.data)
      }
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, console.log(`listening on port ${port}`));
