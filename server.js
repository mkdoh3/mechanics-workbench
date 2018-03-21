const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/game-data', (req, res) => {
  const data = fs.readFileSync('game-data.json')
  const json = JSON.parse(data);
  res.send(json);
});

app.listen(port, () => console.log(`Listening on port ${port}`));