const connection = require("../database/connection");

module.exports = {
  async listExpenses(req, res) {
    try {
      const expenses = await connection("expenses").select("*");
      return res.json(expenses);
    } catch (error) {
      return res
        .status(400)
        .json(`THERE'S NO expenses WHITH THIS ID -- ${error}`);
    }
  },
  async createExpenses(req, res) {
    const {
      nome,
      categoria,
      valor,
      parcelas,
      data_inicio,
      tipo_despesa,
      vencimento
    } = req.body;
    try {
      await connection("expenses").insert({
        nome,
        categoria,
        valor,
        parcelas,
        data_inicio,
        tipo_despesa,
        vencimento
      });
      return res.json({ nome });
    } catch (error) {
      return res.json(`ERROR TO CREATE EXPENSES -- ${error}`);
    }
  },
  async deleteExpenses(req, res) {
    const { id } = req.body;
    try {
      await connection("expenses")
        .delete()
        .where({ id });
      return res.json("delete");
    } catch (error) {
      return res.json(`ERROR -- ${error}`);
    }
  },
  async updateExpenses(req, res) {
    const {
      id,
      nome,
      categoria,
      valor,
      parcelas,
      data_inicio,
      tipo_despesa,
      vencimento
    } = req.body;
    try {
      await connection("expenses")
        .update({
          nome,
          categoria,
          valor,
          parcelas,
          data_inicio,
          tipo_despesa,
          vencimento
        })
        .where({ id });
      return res.json(`UPDATED ${nome}`);
    } catch (error) {
      return res.json(`ERROR -- ${error}`);
    }
  }
};
