const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  app.post('/api/new-weapon', (req, res) => {
    const { name, type, minDmg, maxDmg, APS, STRMod, elementalType, dmgMod } = req.body
    const weapon = {
      name,
      type,
      minDmg,
      maxDmg,
      APS,
      STRMod,
      "elemental" : {
        type: elementalType,
        dmgMod
      }
    };
     db.collection('weapons').insert(weapon, (err, result) => {
       if(err) {
         res.send({'error': 'an error has occured'});
       } else {
         res.send(result.ops[0]);
       }
     });
  });



}

