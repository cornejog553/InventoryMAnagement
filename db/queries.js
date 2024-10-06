const pool = require("./pool");

async function getAllPlayers() {
  const { rows } = await pool.query("SELECT * FROM player");
  return rows;
}

async function getAllTeams() {
  const { rows } = await pool.query("SELECT image_link FROM teams");
  return rows;
}

async function getEasternTeams() {
  const { rows } = await pool.query("SELECT image_link FROM teams WHERE conference = 'Eastern'");
  return rows;
}

async function getWesternTeams() {
  const { rows } = await pool.query("SELECT image_link FROM teams WHERE conference = 'Western'");
  return rows;
}

async function getPlayersImage() {
  const { rows } = await pool.query("SELECT image_link FROM player");
  return rows;
}

async function getJerseysImage() {
  const { rows } = await pool.query("SELECT image_link FROM jerseys");
  return rows;
}

// async function insertUsername(username) {
//   await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
// }

module.exports = {
  getAllPlayers,
  getEasternTeams,
  getWesternTeams,
  getPlayersImage,
  getJerseysImage
};
