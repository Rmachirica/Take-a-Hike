// Import Dependencies
const { DataTypes } = require("sequelize");
const { db } = require("../index.js");

// Create Schema
const PackingLists = db.define("packingLists", {
  _id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  listName: { type: DataTypes.STRING, allowNull: false },
  packingListDescription: { type: DataTypes.STRING, allowNull: false },
  //remember to switch allowNull to false when we have user data
  user_id: { type: DataTypes.INTEGER, allowNull: true, foreignKey: true },
});

// Export Schema
module.exports = {
  PackingLists,
};
