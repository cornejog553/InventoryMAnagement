const db = require("../db/queries");

async function displayUpdatePage(req, res) {
    const jerseys = await db.getAllJerseysWithPlayerName();  
    const players = await db.getAllPlayers()
    res.render("../views/updateJerseys", {jerseys: jerseys, players: players})
  }
  
  async function updateJersey(req, res) {
  let jerseyId = Number(req.params.id)
  let {player, team, playernumber, jerseyprice, jerseyquantity, imagelink} = req.body
  player = Number(player)
  playernumber = Number(playernumber)
  jerseyprice = parseFloat(jerseyprice)
  jerseyquantity = Number(jerseyquantity)
  console.log(req.body);
  console.log(jerseyId);
  
  await db.updateJersey(player, team, playernumber, jerseyprice, jerseyquantity, imagelink, jerseyId)
  res.redirect("/");
  }
  
  module.exports = {
    displayUpdatePage,
    updateJersey
  };