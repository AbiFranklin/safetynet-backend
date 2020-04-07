exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('training')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('training').insert([
        {
          employee: 1,
          training_title: 17,
          completion: 4,
          completion_date: '2017-04-07',
          frequency: 1,
          due_date: null,
          instructor: 6,
          training_active: false,
        },
        {
          employee: 1,
          training_title: 6,
          completion: 4,
          completion_date: '2015-07-13',
          frequency: 1,
          due_date: null,
          instructor: 6,
          training_active: false,
        },
        {
          employee: 1,
          training_title: 1,
          completion: 5,
          completion_date: '2020-01-02',
          frequency: 5,
          due_date: '2021-01-01',
          instructor: 3,
          training_active: true,
        },
      ]);
    });
};
