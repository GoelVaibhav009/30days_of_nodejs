const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userRoutes = require('./routes/users_routes')
const Port = 3000;

app.use(bodyParser.json());

app.use('/people',userRoutes);

app.get('/', (req,res)=>{
    res.send("Welcome to First Rest API")
})

app.listen(Port, ()=>{
    console.log("http://localhost:3000");
});
