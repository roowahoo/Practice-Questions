  
const express = require('express');
const hbs = require('hbs');
// First step
const wax=require("wax-on");

let app = express();

app.set('view engine', 'hbs');
// Second step
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts')

app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.render('index.hbs');
})

app.get('/about-us', (req,res)=>{
    res.render('about-us.hbs');
})
app.get('/contact-us', (req,res)=>{
    res.render('contact-us.hbs');
})

app.listen(3000, ()=>{
    console.log("Server has started");
})