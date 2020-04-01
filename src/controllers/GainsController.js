const connection = require("../database/connection");

module.exports = {
  async listGains(req, res) {
    try {
      const gains = await connection("gains").select("*");
      return res.json(gains);
    } catch (error) {
      return res.status(400).json(`THERE'S NO GAINS WHITH THIS ID -- ${error}`);
    }
  },
  async createGains(req, res) {
    const { nome, valor, sacado, parcelas, data, logo } = req.body;
    try {
      await connection("gains").insert({
        nome,
        valor,
        sacado,
        parcelas,
        data,
        logo
      });
      return res.json({ nome });
    } catch (error) {
      return res.json(`ERROR TO CREATE GAINS -- ${error}`);
    }
  },
  async updateGains(req, res) {
    const { id, nome, valor, sacado, parcelas, data, logo } = req.body;
    try {
      await connection("gains")
        .update({
          nome,
          valor,
          sacado,
          parcelas,
          data,
          logo
        })
        .where({ id });
      return res.json(`UPDATED ${nome}`);
    } catch (error) {
      return res.json(`ERROR -- ${error}`);
    }
  },
  async deleteGains(req, res) {
    const { id } = req.body;
    try {
      await connection("gains")
        .delete()
        .where({ id });
      return res.json("delete");
    } catch (error) {
      return res.json(`ERROR -- ${error}`);
    }
  }
};
