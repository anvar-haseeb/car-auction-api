// routes/carRoutes.js
const express = require("express");
const router = express.Router();
const carController = require("../controller/fetchCarController");
const { addCar } = require("../controller/addCarController");
const { deleteCar } = require("../controller/deleteCarController");
const { updateCar } = require("../controller/updateCarController");
// GET all cars
router.get("/", carController.getAllCars);

// GET cars by id
router.get("/:id", carController.carsById);

// POST insert car
router.post("/add", addCar);

// PUT update car
router.put("/update/:id", updateCar);

// DEL delete car
router.delete("/delete/:id", deleteCar);

module.exports = router;
