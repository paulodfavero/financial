exports.up = function(knex) {
  try {
    return knex.schema.createTable("users", function(table) {
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("whatsapp").notNullable();
      table.string("password").notNullable();
      table.string("city").notNullable();
      table.string("uf", 2).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  } catch (error) {
    return res.send(`ERROR TO CREATE A DATABASE USERS -- ${error}`);
  }
};

exports.down = function(knex) {
  knex.schema.dropTable("users");
};
