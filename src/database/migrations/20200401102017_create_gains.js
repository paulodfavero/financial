exports.up = function(knex) {
  try {
    return knex.schema.createTable("gains", function(table) {
      table.increments();

      table.string("nome").notNullable();
      table.decimal("valor").notNullable();
      table.string("sacado").notNullable();
      table.string("parcelas");
      table.string("data");
      table.string("logo");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  } catch (error) {
    return res.status(401).send(`ERROR TO CREATE A DATABASE GAINS -- ${error}`);
  }
};

exports.down = function(knex) {
  knex.schema.dropTable("gains");
};
