const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllInstructors().then((instructors) => {
    res.json(instructors);
  });
});

router.put('/:id', (req, res) => {
  queries
    .updateInstructor(req.params.id, req.body)
    .then((instructor) => {
      res.json(instructor);
    });
});

router.post('/', (req, res) => {
  if (req.body.instructor.length > 0) {
    queries
      .postNewInstructor(req.body.instructor)
      .then((instructor) => {
        res.json({
          message: 'Instructor Added',
          instructor: instructor,
        });
      });
  } else {
    res.json('Please provide a valid instructor name');
  }
});

router.delete('/:id', (req, res) => {
  queries.deleteInstructor(req.params.id).then(() => {
    res.json({ message: 'Instructor Deleted' });
  });
});

module.exports = router;
