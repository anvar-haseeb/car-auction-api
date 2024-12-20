const carsModel = require("../model/carsModel");
const mongoose = require("mongoose");

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    // const deletedCar = await carsModel.findByIdAndDelete(id);

    const result = await carsModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json({ message: "Car successfully deleted" });
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ message: "Failed to delete car data" });
  }
};
module.exports = { deleteCar };
