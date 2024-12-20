const express = require("express");
const connectDB = require("./db/connectDB");
const carsRoutes = require("./routes/carRoutes");
const cors = require('cors'); 
const errorHandler = require("./middleware/errorhandlers");
require("express-async-error")

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors()); //to cross-origin resource sharing
app.use(express.json())// to accept json data

app.use("/cars", carsRoutes);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Invalid route" });
});

app.use(errorHandler)
connectDB().then(() => {
  app.listen(PORT, () => console.log(`SERVER RUNNING ON ${PORT}`));
});
