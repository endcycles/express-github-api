const axios = require('axios');
const app = require('express')();
const port = 8000;

app.get('/', (req, res) => {
  res.json({ response: 'Please use localhost:8000/:username' });
});

app.get('/:username', async (req, res) => {
  try {
    let response = await axios(
      `https://api.github.com/users/${
        req.params.username
      }/following?per_page=100`
    );
    res.json({
      response: {
        username: req.params.username,
        followers: Object.keys(response.data).length
      }
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, console.log(`listening on port ${port}`));
