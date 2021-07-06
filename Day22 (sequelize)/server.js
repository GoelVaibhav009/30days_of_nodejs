const express = require('express');
const app = express();

const db = require('./models')

const todoRoute = require('./routes/todo_routes')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/todo',todoRoute);

db.sequelize.sync().then(()=>{
    app.listen(3000, ()=> {
        console.log("server ruuning on http://localhost:3000");
    })
})