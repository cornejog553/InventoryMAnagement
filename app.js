const express = require("express");
const playerRouter = require('./routes/playerRoutes')
const teamRouter = require('./routes/teamRoutes')
const app = express();
const path = require("node:path");
const db = require("./db/queries");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", displayIndex);

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    // You can of course also create your own for your own use-case!
    // Just make sure to call `next`
    next();
  })

  app.use('/team', teamRouter);

// base mount path is `/players` and will always execute on that specific mount path, and yes including `/users/a/b/c`
app.use('/players', playerRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));

async function displayIndex(req, res) {
    const easternteams = await db.getEasternTeams();
    const westernteams = await db.getWesternTeams();
    const player = await db.getAllPlayers();
    const jerseyImages = await db.getJerseysImage()
    res.render("index", {easternteams: easternteams,
      westernteams: westernteams,
      player: player,
      jerseyimages: jerseyImages
    });
}
