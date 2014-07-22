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
  {joke: "A drum and a symbol fall off a cliff"},
  {joke: "Why do seagulls fly over the sea? Because they aren't bay-gulls!"},
  {joke: "Why did the fireman wear red, white, and blue suspenders? To hold his pants up."},
  {joke: "Why didn't the crab share his food? Because crabs are territorial animals, that don't share anything."},
  {joke: "Why was the javascript developer sad? Because he didn't Node how to Express himself."},
  {joke: "What do I look like? A JOKE MACHINE!?"},
  {joke: "How did the hipster burn the roof of his mouth? He ate the pizza before it was cool."},
  {joke: "Why is it hard to make puns for kleptomaniacs? They are always taking things literally."},
  {joke: "Why do mermaid wear sea-shells? Because b-shells are too small."},
  {joke: "I'm a humorless, cold hearted, machine."},
  {joke: "Two fish in a tank. One looks to the other and says 'Can you even drive this thing???'"},
  {joke: "Two fish swim down a river, and hit a wall. One says: 'Dam!'"},
  {joke: "What's funnier than a monkey dancing with an elephant? Two monkeys dancing with an elephant."},
  {joke: "How did Darth Vader know what Luke was getting for Christmas? He felt his presents."},
  {joke: "What's red and bad for your teeth? A Brick."},
  {joke: "What's orange and sounds like a parrot? A Carrot."},
  {joke: "What do you call a cow with no legs? Ground beef"},
  {joke: "Two guys walk into a bar. You'd think the second one would have noticed."},
  {joke: "What is a centipedes's favorite Beatle song?  I want to hold your hand, hand, hand, hand..."},
  {joke: "What do you call a chicken crossing the road? Poultry in moton. "},
  {joke: "Did you hear about the Mexican train killer?  He had locomotives"},
  {joke: "What do you call a fake noodle?  An impasta"},
  {joke: "How many tickles does it take to tickle an octupus? Ten-tickles!"}
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

