const express = require('express')
const app = express();
require('dotenv').config();


require('./DBconnection')
const PORT = process.env.PORT;



app.listen(PORT, ()=>{
    console.log(`server started successfully at port: ${PORT}`)})