exports.up = function(knex) {
  try {
    return knex.schema.createTable("users", function(table) {
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("whatsapp").notNullable();
      table.string("password").notNullable();
    });
  } catch (error) {
    res.send("ERROR TO CREATE A DATABASE USERS", error);
  }
};

exports.down = function(knex) {
  knex.schema.dropTable("users");
};
