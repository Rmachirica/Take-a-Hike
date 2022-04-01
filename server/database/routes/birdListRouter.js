// Import Dependencies
const birdListRouter = require('express').Router();
const { BirdList } = require('../models/birdList.js');

// Read all birds from the DB
birdListRouter.route('/').get((req, res) => {
  BirdList.find()
    .then(birdsObj => res.json(birdsObj))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create a new bird in the DB
birdListRouter.route('/add').post((req, res) => {
  console.log(req);
  const name = req.body.name;
  const description = req.body.description;
  const img = req.body.img;
  const NewBird = new BirdList(name, description, img);
  NewBird.save()
    .then(() => res.json('Query Added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Read an specific bird in the DB by ID
birdListRouter.route('/:id').get((req, res) => {
  BirdList.findById(req.params.id)
    .then(bird => res.json(bird))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update an existing bird in the DB
birdListRouter.route('/update/:id').put((req, res) => {
  BirdList.findById(req.params.id)
  .then(bird => res.json(bird))
    .catch(err => res.status(400).json('Error: ', err));
});

// Delete a bird in the DB by id
birdListRouter.route('/:id').delete((req, res) => {
  BirdList.findByIdAndDelete(req.params.id)
    .then(bird => res.json(bird))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Export Router
module.exports ={
  birdListRouter,
};