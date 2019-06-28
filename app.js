const express = require('express');
const app = express();
const port = 8080;
const ip = "0.0.0.0";

console.log(process.env.IP);

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});


app.listen(port, ip, function() {
    console.log(`Now serving on ${port}`);
});