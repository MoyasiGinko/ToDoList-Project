export default function renderTasks() {
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

  const todoList = document.querySelector('.todoLists');

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" class="checkbox" ${
  task.completed ? 'checked' : ''
}>
      <input type="text" class="task" value="${task.description}" ${
  task.completed ? 'disabled' : ''
}>
      <i class="uil uil-trash"></i>
    `;
    todoList.appendChild(listItem);
  });
}
