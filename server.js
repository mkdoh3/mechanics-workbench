const express = require('express');
const fs = require('fs');
const bodyParser = require ("body-parser");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

//routes
app.get('/api/game-data', (req, res) => {
  const data = fs.readFileSync('game-data.json')
  const json = JSON.parse(data);
  res.send(json);
});

app.put('/api/add-weapon', (req, res) => {
  const newWeapon = req.body;
  const data = fs.readFileSync('game-data.json')
  const json = JSON.parse(data);
  json[0].weapons.push(newWeapon);
  fs.writeFileSync('game-data.json', JSON.stringify(json, null, 2))
  res.send(json)
});

app.delete('/api/delete-weapon', (req, res) => {
  const index = req.body.index
  const data = fs.readFileSync('game-data.json')
  const json = JSON.parse(data);
  json[0].weapons.splice(index, 1);
  fs.writeFileSync('game-data.json', JSON.stringify(json, null, 2))
  res.send(json)
});

app.listen(port, () => console.log(`Port ${port} open and ready for traffic!`));