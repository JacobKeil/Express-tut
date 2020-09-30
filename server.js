const express = require("express");
const ejs = require("ejs");

const server = express();

server.use(express.static(__dirname + "/views"));

server.set("view engine", "html");
server.engine("html", ejs.renderFile);
server.get("/", (req, res) => res.render("index"));
server.get("/about", (req, res) => res.render("about"));

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
