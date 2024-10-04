const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Micle", email: "micle@example.com" },
  { id: 3, name: "Emli", email: "emli@example.com" },
  { id: 4, name: "Bush", email: "bush@example.com" },
];

app.use(cors());
app.get("/", (req, res) => {
  res.send("user management serveri is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
