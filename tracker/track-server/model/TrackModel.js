const mongoose = require("mongoose");

const pointModel = new mongoose.Schema({
  timestamp: {
    type: Number,
  },
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  locations: [pointModel],
});

module.exports = mongoose.model("Track", trackModel);
