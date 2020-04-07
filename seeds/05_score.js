exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('score')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('score').insert([
        { score: '0%', score_active: true },
        { score: '50%', score_active: true },
        { score: '100%', score_active: true },
        { score: 'Archived', score_active: true },
        { score: 'Completed', score_active: true },
        { score: 'Fail', score_active: true },
        { score: 'In Progress', score_active: true },
        { score: 'Incomplete', score_active: true },
        { score: 'Pass', score_active: true },
        { score: 'Retest', score_active: true },
        { score: 'EXEMPT', score_active: true },
      ]);
    });
};
