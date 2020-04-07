const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllPlants().then((plants) => {
    res.json(plants);
  });
});

router.post('/', (req, res) => {
  if (req.body.plant.length > 0) {
    queries.postNewPlant(req.body.plant).then((plant) => {
      res.json({ message: 'Plant Added', plant: plant });
    });
  } else {
    res.json('Please provide a valid plant name');
  }
});

router.put('/:id', (req, res) => {
  queries.updatePlant(req.params.id, req.body).then((plant) => {
    res.json(plant);
  });
});

router.delete('/:id', (req, res) => {
  queries.deletePlant(req.params.id).then(() => {
    res.json({ message: 'Plant Deleted' });
  });
});

module.exports = router;
