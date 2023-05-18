const deleteData = (tasks, index, renderTasks, pendingTasks, updateStorage) => {
  tasks.splice(index, 1);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  renderTasks();
  pendingTasks();
  updateStorage(tasks);
};

const addTask = (tasks, inputVal, renderTasks, pendingTasks, updateStorage) => {
  const newTask = {
    description: inputVal,
    completed: false,
  };
  tasks.push(newTask);
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
  renderTasks();
  pendingTasks();
  updateStorage(tasks);
};

export { deleteData, addTask };
