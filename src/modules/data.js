import '../style.css';

class Data {
  #tasks;

  constructor() {
    this.#tasks = [];
    this.renderTasks();
    this.addData();
  }

  getTasks() {
    return this.#tasks;
  }

  setTasks(tasks) {
    this.#tasks = tasks;
    this.renderTasks();
  }

  addData = () => {
    const inputField = document.querySelector('.input-field textarea');

    inputField.addEventListener('keyup', (e) => {
      const inputVal = inputField.value.trim();

      if (e.key === 'Enter' && inputVal.length > 0) {
        const newTask = {
          description: inputVal,
          completed: false,
          index: this.#tasks.length,
        };
        this.#tasks.push(newTask);
        this.renderTasks();
        inputField.value = '';
      }
    });
  };

  readData = () => this.#tasks;

  updateData = (index, newData) => {
    this.#tasks[index] = newData;
    this.renderTasks();
  };

  deleteData = (index) => {
    this.#tasks.splice(index, 1);
    this.renderTasks();
  };

  renderTasks = () => {
    const todolist = document.querySelector('.todoLists');
    todolist.innerHTML = '';

    this.#tasks.forEach((task, index) => {
      const element = document.createElement('li');

      if (task.completed === true) {
        element.classList.add('completed', 'list');
      } else {
        element.classList.add('in-progress', 'list');
      }

      element.innerHTML = `
      <input type="checkbox" class="checkbox" ${
        task.completed ? 'checked' : ''
      }>
      <input type="text" class="task" value="${task.description}" ${
        task.completed ? 'disabled' : ''
      }>
      <i class="uil uil-trash"></i>
    `;

      const trashIcon = element.querySelector('.uil-trash');
      trashIcon.addEventListener('click', () => {
        this.deleteData(index);
      });

      const checkbox = element.querySelector('.checkbox');
      checkbox.addEventListener('change', () => {
        task.completed = !task.completed;
        this.updateData(index, task);
      });

      const taskInput = element.querySelector('.task');
      taskInput.addEventListener('blur', () => {
        task.description = taskInput.value;
        this.updateData(index, task);
      });

      todolist.appendChild(element);
    });
  };
}

export default Data;
