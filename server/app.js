//Importing modules/dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, console.log(`Listening to port: ${PORT}`))

