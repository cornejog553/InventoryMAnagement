const db = require("../db/queries");

async function getPlayerJerseys(req, res) {
  const playerJerseys = await db.getSpecificPlayerJerseys(req.query.playerid);
  console.log(playerJerseys);
    
  res.render("../views/jerseyByPlayer", {playerjerseys: playerJerseys,});
}

module.exports = {
  getPlayerJerseys
};