const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  let hire_date;
  let first_name = req.body.first_name + '%';
  let last_name = req.body.last_name + '%';
  let plant = req.body.plant;
  let employee_id = req.body.employee_id + '%';
  let cost_center = req.body.cost_center + '%';
  if (req.body.hire_date.length == 10) {
    hire_date = req.body.hire_date + '%';
  } else {
    hire_date = '%';
  }
  let department = req.body.department + '%';
  queries
    .getEmployeesParams(
      first_name,
      last_name,
      plant,
      employee_id,
      cost_center,
      hire_date,
      department,
    )
    .then((employees) => {
      res.json(employees);
    });
});

router.get('/all', (req, res) => {
  queries.getAllEmployees().then((employees) => {
    res.json(employees);
  });
});

router.put('/terminate/:id', async (req, res) => {
  let EID;
  await queries.getEmployeeById(req.params.id).then((employee) => {
    EID = 'T-' + employee[0].employee_id;
  });
  queries.terminateEmployee(req.params.id, EID).then((employee) => {
    res.json(employee);
  });
});

router.put('/:id', (req, res) => {
  queries.updateEmployee(req.params.id, req.body).then((employee) => {
    res.json(employee);
  });
});

router.post('/', (req, res) => {
  queries.newEmployee(req.body).then((employee) => {
    res.json(employee);
  });
});

router.delete('/:id', (req, res) => {
  queries.deleteEmployee(req.params.id).then(() => {
    res.json({ message: 'Employee deleted' });
  });
});
module.exports = router;
