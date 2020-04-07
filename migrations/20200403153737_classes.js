exports.up = function (knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments();
    table.text('title');
    table.boolean('class_active').defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('classes');
};
