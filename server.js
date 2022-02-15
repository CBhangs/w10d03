const express = require('express');

const app = express()

// Greeting

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>Hello, ${req.params.name}!</h1>`);
});

// Tip calculator

app.get('/tip/:total/:tipPercentage', (req, res) =>{
    let tip = req.params.total * req.params.tipPercentage / 100;
    res.send(`<h1>${tip}</h1>`);
});

// Magic 8 ball

const replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

let randomReply = '';

const randomizer = () => {
    randomReply = replies[Math.floor(Math.random()*replies.length)];
}

app.get('/magic/:question', (req, res) => {
    randomizer();
    res.send(`${req.params.question}?
    <br>
    <br>
    The Magic 8 ball says: <h1>"${randomReply}"</h1>`);
});

app.listen(3001, function () {
    console.log('Listening on port 3000');
  });