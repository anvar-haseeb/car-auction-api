const carsModel = require("../model/carsModel");
const mongoose = require("mongoose");

const updateCar = async(req,res)=>{
    let { Make, Model, Year, Mileage, Location,'Auction Date': auctionDate} = req.body
    const { id } = req.params; 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    try{
    const updatedCar = await carsModel.findOneAndUpdate({
        _id:req.params.id
    },{
        Make: Make,
        Model: Model,
        Year: Year,
        Mileage: Mileage,
        Location: Location,
        "Auction Date": auctionDate 
    }
)
console.log(updatedCar)
    if (!updatedCar) {
        return res.status(404).json({ message: 'Car not found' });
    }
    console.log(req.params.id)
    res.status(200).json({message:`Data Updated`,updatedCar})
    }
    catch(error){
    res.status(400).json({message:`Data Updation failed`})
    }
    
}
module.exports = {updateCar}