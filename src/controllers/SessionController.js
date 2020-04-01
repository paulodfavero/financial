const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body;
    try {
      const [user] = await connection("users")
        .select("*")
        .where({ id });
      res.json(user);
    } catch (error) {
      return res.status(400).json(`There's no user with this ID: ${error}`);
    }
  }
};
