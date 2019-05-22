const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Drivers collection and inserts the drivers below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/carpool-pal"
  //"mongodb://localhost/reactreadinglist"
);

const driverSeed = [
  {
    firstName: "seeds RIDER first name",
    lastName: "seeds RIDER last name",
    destination:
      "  seeds RIDER destination ",
    date: new Date(Date.now())
  }
];

const riderSeed = [
  {
    firstName: "seeds RIDER first name",
    lastName: "seeds RIDER last name",
    destination:
      "  seeds RIDER destination ",
    date: new Date(Date.now())
  }
];

db.Driver
  .remove({})
  .then(() => db.Driver.collection.insertMany(driverSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Rider
  .remove({})
  .then(() => db.Rider.collection.insertMany(riderSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });