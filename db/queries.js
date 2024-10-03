const pool = require("./pool");

async function getAllPlayers() {
  const { rows } = await pool.query("SELECT * FROM player");
  return rows;
}

// async function insertUsername(username) {
//   await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
// }

module.exports = {
  getAllPlayers
};
