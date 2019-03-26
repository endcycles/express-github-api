let axios = require('axios');
let app = require('express')();
let port = 8000;

app.get('/:username', async (req, res) => {
  try {
    let response = await axios(
      `https://api.github.com/users/justindmo/following?per_page=100`
    );
    res.json({
      username: req.params.username,
      followers: Object.keys(response.data).length
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, console.log(`listening on port ${port}`));
