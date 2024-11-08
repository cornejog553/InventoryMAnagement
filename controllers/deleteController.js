const db = require("../db/queries");

async function displayDeletePage(req, res) {
  const jerseys = await db.getAllJerseys();  
  res.render("../views/deleteJersey", {jerseys: jerseys})
}

async function deleteJersey(req, res) {
  let id = req.params.id
  const jerseys = await db.getAllJerseys();
  await db.deleteJersey(id)
  res.redirect("/");
}

module.exports = {
  displayDeletePage,
  deleteJersey
};