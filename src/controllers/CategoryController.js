const connection = require("../database/connection");

module.exports = {
  async listCategory(req, res) {
    try {
      const category = await connection("category").select("*");
      return res.json(category);
    } catch (error) {
      return res
        .status(400)
        .json(`THERE'S NO CATEGORY WHITH THIS ID -- ${error}`);
    }
  },
  async createCategory(req, res) {
    const { label, key } = req.body;
    const array = req.body;
    try {
      const category = await connection("category").select("key");
      category.map(item => {
        if (key === item.key) {
          const response = res
            .status(400)
            .json({ message: `ALREADY EXIST A CATEGORY WITH THIS NAME` });
          return response;
        }
      });
      array.map(async item => {
        await connection("category").insert({
          label: item.label,
          key: item.key
        });
      });

      return res.json({ label });
    } catch (error) {
      return res.json(`ERROR TO CREATE CATEGORY -- ${error}`);
    }
  },
  async deleteCategory(req, res) {
    const { id } = req.body;
    try {
      await connection("category")
        .delete()
        .where({ id });
      return res.json("delete");
    } catch (error) {
      return res.json(`ERROR -- ${error}`);
    }
  }
};
