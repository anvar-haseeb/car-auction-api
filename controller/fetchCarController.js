const carsModel = require("../model/carsModel");
const mongoose = require("mongoose");

// Fetch all cars
const getAllCars = async (req, res) => {
  try {
    debugger;
    const cars = await carsModel.find();
    res.status(200).json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ message: "Failed to fetch cars data" });
  }
};

// Fetch  cars by id
const carsById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    const cars = await carsModel.findById(id);
    if (cars == null) {
      return res.status(200).json({ message: "No data against that id" });
    }
    res.status(200).json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ message: "Failed to fetch cars data" });
  }
};

module.exports = { getAllCars, carsById };
