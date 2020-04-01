exports.up = function(knex) {
  try {
    return knex.schema.createTable("category", function(table) {
      table.increments();

      table.string("label").notNullable();
      table.string("key").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  } catch (error) {
    return res.send(`ERROR TO CREATE A DATABASE CATEGORY -- ${error}`);
  }
};

exports.down = function(knex) {
  knex.schema.dropTable("category");
};
