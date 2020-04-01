exports.up = function(knex) {
  try {
    return knex.schema.createTable("expenses", function(table) {
      table.increments();

      table.string("nome").notNullable();
      table.string("categoria").notNullable();
      table.decimal("valor").notNullable();
      table.string("parcelas");
      table.string("data_inicio");
      table.string("tipo_despesa").notNullable();
      table.string("vencimento").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  } catch (error) {
    return res
      .status(401)
      .send(`ERROR TO CREATE A DATABASE EXPENSES -- ${error}`);
  }
};

exports.down = function(knex) {
  knex.schema.dropTable("expenses");
};
