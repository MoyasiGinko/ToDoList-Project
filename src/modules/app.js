import EditTask from './function.js';

export const updateStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const renderTasks = (
  tasks,
  deleteData,
  updateData,
  setTasks,
  pendingTasks,
) => {
  const todolist = document.querySelector('.todoLists');
  todolist.innerHTML = '';

  tasks.forEach((task, index) => {
    const element = document.createElement('li');

    if (task.completed === true) {
      element.classList.add('completed', 'list');
    } else {
      element.classList.add('in-progress', 'list');
    }

    element.innerHTML = `
      <input type="checkbox" id="check" class="checkbox" ${
  task.completed ? 'checked' : ''
}>
      <input type="text" class="task" id="task-input" value="${
  task.description
}" ${task.completed ? 'disabled' : ''}>
      <i class="uil uil-trash"></i>
    `;

    const trashIcon = element.querySelector('.uil-trash');
    trashIcon.addEventListener('click', () => {
      deleteData(index);
    });

    const checkbox = element.querySelector('.checkbox');
    checkbox.addEventListener('change', () => {
      task.completed = !task.completed;
      updateData(index, task);
    });

    const taskInput = element.querySelector('.task');
    taskInput.addEventListener('blur', () => {
      EditTask.editDescription(
        index,
        taskInput.value,
        tasks,
        setTasks,
        updateStorage,
      );
    });

    taskInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        taskInput.blur(); // Trigger the blur event to save the changes
      }
    });

    todolist.appendChild(element);
    pendingTasks();
  });
};
