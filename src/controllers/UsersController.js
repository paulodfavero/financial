const crypto = require("crypto");
const bcrypt = require("bcrypt");
const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    try {
      const user = await connection("users").select("*");
      return res.json(user);
    } catch (error) {
      console.log("ERRO TO GET LIST FROM USER", error);
      return res.status(400).json(error);
    }
  },
  async createUsers(req, res) {
    const { name, email, whatsapp, password, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");
    const hash = await bcrypt.hash(password, 10);

    try {
      await connection("users").insert({
        id,
        name,
        email,
        whatsapp,
        password: hash,
        city,
        uf
      });
      return res.json({ id });
    } catch (error) {
      console.log("ERRO TO CREATE USER", error);
      return res.status(400).json(error.status);
    }
  }
};
