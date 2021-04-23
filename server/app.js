//Importing modules/dependencies
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/routes.js");
const dotenv = require("dotenv");
require("dotenv").config();
//Initialize app
const app = express();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

console.log(DATABASE_URL)

//Use middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//Main route
app.use("/book", route);

//Connecting to database
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true ,
    useCreateIndex: true,
    useFindAndModify:false

});

mongoose.connection
  .once("open", () => {
    console.log("Connected to database");
  })
  .on("error", (error) => {
    console.log("Error: ", error);
  });

//Server listen
app.listen(PORT, console.log(`Listening to port: ${PORT}`));
