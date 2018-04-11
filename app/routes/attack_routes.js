const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

  app.post('/api/new-attack', (req, res) => {
    const { name, APSMod, attackType, dmgMod } = req.body
    const attack = {
      name,
      APSMod,
      attackType,
      dmgMod,
    }
    db.collection('attacks').insert(attack, (err, result) => {
      if(err) {
        res.send({"error": "an error has occurred"})
      } else {
        res.send(result.ops[0]);
      }
    });
  });



}