const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');
const port = process.env.PORT || 8000;

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const staticPath = path.join(__dirname , "../public");
const templatePath = path.join(__dirname , "../templates/views");
const partialsPath = path.join(__dirname , "../templates/partials");


app.set("view engine" , "hbs");
app.set("views" , templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));


app.get('' , (req , res) =>{
    res.render("index");
})
app.get('/about' , (req , res) =>{
    res.render("about");
})
app.get('/weather' , (req , res) =>{
    res.render("weather")
})
app.get('*' , (req , res) =>{
    res.render("error")
})


app.listen(port);