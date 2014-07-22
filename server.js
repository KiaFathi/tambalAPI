var express = require('express');
var app = express();
var port = process.env.PORT || 8500;



var jokes = [
  {joke: 'Did you hear about the guy whose whole left side was cut off? He\'s all right now.'},
  {joke: "I'm reading a book about anti-gravity. It's impossible to put down."},
  {joke: "I wondered why the baseball was getting bigger. Then it hit me."},
  {joke: "It's not that the man did not know how to juggle, he just didn't have the balls to do it."},
  {joke: "I'm glad I know sign language, it's pretty handy."},
  {joke: "My friend's bakery burned down last night. Now his business is toast."},
  {joke: "Why did the cookie cry? It was feeling crumby."},
  {joke: "I used to be a banker, but I lost interest."},
  {joke: "A drum and a symbol fall off a cliff"}
];


app.get('/', function(req, res){
  res.json(jokes);
});

app.get('/joke/random', function(req, res){
  var index = Math.floor(Math.random() * jokes.length);
  var randomQuote = jokes[index];
  res.json(randomQuote);
});

app.get('/joke/:id', function(req, res) {
  if(jokes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No joke found');
  }  
var q = jokes[req.params.id];
  res.json(q);
});



app.listen(port, function(){
  console.log('Listening in on ' + port);
});

