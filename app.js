const express = require("express");
const playerRouter = require('./routes/playerRoutes')
const app = express();
const path = require("node:path");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("index",{message:"Go Lakers!"});
});

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    // You can of course also create your own for your own use-case!
    // Just make sure to call `next`
    next();
  })

// base mount path is `/users` and will always execute on that specific mount path, and yes including `/users/a/b/c`
app.use('/players', playerRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
