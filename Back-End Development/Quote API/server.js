const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes', (req, res) => {
    const person = req.query.person;
    res.send(person ?
        { quotes: quotes.filter(quote => quote.person === person) } :
        { quotes: quotes });
})

app.get('/api/quotes/random', (res) => {
    const randomQuote = getRandomElement(quotes);
    res.send({
        quote: randomQuote
    });
});

app.post('/api/quotes', (req, res) => {
    const quote = req.query;
    if (quote.quote && quote.person) {
        quotes.push(quote);
        res.status(201).send(quote);
    }
    else {
        res.status(400).send();
    }
});

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});