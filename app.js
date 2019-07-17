const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/donkey", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});
app.listen(port, () => console.log("listening on port " + port));

module.exports = app;