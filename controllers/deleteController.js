const db = require("../db/queries");

async function displayDeletePage(req, res) {
  const jerseys = await db.getAllJerseys();  
  res.render("../views/deleteJersey", {jerseys: jerseys})
}

async function deleteJersey(req, res) {
  let id = req.body.data
    
  res.render("../views/newPlayer");
}

module.exports = {
  displayDeletePage,
  deleteJersey
};