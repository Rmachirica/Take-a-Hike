const mysql = require("mysql2/promise");
const { db } = require("./index.js");
const { Trails } = require("./models/trails.js");
const { dummyParkData } = require("../../copyAPIparkData/dummyDataCopy.js");
const { PackingLists } = require("./models/packingLists");
db.options.logging = false;

const seedSqlize = () => {
  mysql
    .createConnection({ user: "root", password: "" })
    .then((db) =>
      db.query("CREATE DATABASE IF NOT EXISTS `TakeAHike`").then(() => db.end())
    )
    .then(() =>
      console.log(
        "\x1b[33m",
        "\nDatabase (MySQL): 'TakeAHike' successfully created!"
      )
    )
    .then(() => Trails.sync({ force: true }))
    .then(() =>
      console.log(
        "\x1b[36m",
        "\nDatabase (MySQL): 'Trails' table successfully created!"
      )
    )
    .then(() => PackingLists.sync({ force: true }))
    .then(() =>
      console.log(
        "\x1b[36m",
        "\nDatabase (MySQL): 'PackingLists' table successfully created!"
      )
    )
    .then(() => Promise.all(dummyParkData.map((txn) => Trails.create(txn))))
    .then((arr) =>
      console.log(
        "\x1b[32m",
        `\nDatabase (MySQL): Successfully seeded trails with ${arr.length} entries!\n`,
        "\x1b[37m"
      )
    )
    .then(process.exit);
};

seedSqlize();
