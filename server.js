const express = require('express');
const bodyParser = require ("body-parser");
const MongoClient = require('mongodb').MongoClient;
let db = require('./config/db');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if(err) return console.log(err);
  db = database.db("game_mechanics");
  require("./app/routes")(app, db);
  app.listen(port, () => console.log(`Port ${port} open and ready for traffic!`));
})

///***********       an ODM like mongoose needs to be integrated                              ************////
///***********      inputs need to be controlled to make sure values are written              ************////
///***********  to the db as numbers. game data route could be optimized using associations   ************////
///***********                          etc, etc, etc                                         ************////


//routes
// app.get('/api/game-data', (req, res) => {
//   const data = fs.readFileSync('game-data.json')
//   const json = JSON.parse(data);
//   res.send(json);
// });

// app.put('/api/add-weapon', (req, res) => {
//   const newWeapon = req.body;
//   const data = fs.readFileSync('game-data.json')
//   const json = JSON.parse(data);
//   json[0].weapons.push(newWeapon);
//   fs.writeFileSync('game-data.json', JSON.stringify(json, null, 2))
//   res.send(json)
// });

// app.delete('/api/delete-weapon', (req, res) => {
//   const index = req.body.index
//   const data = fs.readFileSync('game-data.json')
//   const json = JSON.parse(data);
//   json[0].weapons.splice(index, 1);
//   fs.writeFileSync('game-data.json', JSON.stringify(json, null, 2))
//   res.send(json)
// });

