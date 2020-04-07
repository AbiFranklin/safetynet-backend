exports.up = function (knex) {
  return knex.schema.createTable('instructors', (table) => {
    table.increments();
    table.text('instructor');
    table.boolean('instructor_active').defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('instructors');
};
