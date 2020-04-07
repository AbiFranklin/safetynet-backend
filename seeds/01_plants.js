exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        { plant: 'Accounting', plant_active: true },
        { plant: 'AMTOPP Division Office', plant_active: true },
        { plant: 'BOPP', plant_active: true },
        { plant: 'CFP', plant_active: true },
        { plant: 'Communications', plant_active: true },
        { plant: 'Concentrates', plant_active: true },
        { plant: 'HR', plant_active: true },
        { plant: 'IBS', plant_active: true },
        { plant: 'MEDICAL', plant_active: true },
        { plant: 'NJ', plant_active: true },
        { plant: 'Profile', plant_active: true },
        { plant: 'PVC', plant_active: true },
        { plant: 'Terminated', plant_active: true },
        { plant: 'TX Admin', plant_active: true },
        { plant: 'Utilities', plant_active: true },
        { plant: 'WP Division Office', plant_active: true },
        { plant: 'XF', plant_active: true },
      ]);
    });
};
