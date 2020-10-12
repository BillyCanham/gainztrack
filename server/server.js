const express = require("express");
const connectDB = require("./config/database");

const app = express();
// bring in validation
const { check, validationResult } = require("express-validator");

connectDB();
// init mddleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome slutbag" }));

// // ROUTES
// // users
app.use("/api/users", require("./routes/users"));
// authorisation
app.use("/api/authorisation", require("./routes/authorisation"));
// exercises + exercise logs

// set up basic server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Good to go"));
