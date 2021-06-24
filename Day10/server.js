const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feedRoutes');
const app = express();

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})

const port = 5000;

app.use(bodyParser.json());
app.use('/feed', feedRoutes);

app.listen(port, ()=>{
    console.log("http://localhost:5000");
})