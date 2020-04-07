exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('classes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        { title: 'IBRT', class_active: true },
        { title: 'Dock Safety', class_active: true },
        { title: 'Electric Pallet Jack', class_active: true },
        { title: 'First Aid/CPR', class_active: true },
        { title: 'Flatbed Loading', class_active: true },
        { title: 'Forklift Certification', class_active: true },
        { title: 'Glasses', class_active: true },
        { title: 'Hearing Testing', class_active: true },
        { title: 'Injury Reporting', class_active: true },
        { title: 'LOTO', class_active: true },
        { title: 'Machine Guarding', class_active: true },
        { title: 'Manlift', class_active: true },
        { title: 'Permitting', class_active: true },
        { title: 'Shoes', class_active: true },
        { title: 'SOR', class_active: true },
        { title: 'THM', class_active: true },
        { title: 'Confined Space', class_active: true },
        { title: 'ESMGR', class_active: true },
        { title: 'ESQW', class_active: true },
        { title: 'Medical Leave', class_active: true },
        { title: 'NO TRAINING', class_active: true },
      ]);
    });
};
