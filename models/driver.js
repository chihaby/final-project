const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    destination: String,
    date: { type: Date, default: Date.now }
});

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
