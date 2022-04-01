// Import Dependencies
const { DataTypes } = require('sequelize');
const { db } = require('../index.js');

// Create Schema
const BirdList = db.define('birdList', {
  _id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false},
  sound: {type: DataTypes.STRING, allowNull: false},
 });

 // Export Schema
 module.exports = {
  BirdList,
 }