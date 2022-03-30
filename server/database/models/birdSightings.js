// Import Dependencies
const { DataTypes } = require('sequelize');
const { db } = require('../index.js');

// Create Schema
const BirdSightings = db.define('birdSightings', {
  _id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  bird_id: {type: DataTypes.INTEGER, allowNull: false, foreignKey: true},
  user_id: {type: DataTypes.INTEGER, allowNull: false, foreignKey: true},
 });

 // Export Schema
 module.exports = {
  BirdSightings,
 }