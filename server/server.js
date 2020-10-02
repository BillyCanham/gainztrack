const express = require("express");
const connectDB = require("./config/database");

connectDB();

// set up basic server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Good to go"));
