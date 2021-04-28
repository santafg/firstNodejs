const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');
const port = process.env.PORT || 8000;

var corsOptions = {
    origin: `http://api.openweathermap.org`,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

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

app.get('/weather', cors(corsOptions), function (req, res, next) {
    res.render("weather")
  })
// app.get('/weather' , (req , res) =>{
//     res.render("weather")
// })
app.get('*' , (req , res) =>{
    res.render("error")
})


app.listen(port);