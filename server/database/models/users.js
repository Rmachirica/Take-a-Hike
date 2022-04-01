// Import Dependencies
const { DataTypes } = require('sequelize');
const { db } = require('../index.js');

// Create Schema
const Users = db.define('users', {
  _id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING(80), allowNull: false},
  birdSightingsArray: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false}
  // password: {Type: DataTypes.STRING, allowNull: false}, (SANTO!!!!!!)
 });

 // Export Schema
 module.exports = {
   Users,
 }
 