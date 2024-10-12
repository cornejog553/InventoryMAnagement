const db = require("../db/queries");

function displayNewJerseyPage(req, res) {
  res.render("../views/newJersey")
}

async function addNewJersey(req, res) {
  let {fullName, team, playernumber, jerseyprice, jerseyquantity, imagelink} = req.body
  playernumber = Number(playernumber)
  jerseyprice = parseFloat(jerseyprice)
  db.getJerseyDetailsById = Number(jerseyquantity)
  console.log({fullName, team, playernumber, jerseyprice, jerseyquantity, imagelink});
    
  res.render("../views/newJersey");
}

module.exports = {
  displayNewJerseyPage,
  addNewJersey
};