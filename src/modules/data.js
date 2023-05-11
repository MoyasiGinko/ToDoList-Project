/* eslint-disable */
const tasks = [
  {
    description: 'Buy milk',
    completed: false,
    index: 0,
  },
  {
    description: 'Do laundry',
    completed: true,
    index: 1,
  },
  {
    description: 'Learn webpack',
    completed: false,
    index: 2,
  },
];

function renderTasks() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  tasks.sort((a, b) => a.index - b.index);

  for (const task of tasks) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    taskItem.dataset.completed = task.completed;
    taskItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''}>
      <span>${task.description}</span>
      <button>Delete</button>
    `;

    todoList.appendChild(taskItem);
  }
}

function renderForm() {
  const todoForm = document.getElementById('todo-form');

  const form = document.createElement('form');
  form.addEventListener('submit', handleFormSubmit);

  const inputDescription = document.createElement('input');
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('placeholder', 'Enter task description');
  form.appendChild(inputDescription);

  const inputIndex = document.createElement('input');
  inputIndex.setAttribute('type', 'number');
  inputIndex.setAttribute('placeholder', 'Enter task index');
  form.appendChild(inputIndex);

  const addButton = document.createElement('button');
  addButton.setAttribute('type', 'submit');
  addButton.textContent = 'Add Task';
  form.appendChild(addButton);

  todoForm.appendChild(form);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const inputDescription = event.target.elements['description'];
  const inputIndex = event.target.elements['index'];

  const newTask = {
    description: inputDescription.value,
    completed: false,
    index: Number(inputIndex.value),
  };

  tasks.push(newTask);

  inputDescription.value = '';
  inputIndex.value = '';

  renderTasks();
}

renderForm();
renderTasks();
