const express = require("express");
const ejs = require("ejs");
const computers = require(__dirname + "/views/json/computers.json");

const server = express();

server.use(express.static(__dirname + "/views"));

server.set("view engine", "html");
server.engine("html", ejs.renderFile);
server.get("/", (req, res) => res.render("index"));
server.get("/about", (req, res) => res.render("about"));
server.get("/computers", (req, res) => res.send("computer"));

server.get("/computers/:id", (req, res) =>
  res.send(computers[req.params.id - 1])
);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
