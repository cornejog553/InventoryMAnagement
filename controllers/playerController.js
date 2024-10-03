const db = require("../db/queries");

async function getPlayers(req, res) {
  const players = await db.getAllPlayers();
  console.log("Players: ", players);
  res.send("Players: " + players.map(player => player.name).join(", "));
}

module.exports = {
    getPlayers
  };