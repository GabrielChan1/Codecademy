const pool = require('./database');

// Creates a new task
const create = (description) => {
  pool.query(`INSERT INTO todo (description) VALUES (${description}) RETURNING *`);
};

// Retrieve all tasks
const get = () => {
  pool.query(`SELECT * FROM todo`);
}

// Delete a task with a given id
const remove = (id) => {
  pool.query(`DELETE FROM todo WHERE todo_id = ${id}`);
}

module.exports = { create, get, remove };