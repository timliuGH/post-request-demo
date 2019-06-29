const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const ip = "0.0.0.0";

console.log(process.env.IP);

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var friends = ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky'];

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/friends', function(req, res) {
    res.render('friends', {friends: friends});
});

app.post('/addFriend', function(req, res) {
    let newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect('/friends');
});

app.listen(port, ip, function() {
    console.log(`Now serving on ${port}`);
});