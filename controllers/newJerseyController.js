const db = require("../db/queries");

async function displayNewJerseyPage(req, res) {
  const players = await db.getAllPlayers()
  console.log(players);
  
  res.render("../views/newJersey", {players: players,})
}

async function addNewJersey(req, res) {
  let {fullName, team, playernumber, jerseyprice, jerseyquantity, imagelink} = req.body
  playernumber = Number(playernumber)
  jerseyprice = parseFloat(jerseyprice)
  jerseyquantity = Number(jerseyquantity)
  console.log({fullName, team, playernumber, jerseyprice, jerseyquantity, imagelink});
  db.insertNewJersey(playernumber, jerseyprice, jerseyquantity, imagelink, fullName, team)
    
  res.render("../views/newJersey");
}

module.exports = {
  displayNewJerseyPage,
  addNewJersey
};