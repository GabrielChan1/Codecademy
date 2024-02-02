const express = require('express');
const router = express.Router();
const { create, read, removeTodo } = require('../controller');

// Create a new task
router.post('/todo/create', create);

// Retrieve all tasks
router.get('/todos', read);

// Delete a task with a given id
router.delete('/todo/:id', removeTodo);

module.exports = router;