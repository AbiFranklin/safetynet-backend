const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllFrequency().then((frequency) => {
    res.json(frequency);
  });
});

router.put('/:id', (req, res) => {
  queries
    .updateFrequency(req.params.id, req.body)
    .then((frequency) => {
      res.json(frequency);
    });
});

router.post('/', (req, res) => {
  if (req.body.frequency == NaN) {
    queries.postNewFrequency(req.body.frequency).then((frequency) => {
      res.json({
        message: 'Frequency Value Added',
        frequency: frequency,
      });
    });
  } else {
    res.json('Please provide a valid frequency value');
  }
});

router.delete('/:id', (req, res) => {
  queries.deleteFrequency(req.params.id).then(() => {
    res.json({ message: 'Frequency Value Deleted' });
  });
});

module.exports = router;
