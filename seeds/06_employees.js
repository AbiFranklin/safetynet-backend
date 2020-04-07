exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('employees')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          first_name: 'Tommie Lynn',
          last_name: 'Miller',
          employee_id: 'I1101803',
          hire_date: '2015-07-13',
          plant: 14,
          cost_center: '0851',
          department: 'Safety',
          active: true,
        },
        {
          first_name: 'Alondra',
          last_name: 'Valadez',
          employee_id: 'I1116614',
          hire_date: '2016-10-20',
          plant: 14,
          cost_center: '0851',
          department: 'Safety',
          active: true,
        },
        {
          first_name: 'Gesika',
          last_name: 'Valdez',
          employee_id: 'I1108112',
          hire_date: '2017-05-04',
          plant: 14,
          cost_center: '0851',
          department: 'Safety',
          active: true,
        },
        {
          first_name: 'James',
          last_name: 'Richter',
          employee_id: 'I1108302',
          hire_date: '1993-10-18',
          plant: 14,
          cost_center: '0851',
          department: 'Safety',
          active: true,
        },
      ]);
    });
};
