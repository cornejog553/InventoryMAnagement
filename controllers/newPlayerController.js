const db = require("../db/queries");

async function displayNewPlayerPage(req, res) {
  res.render("../views/newPlayer")
}

async function addNewPlayer(req, res) {
  let {name, imagelink} = req.body
  db.insertNewPlayer(name, imagelink)
    
  res.render("../views/newPlayer");
}

module.exports = {
  displayNewPlayerPage,
  addNewPlayer
};