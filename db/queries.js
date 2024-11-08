const pool = require("./pool");

async function getAllPlayers() {
  const { rows } = await pool.query("SELECT * FROM player");
  return rows;
}

async function getAllJerseys() {
  const { rows } = await pool.query("SELECT * FROM jerseys");
  return rows;
}

async function getSpecificPlayerJerseys(playerId) {
  const { rows } = await pool.query("SELECT jerseys.image_link, jerseys.jersey_id, player.name, player.player_id FROM jerseys INNER JOIN player ON jerseys.player = player.player_id WHERE player.player_id = $1",[playerId]);
  return rows;
}

async function getAllTeams() {
  const { rows } = await pool.query("SELECT image_link FROM teams");
  return rows;
}

async function getEasternTeams() {
  const { rows } = await pool.query("SELECT * FROM teams WHERE conference = 'Eastern'");
  return rows;
}

async function getWesternTeams() {
  const { rows } = await pool.query("SELECT * FROM teams WHERE conference = 'Western'");
  return rows;
}

async function getPlayersImage() {
  const { rows } = await pool.query("SELECT image_link FROM player");
  return rows;
}

async function getJerseysByTeam(team) {
  const { rows } = await pool.query("SELECT * FROM jerseys WHERE team = $1",[team]);
  return rows;
}

async function getJerseysImage() {
  const { rows } = await pool.query("SELECT image_link FROM jerseys");
  return rows;
}

async function getJerseyDetailsById(id) {
  const { rows } = await pool.query("SELECT jerseys.number, jerseys.price, jerseys.quantity, jerseys.image_link, jerseys.team, player.name FROM jerseys INNER JOIN player ON jerseys.player = player.player_id WHERE jersey_id = $1",[id]);
  return rows;
}

async function insertNewJersey(number, price, quantity, image_link, player, team) {
  await pool.query("INSERT INTO jerseys (number, price, quantity, image_link, player, team) VALUES ($1, $2, $3, $4, $5, $6)", [number, price,quantity, image_link, player, team]);
}

async function insertNewPlayer(name, image_link) {
  await pool.query("INSERT INTO player (name, image_link) VALUES ($1, $2)", [name, image_link]);
}

async function deleteJersey(id) {
  await pool.query("DELETE FROM jerseys WHERE jersey_id = $1", [id]);
}

module.exports = {
  getAllPlayers,
  getAllJerseys,
  getSpecificPlayerJerseys,
  getEasternTeams,
  getWesternTeams,
  getPlayersImage,
  getJerseysByTeam,
  getJerseysImage,
  getJerseyDetailsById,
  insertNewJersey,
  insertNewPlayer,
  deleteJersey
};
