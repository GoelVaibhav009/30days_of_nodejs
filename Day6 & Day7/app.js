const express = require('express')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')

const app = express();

const users = [];

// app.engine('hbs',expressHbs({defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index', {pageTitle: 'Add User', styleCss: true});
})

app.get('/users', (req,res) => {
    res.render('users', {pageTitle: 'Users', user: users, userlength: users.length});
})

app.post('/add-user', (req,res) => {
    console.log(req.body.username);
    users.push({name: req.body.username});
    res.redirect('/users');
})

app.listen(3000, ()=> {
    console.log("At 3000");
})
