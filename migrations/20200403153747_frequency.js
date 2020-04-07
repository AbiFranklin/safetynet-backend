exports.up = function (knex) {
  return knex.schema.createTable('frequency', (table) => {
    table.increments();
    table.integer('frequency');
    table.boolean('frequency_active').defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('frequency');
};
