exports.up = function (knex) {
  return knex.schema.createTable('plants', (table) => {
    table.increments();
    table.text('plant');
    table.boolean('plant_active').defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('plants');
};
