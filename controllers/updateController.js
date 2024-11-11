const db = require("../db/queries");

async function displayUpdatePage(req, res) {
    const jerseys = await db.getAllJerseys();  
    const players = await db.getAllPlayers()
    res.render("../views/updateJerseys", {jerseys: jerseys, players: players})
  }
  
  async function updateJersey(req, res) {
    let id = req.params.id
    const jerseys = await db.getAllJerseys();
    await db.deleteJersey(id)
    res.redirect("/");
  }
  
  module.exports = {
    displayUpdatePage,
    updateJersey
  };