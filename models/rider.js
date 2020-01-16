const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const riderSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    destination: String,
    date: { type: Date, default: Date.now }
});

const Rider = mongoose.model("Rider", riderSchema);

module.exports = Rider;
