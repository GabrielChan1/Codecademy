const formidable = require('formidable');
const { create, get, remove } = require('../model/todo');

// Create a new task
exports.create = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, async (err, fields) => {
    const { description } = fields;
    // Check if the description field exists in the form
    // If description doesn't exist, send error
    if (!fields.description) {
      return res.status(400).json({
        error: 'Description is required',
      });
    }
    // If description exists, add to database using create() function
    try {
      const newTask = await create(description);
      return res.status(201).send({ data: newTask.rows[0] });
    } catch (err) {
      // If description cannot be added to database, send error
      return res.status(400).json({
        err,
      });
    }
  });
};

// Retrieve all tasks
exports.read = async (req, res) => {
  // Retrieve and return  all tasks
  try {
    const task = await get();
    return res.json({ data: task.rows });
  } catch (err) {
    // If the tasks cannot be retrieved, send error
    return res.status(400).json({
      error: err
    });
  }
};

// Delete a tasks with a given id
exports.removeTodo = async (req, res) => {
  const id = Number(req.params.id);

  // If id exists, remove its task from the database
  try {
    await remove(id);
    return res.status(204).send({ data: id });
  } catch (err) {
    // If the task cannot be removed, send error
    return res.status(400).json({
      err,
    });
  }
};