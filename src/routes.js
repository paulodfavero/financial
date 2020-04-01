const express = require("express");
const bcrypt = require("bcrypt");
const connection = require("./database/connection");

const { index, createUsers } = require("./controllers/UsersController");
const { create } = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const { id } = req.query;
  try {
    const [user] = await connection("users")
      .select("password")
      .where({ id });
    const compare = await bcrypt.compare("123456", user.password);
    return res.json(compare);
  } catch (error) {
    console.log("ERRO TO GET LIST FROM USER", error);
    return res.status(400).json(error);
  }
});
routes.get("/user", index);
routes.post("/user", createUsers);

routes.post("/sessions", create);

module.exports = routes;
