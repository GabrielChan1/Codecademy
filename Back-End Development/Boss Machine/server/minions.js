const express = require('express');
const db = require('./db');

const minionsRouter = express.Router();

minionsRouter.get('/', (req, res, next) => {
    res.send(db.getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
    try {
        res.status(201).send(db.addToDatabase('minions', req.body));
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

minionsRouter.get('/:minionId', (req, res, next) => {
    const minion = db.getFromDatabaseById('minions', req.params.minionId);
    if (minion) {
        res.send(minion);
    }
    else {
        res.status(404).send();
    }
});

minionsRouter.put('/:minionId', (req, res, next) => {
    try {
        const result = db.updateInstanceInDatabase('minions', req.body);
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

minionsRouter.delete('/:minionId', (req, res, next) => {
    const result = db.deleteFromDatabasebyId('minions', req.params.minionId);
    res.status((result) ? 204 : 404).send();
});

module.exports = minionsRouter;