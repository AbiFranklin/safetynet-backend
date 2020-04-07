exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructors')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('instructors').insert([
        { instructor: 'A.Valadez', instructor_active: true },
        { instructor: 'A.Valadez/G.Valdez', instructor_active: true },
        { instructor: 'A. Franklin', instructor_active: false },
        { instructor: 'A. Alvarez', instructor_active: false },
        { instructor: 'D. Martino', instructor_active: true },
        { instructor: 'J.Richter', instructor_active: true },
        { instructor: 'T.Miller', instructor_active: true },
        { instructor: 'G.Valdez', instructor_active: true },
        { instructor: 'PLACEHOLDER', instructor_active: true },
        { instructor: 'SABER', instructor_active: true },
        { instructor: 'B.Patillo', instructor_active: false },
        { instructor: 'A.Rincon', instructor_active: false },
      ]);
    });
};
