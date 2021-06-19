const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app=express();

const adminRoute = require('./routes/admin');
const product = require('./routes/products.js');

app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoute);
app.use(product);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'), (err)=>{
        if(err) 
            throw err;
    });
});



app.listen(3000);