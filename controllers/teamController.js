const db = require("../db/queries");

async function getTeamJerseys(req, res) {
    const teamJerseys = await db.getJerseysByTeam(req.query.team);
    res.render("../views/jerseyByTeam", {teamjerseys: teamJerseys,});
}

module.exports = {
    getTeamJerseys
  };