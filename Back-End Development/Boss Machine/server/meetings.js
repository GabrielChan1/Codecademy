const express = require('express');
const db = require('./db');

const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
    res.send(db.getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
    try {
        res.status(201).send(db.addToDatabase('meetings', db.createMeeting()));
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});

meetingsRouter.delete('/', (req, res, next) => {
    res.status(204).send(db.deleteAllFromDatabase('meetings'));
})

module.exports = meetingsRouter;