const db = require("../db/queries");

async function displayNewJerseyPage(req, res) {
  const players = await db.getAllPlayers()  
  res.render("../views/newJersey", {players: players,})
}

async function addNewJersey(req, res) {
  let {fullName, team, playernumber, jerseyprice, jerseyquantity, imagelink, player} = req.body
  player = Number(player)
  playernumber = Number(playernumber)
  jerseyprice = parseFloat(jerseyprice)
  jerseyquantity = Number(jerseyquantity)
  console.log({team, playernumber, jerseyprice, jerseyquantity, imagelink, player});
  db.insertNewJersey(playernumber, jerseyprice, jerseyquantity, imagelink, player, team)
  const players = await db.getAllPlayers()  
    
  res.render("../views/newJersey", {players: players,});
}

module.exports = {
  displayNewJerseyPage,
  addNewJersey
};