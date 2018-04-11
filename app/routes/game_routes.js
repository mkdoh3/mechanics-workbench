const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

  app.get('/api/game-data', (req, res) => {
    const gameData = {
      characters: [],
      attacks: [],
      weapons: []
    };
    //im sure theres a much much much better way of doing this using something like Mongoose
    //will look into it later
    db.collection('characters').find({}).toArray((err, result) => {
      if(err) {
        res.send({'error' : 'an error has occured'});
      } else {
        gameData.characters = result;
      }
    })
    db.collection('attacks').find({}).toArray((err, result) => {
      if(err) {
        res.send({'error' : 'an error has occured'});
      } else {
        gameData.attacks = result;
      }
    });
    db.collection('weapons').find({}).toArray((err, result) => {
      if(err) {
        res.send({'error' : 'an error has occured'});
      } else {
        gameData.weapons = result;
        res.send(gameData)
      }
    });
  })
}