const carsModel = require("../model/carsModel");

// Insert  cars 
const addCar = async (req, res) => {
  try {
    console.log(req.body)
    let { Make, Model, Year, Mileage, Location,'Auction Date': auctionDate} = req.body
    if (!auctionDate) {
      auctionDate = new Date();
    }

    if(!(Make && Model && Location && Mileage)){
      res.json({ message: "The fields are required" });
      return;
    }
   const new_car = new carsModel({
      Make: Make,
      Model: Model,
      Year: Year,
      Mileage: Mileage,
      Location: Location,
      "Auction Date": auctionDate 
    })
    await new_car.save();
    res.status(200).json({message:"Successfully added the Car",car: new_car});
  } catch (error) {
    console.error("Error inserting cars:", error);
    res.status(500).json({ message: "Failed to insert cars data" });
  }
};


module.exports = {addCar};
