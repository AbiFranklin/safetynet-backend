exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('frequency')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('frequency').insert([
        { frequency: null, frequency_active: true },
        { frequency: 0, frequency_active: true },
        { frequency: 30, frequency_active: true },
        { frequency: 180, frequency_active: true },
        { frequency: 365, frequency_active: true },
        { frequency: 1095, frequency_active: true },
      ]);
    });
};
