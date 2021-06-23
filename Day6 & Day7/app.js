const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const userRoutes = require("./routes/userRoutes");
const app = express();


// app.engine('hbs',expressHbs({defaultLayout: 'main-layout', extname: 'hbs'}));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoutes);

app.listen(3000, () => {
  console.log("At 3000");
});
