// A Class for clearing tasks from the task lists
export const updateStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
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

    // update storage with the latest tasks
    updateStorage(dataInstance.getTasks());

    dataInstance.pendingTasks();
  });
};
