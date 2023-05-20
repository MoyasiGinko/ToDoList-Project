export const updateStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const clearCompleted = (tasks) => {
  const updatedTasks = tasks.filter((task) => !task.completed);
  updatedTasks.forEach((task, index) => {
    task.index = index + 1;
  });
  return updatedTasks;
};

export const complete = (tasks, index) => {
  const task = tasks[index];
  task.completed = !task.completed;
};

export const ClearTask = (dataInstance) => {
  const clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', () => {
    const todolist = document.querySelector('.todoLists');
    const completedTasks = todolist.querySelectorAll('.completed');

    // remove only completed tasks if there are any
    if (completedTasks.length > 0) {
      const tasks = dataInstance.getTasks().filter((task) => !task.completed);
      dataInstance.setTasks(tasks);
    }
    clearCompleted(dataInstance.getTasks());

    // update storage with the latest tasks
    updateStorage(dataInstance.getTasks());

    dataInstance.pendingTasks();
  });
  clearCompleted(dataInstance.getTasks());
};
