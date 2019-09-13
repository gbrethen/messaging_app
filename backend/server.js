const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

var messages = [
  { user: "Jack", text: "yes" },
  { user: "Jack", text: "each" },
  { user: "Jack", text: "message" }
];
var users = [{ userName: "Jack", password: "0" }];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.get("/messages/:id", (req, res) => {
  res.send(messages[req.params.id]);
});

app.post("/message", (req, res) => {
  const token = req.header("Authorization");
  const userId = jwt.decode(token, "1968");
  const user = users[userId];
  let msg = { user: user.userName, text: req.body.message };
  messages.push(msg);
  res.json(msg);
});

app.post("/register", (req, res) => {
  let registerData = req.body;
  let newIndex = users.push(registerData);
  let userId = newIndex - 1;
  let token = jwt.sign(userId, "1968");

  res.json(token);
});

app.listen(port, () => console.log("app running"));
