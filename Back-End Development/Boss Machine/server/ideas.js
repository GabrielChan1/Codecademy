const express = require('express');
const db = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

const ideasRouter = express.Router();

ideasRouter.get('/', (req, res, next) => {
    res.send(db.getAllFromDatabase('ideas'));
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    try {
        res.status(201).send(db.addToDatabase('ideas', req.body));
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    const idea = db.getFromDatabaseById('ideas', req.params.ideaId);
    if (idea) {
        res.send(idea);
    }
    else {
        res.status(404).send();
    }
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    try {
        const result = db.updateInstanceInDatabase('ideas', req.body);
        if (result) {
            res.send(result);
        }
        else {
            res.status(404).send();
        }
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const result = db.deleteFromDatabasebyId('ideas', req.params.ideaId);
    res.status((result) ? 204 : 404).send();
});

module.exports = ideasRouter;