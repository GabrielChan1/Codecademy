// Create a new task
export const createTodo = async (todo) => {
  try {
    const res = await fetch('api/todo/create', {
      method: 'POST',
      body: todo,
    });
    return res.json();
  } catch (err) {
    return { err };
  }
};

// Retrieve all tasks
export const getTodos = async () => {
  try {
    const res = await fetch('api/todos');
    const data = await res.json();
    return data;
  } catch (err) {
    return { err };
  }
};

// Delete a task with given id
export const removeTodo = async (id) => {
  try {
    await fetch(`api/todo/${id}`, {
      method: 'DELETE',
    });
    return 'deleted';
  } catch (err) {
    return { err };
  }
};
