const characterRoutes = require('./character_routes');
const attackRoutes = require('./attack_routes');
const weaponRoutes = require('./weapon_routes');
const gameRoutes = require('./game_routes');


module.exports = (app, db) => {
  characterRoutes(app, db);
  attackRoutes(app, db);
  weaponRoutes(app, db);
  gameRoutes(app, db);
}