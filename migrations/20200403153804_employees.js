exports.up = function (knex) {
  return knex.schema.createTable('employees', (table) => {
    table.increments();
    table.text('first_name');
    table.text('last_name');
    table.text('employee_id');
    table.date('hire_date', { useTz: false });
    table.integer('plant').references('id').inTable('plants');
    table.text('cost_center');
    table.text('department');
    table.boolean('active').defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('employees');
};
