const express = require('express');
const route = express.Router();
const path = require('path');
const reqPath = require('../utils/path')

route.get('/add-product',(req,res, next)=>{
    // res.status(200).send("hi product");4
    res.sendFile(path.join(reqPath, 'views', 'product.html'), (err)=>{
        if(err) throw err;
    })
});

route.post('/add-product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = route;