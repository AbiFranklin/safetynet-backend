const knex = require('./knex');

module.exports = {
  //Employees Table
  getAllEmployees() {
    return knex('employees');
  },
  getEmployeeById(id) {
    return knex('employees').where('id', id);
  },
  getEmployeesParams(
    first_name,
    last_name,
    plant,
    employee_id,
    cost_center,
    hire_date,
    department,
  ) {
    if (plant === '') {
      if (hire_date === '%') {
        return knex('employees')
          .innerJoin('plants', 'employees.plant', 'plants.id')
          .where('first_name', 'ilike', first_name)
          .andWhere('last_name', 'ilike', last_name)
          .andWhere('employee_id', 'ilike', employee_id)
          .andWhere('cost_center', 'ilike', cost_center)
          .andWhere('department', 'ilike', department)
          .select(
            'employees.id',
            'employees.last_name',
            'employees.first_name',
            'employees.employee_id',
            'plants.plant',
            'employees.department',
            'employees.cost_center',
            'employees.hire_date',
            'employees.active',
          );
      } else {
        return knex('employees')
          .innerJoin('plants', 'employees.plant', 'plants.id')
          .where('first_name', 'ilike', first_name)
          .andWhere('last_name', 'ilike', last_name)
          .andWhere('employee_id', 'ilike', employee_id)
          .andWhere('cost_center', 'ilike', cost_center)
          .andWhere('hire_date', hire_date)
          .andWhere('department', 'ilike', department)
          .select(
            'employees.id',
            'employees.last_name',
            'employees.first_name',
            'employees.employee_id',
            'plants.plant',
            'employees.department',
            'employees.cost_center',
            'employees.hire_date',
            'employees.active',
          );
      }
    } else if (hire_date === '%') {
      return knex('employees')
        .innerJoin('plants', 'employees.plant', 'plants.id')
        .where('first_name', 'ilike', first_name)
        .andWhere('last_name', 'ilike', last_name)
        .andWhere('plant', plant)
        .andWhere('employee_id', 'ilike', employee_id)
        .andWhere('cost_center', 'ilike', cost_center)
        .andWhere('department', 'ilike', department)
        .select(
          'employees.id',
          'employees.last_name',
          'employees.first_name',
          'employees.employee_id',
          'plants.plant',
          'employees.department',
          'employees.cost_center',
          'employees.hire_date',
          'employees.active',
        );
    } else {
      return knex('employees')
        .innerJoin('plants', 'employees.plant', 'plants.id')
        .where('first_name', 'ilike', first_name)
        .andWhere('last_name', 'ilike', last_name)
        .andWhere('plant', plant)
        .andWhere('employee_id', 'ilike', employee_id)
        .andWhere('cost_center', 'ilike', cost_center)
        .andWhere('hire_date', hire_date)
        .andWhere('department', 'ilike', department)
        .select(
          'employees.id',
          'employees.last_name',
          'employees.first_name',
          'employees.employee_id',
          'plants.plant',
          'employees.department',
          'employees.cost_center',
          'employees.hire_date',
          'employees.active',
        );
    }
  },
  terminateEmployee(id, employee_id) {
    return knex('employees').where('id', id).returning('*').update({
      plant: 13,
      active: false,
      employee_id: employee_id,
      cost_center: '0000',
      department: 'Terminated',
    });
  },
  updateEmployee(id, employee) {
    return knex('employees')
      .where('id', id)
      .returning('*')
      .update(employee);
  },
  newEmployee(employee) {
    return knex('employees').returning('*').insert(employee);
  },
  deleteEmployee(id) {
    return knex('employees').where('id', id).del();
  },

  //Training Table
  getAllTraining() {
    return knex('training')
      .innerJoin('employees', 'training.employee', 'employees.id')
      .innerJoin('classes', 'training.training_title', 'classes.id')
      .innerJoin('frequency', 'training.frequency', 'frequency.id')
      .innerJoin(
        'instructors',
        'training.instructor',
        'instructors.id',
      )
      .innerJoin('score', 'training.completion', 'score.id')
      .innerJoin('plants', 'employees.plant', 'plants.id')
      .select(
        'training.id',
        'employees.last_name',
        'employees.first_name',
        'employees.employee_id',
        'plants.plant',
        'employees.department',
        'employees.cost_center',
        'classes.title',
        'score.score',
        'training.completion_date',
        'frequency.frequency',
        'training.due_date',
        'instructors.instructor',
        'training.training_active',
      );
  },
  getTrainingById(id) {
    return knex('training').where('id', id);
  },
  getAllTrainingParams(
    last_name,
    first_name,
    employee_id,
    plant,
    department,
    cost_center,
    title,
    score,
    instructor,
    completion_date,
    due_date,
  ) {
    if (completion_date == '%') {
      if (due_date == '%') {
        return knex('training')
          .innerJoin('employees', 'training.employee', 'employees.id')
          .innerJoin(
            'classes',
            'training.training_title',
            'classes.id',
          )
          .innerJoin(
            'frequency',
            'training.frequency',
            'frequency.id',
          )
          .innerJoin(
            'instructors',
            'training.instructor',
            'instructors.id',
          )
          .innerJoin('score', 'training.completion', 'score.id')
          .innerJoin('plants', 'employees.plant', 'plants.id')
          .where('employees.last_name', 'ilike', last_name)
          .andWhere('employees.first_name', 'ilike', first_name)
          .andWhere('employees.employee_id', 'ilike', employee_id)
          .andWhere('plants.plant', 'ilike', plant)
          .andWhere('employees.department', 'ilike', department)
          .andWhere('employees.cost_center', 'ilike', cost_center)
          .andWhere('classes.title', 'ilike', title)
          .andWhere('score.score', 'ilike', score)
          .andWhere('instructors.instructor', 'ilike', instructor)
          .select(
            'training.id',
            'employees.last_name',
            'employees.first_name',
            'employees.employee_id',
            'plants.plant',
            'employees.department',
            'employees.cost_center',
            'classes.title',
            'score.score',
            'training.completion_date',
            'frequency.frequency',
            'training.due_date',
            'instructors.instructor',
            'training.training_active',
          );
      } else {
        return knex('training')
          .innerJoin('employees', 'training.employee', 'employees.id')
          .innerJoin(
            'classes',
            'training.training_title',
            'classes.id',
          )
          .innerJoin(
            'frequency',
            'training.frequency',
            'frequency.id',
          )
          .innerJoin(
            'instructors',
            'training.instructor',
            'instructors.id',
          )
          .innerJoin('score', 'training.completion', 'score.id')
          .innerJoin('plants', 'employees.plant', 'plants.id')
          .where('employees.last_name', 'ilike', last_name)
          .andWhere('employees.first_name', 'ilike', first_name)
          .andWhere('employees.employee_id', 'ilike', employee_id)
          .andWhere('plants.plant', 'ilike', plant)
          .andWhere('employees.department', 'ilike', department)
          .andWhere('employees.cost_center', 'ilike', cost_center)
          .andWhere('classes.title', 'ilike', title)
          .andWhere('score.score', 'ilike', score)
          .andWhere('instructors.instructor', 'ilike', instructor)
          .andWhere('due_date', due_date)
          .select(
            'training.id',
            'employees.last_name',
            'employees.first_name',
            'employees.employee_id',
            'plants.plant',
            'employees.department',
            'employees.cost_center',
            'classes.title',
            'score.score',
            'training.completion_date',
            'frequency.frequency',
            'training.due_date',
            'instructors.instructor',
            'training.training_active',
          );
      }
    } else if (due_date == '%') {
      return knex('training')
        .innerJoin('employees', 'training.employee', 'employees.id')
        .innerJoin('classes', 'training.training_title', 'classes.id')
        .innerJoin('frequency', 'training.frequency', 'frequency.id')
        .innerJoin(
          'instructors',
          'training.instructor',
          'instructors.id',
        )
        .innerJoin('score', 'training.completion', 'score.id')
        .innerJoin('plants', 'employees.plant', 'plants.id')
        .where('employees.last_name', 'ilike', last_name)
        .andWhere('employees.first_name', 'ilike', first_name)
        .andWhere('employees.employee_id', 'ilike', employee_id)
        .andWhere('plants.plant', 'ilike', plant)
        .andWhere('employees.department', 'ilike', department)
        .andWhere('employees.cost_center', 'ilike', cost_center)
        .andWhere('classes.title', 'ilike', title)
        .andWhere('score.score', 'ilike', score)
        .andWhere('instructors.instructor', 'ilike', instructor)
        .andWhere('training.completion_date', completion_date)
        .select(
          'training.id',
          'employees.last_name',
          'employees.first_name',
          'employees.employee_id',
          'plants.plant',
          'employees.department',
          'employees.cost_center',
          'classes.title',
          'score.score',
          'training.completion_date',
          'frequency.frequency',
          'training.due_date',
          'instructors.instructor',
          'training.training_active',
        );
    } else {
      return knex('training')
        .innerJoin('employees', 'training.employee', 'employees.id')
        .innerJoin('classes', 'training.training_title', 'classes.id')
        .innerJoin('frequency', 'training.frequency', 'frequency.id')
        .innerJoin(
          'instructors',
          'training.instructor',
          'instructors.id',
        )
        .innerJoin('score', 'training.completion', 'score.id')
        .innerJoin('plants', 'employees.plant', 'plants.id')
        .where('employees.last_name', 'ilike', last_name)
        .andWhere('employees.first_name', 'ilike', first_name)
        .andWhere('employees.employee_id', 'ilike', employee_id)
        .andWhere('plants.plant', 'ilike', plant)
        .andWhere('employees.department', 'ilike', department)
        .andWhere('employees.cost_center', 'ilike', cost_center)
        .andWhere('classes.title', 'ilike', title)
        .andWhere('score.score', 'ilike', score)
        .andWhere('instructors.instructor', 'ilike', instructor)
        .andWhere('due_date', due_date)
        .andWhere('completion_date', completion_date)
        .select(
          'training.id',
          'employees.last_name',
          'employees.first_name',
          'employees.employee_id',
          'plants.plant',
          'employees.department',
          'employees.cost_center',
          'classes.title',
          'score.score',
          'training.completion_date',
          'frequency.frequency',
          'training.due_date',
          'instructors.instructor',
          'training.training_active',
        );
    }
  },
  updateTraining(id, training) {
    return knex('training').where('id', id).update(training);
  },
  archiveTraining(id) {
    return knex('training').where('id', id).update({
      frequency: 1,
      due_date: null,
      completion: 4,
      training_active: false,
    });
  },
  newTraining(training) {
    return knex('training').returning('*').insert(training);
  },
  deleteTraining(id) {
    return knex('training').where('id', id).del();
  },

  //Plants Table
  getAllPlants() {
    return knex('plants');
  },
  updatePlant(id, plant) {
    return knex('plants')
      .where('id', id)
      .returning('*')
      .update(plant);
  },
  postNewPlant(newPlant) {
    return knex('plants').returning('*').insert({plant: newPlant});
  },
  deletePlant(id) {
    return knex('plants').returning('*').where('id', id).del();
  },

  //Score Table
  getAllScore() {
    return knex('score');
  },
  updateScore(id, score) {
    return knex('score').where('id', id).returning('*').update(score);
  },
  postNewScore(newScore) {
    return knex('score').returning('*').insert({score: newScore});
  },
  deleteScore(id) {
    return knex('score').returning('*').where('id', id).del();
  },

  //Classes Table
  getAllClasses() {
    return knex('classes');
  },
  updateClass(id, classes) {
    return knex('classes')
      .where('id', id)
      .returning('*')
      .update(classes);
  },
  postNewClass(newClass) {
    return knex('classes').returning('*').insert({title: newClass});
  },
  deleteClass(id) {
    return knex('classes').returning('*').where('id', id).del();
  },

  //Instructors Table
  getAllInstructors() {
    return knex('instructors');
  },
  updateInstructor(id, instructor) {
    return knex('instructors')
      .where('id', id)
      .returning('*')
      .update(instructor);
  },
  postNewInstructor(newInstructor) {
    return knex('instructors').returning('*').insert({instructor: newInstructor});
  },
  deleteInstructor(id) {
    return knex('instructors').returning('*').where('id', id).del();
  },

  //Frequency Table
  getAllFrequency() {
    return knex('frequency');
  },
  updateFrequency(id, frequency) {
    return knex('frequency')
      .where('id', id)
      .returning('*')
      .update(frequency);
  },
  postNewFrequency(newFrequency) {
    return knex('frequency').returning('*').insert({frequency: newFrequency});
  },
  deleteFrequency(id) {
    return knex('frequency').returning('*').where('id', id).del();
  },
};
