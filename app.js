const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
  
const festivalsRoute= require('./routes/festivals'); 
app.use('/festivals',festivalsRoute); 

mongoose.connect("mongodb://localhost:27017/mdb",() =>{
     console.log("Connected to DB");
});

app.listen(3000);