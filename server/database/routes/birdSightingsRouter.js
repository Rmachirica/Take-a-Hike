// Import Dependencies
const birdSightingsRouter = require('express').Router();
const { BirdSightings } = require('../models/birdList.js');

// Read all birds from the DB
birdSightingsRouter.route('/').get((req, res) => {
  BirdSightings.find()
    .then(queries => res.json(queries))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create a new bird in the DB
birdSightingsRouter.route('/add').post((req, res) => {
  console.log(req);
  const name = req.body.name;
  const description = req.body.description;
  const img = req.body.img;
  const NewBirdSighting = new BirdSightings(name, description, img);
  NewBirdSighting.save()
    .then(() => res.json('Query Added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Read an specific query in the DB by ID
birdSightingsRouter.route('/:id').get((req, res) => {
  BirdSightings.findById(req.params.id)
    .then(bird => res.json(bird))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update an existing query in the DB
birdSightingsRouter.route('/update/:id').put((req, res) => {
  BirdSightings.findById(req.params.id)
  .then(bird => res.json(bird))
    .catch(err => res.status(400).json('Error: ', err));
});

// Delete a query in the DB by id
birdSightingsRouter.route('/:id').delete((req, res) => {
  BirdSightings.findByIdAndDelete(req.params.id)
    .then(bird => res.json(bird))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Export Router
module.exports ={
  birdSightingsRouter,
};