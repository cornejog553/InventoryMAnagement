const db = require("../db/queries");

async function getPlayerJerseys(req, res) {
  const jerseyDetails = await db.getJerseyDetailsById(req.query.jerseyid);    
  res.render("../views/jerseyDetails", {jerseydetails: jerseyDetails,});
}

module.exports = {
  getPlayerJerseys
};