exports.up = function (knex) {
  return knex.schema.createTable('training', (table) => {
    table.increments();
    table.integer('employee').references('id').inTable('employees');
    table
      .integer('training_title')
      .references('id')
      .inTable('classes');
    table.integer('completion').references('id').inTable('score');
    table.date('completion_date');
    table.integer('frequency').references('id').inTable('frequency');
    table.date('due_date');
    table
      .integer('instructor')
      .references('id')
      .inTable('instructors');
    table.boolean('training_active').defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('training');
};
