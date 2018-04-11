const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

  app.post('/api/new-character', (req, res) => {
    const character = { 
      name: req.body.name,
      type: req.body.type,
      level: 1,
      strength: 10,
      vitality: 5,
      primary: req.body.primary
    };
    db.collection('characters').insert(character, (err, result) => {
      if(err) {
        res.send({'error' : 'an error has occured'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });



};