exports.up = function (knex) {
  return knex.schema.createTable('score', (table) => {
    table.increments();
    table.text('score');
    table.boolean('score_active').defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('score');
};
