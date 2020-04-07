const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllScore().then((score) => {
    res.json(score);
  });
});

router.put('/:id', (req, res) => {
  queries.updateScore(req.params.id, req.body).then((score) => {
    res.json(score);
  });
});

router.post('/', (req, res) => {
  if (req.body.score.length > 0) {
    queries.postNewScore(req.body.score).then((score) => {
      res.json({ message: 'Status Added', score: score });
    });
  } else {
    res.json('Please provide a valid value');
  }
});

router.delete('/:id', (req, res) => {
  queries.deleteScore(req.params.id).then(() => {
    res.json({ message: 'Status Deleted' });
  });
});

module.exports = router;
