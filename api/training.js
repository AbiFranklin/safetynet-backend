 const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/all', (req, res) => {
  queries.getAllTraining().then((training) => {
    res.json(training);
  });
});

router.get('/', (req, res) => {
  let completion_date, due_date;
  let first_name = req.body.first_name + '%';
  let last_name = req.body.last_name + '%';
  let plant = req.body.plant + '%';
  let employee_id = req.body.employee_id + '%';
  let cost_center = req.body.cost_center + '%';
  let department = req.body.department + '%';
  let instructor = req.body.instructor + '%';
  let title = req.body.title + '%';
  let score = req.body.score + '%';
  if (req.body.completion_date.length == 10) {
    completion_date = req.body.completion_date + '%';
  } else {
    completion_date = '%';
  }
  if (req.body.due_date.length == 10) {
    due_date = req.body.due_date + '%';
  } else {
    due_date = '%';
  }
  queries
    .getAllTrainingParams(
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
    )
    .then((training) => {
      res.json(training);
    });
});

router.put('/archive/:id', (req, res) => {
  queries.archiveTraining(req.params.id).then(() => {
    res.json({
      message: 'Training Archived',
    });
  });
});

router.put('/:id', (req, res) => {
  queries.updateTraining(req.params.id, req.body).then(() => {
    res.json({
      message: 'Training Record Updated',
    });
  });
});

router.post('/', (req, res) => {
  queries.newTraining(req.body).then((training) => {
    res.json(training);
  });
});

router.delete('/:id', (req, res) => {
  queries.deleteTraining(req.params.id).then(() => {
    res.json({
      message: 'Training Record Deleted',
    });
  });
});
module.exports = router;
