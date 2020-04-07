const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllClasses().then((classes) => {
    res.json(classes);
  });
});

router.put('/:id', (req, res) => {
  queries.updateClass(req.params.id, req.body).then((classes) => {
    res.json(classes);
  });
});

router.post('/', (req, res) => {
  if (req.body.title.length > 0) {
    queries.postNewClass(req.body.title).then((classes) => {
      res.json({ message: 'Training Added', classes: classes });
    });
  } else {
    res.json('Please provide a valid training name');
  }
});

router.delete('/:id', (req, res) => {
  queries.deleteClass(req.params.id).then(() => {
    res.json({ message: 'Training Deleted' });
  });
});

module.exports = router;
