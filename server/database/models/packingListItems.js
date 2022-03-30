// Import Dependencies
const { DataTypes } = require("sequelize");
const { db } = require("../index.js");

// Create Schema
const PackingListItems = db.define('packingListItems', {
  _id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  packingList_id: {type: DataTypes.INTEGER, allowNull: false, foreignKey: true},
  user_id: {type: DataTypes.INTEGER, allowNull: false, foreignKey: true},
 });

// Export Schema
module.exports = {
  PackingListItems,
};
