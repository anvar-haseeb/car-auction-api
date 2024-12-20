const mongoose = require("mongoose");
const carsSchema = new mongoose.Schema(
  {
    Make: {
      type: String,
    },
    Model: {
      type: String,
    },
    Year: {
      type: Number,
    },
    Mileage: {
      type: Number,
    },
    Location: {
      type: String,
    },
    "Auction Date": {
      type: Date,
    },
  },
  {
    versionKey: false,
    collection: "cars", // Explicitly set the collection name here to  lowecasetransformation
  }
);

const carsModel = mongoose.model("cars", carsSchema);

module.exports = carsModel;
