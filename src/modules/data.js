import '../style.css';
import EditTask from './function.js';
import { ClearTask, updateStorage } from './clear.js';

class Data {
  #tasks;

  constructor() {
    this.#tasks = [];
    this.renderTasks();
    this.addData();
    ClearTask(this);
  }

  getTasks() {
    return this.#tasks;
  }

  setTasks(tasks) {
    // Assign new index values based on order in array
    tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    this.#tasks = tasks;
    this.renderTasks();
  }

  pendingTasks = () => {
    const pendingNum = document.querySelector('.pending-num');
    const pendingTasks = this.#tasks.filter((task) => !task.completed);
    pendingNum.textContent = pendingTasks.length === 0 ? 'no' : pendingTasks.length;
  };

  addData = () => {
    const inputField = document.querySelector('.input-field textarea');

    inputField.addEventListener('keyup', (e) => {
      const inputVal = inputField.value.trim();

      if (e.key === 'Enter' && inputVal.length > 0) {
        const newTask = {
          description: inputVal,
          completed: false,
        };
        this.#tasks.push(newTask);
        this.#tasks.forEach((task, index) => {
          task.index = index + 1;
        }); // update index values
        this.renderTasks();
        inputField.value = '';
        this.pendingTasks();
        updateStorage(this.#tasks);
      }
    });
  };

  readData = () => this.#tasks;

  updateData = (index, newData) => {
    this.#tasks[index] = newData;
    this.renderTasks();
    this.pendingTasks();
    updateStorage(this.#tasks);
  };

  deleteData = (index) => {
    this.#tasks.splice(index, 1);
    this.#tasks.forEach((task, index) => {
      task.index = index + 1;
    }); // update index values
    this.renderTasks();
    this.pendingTasks();
    updateStorage(this.#tasks);
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
        EditTask.editDescription(
          index,
          taskInput.value,
          this.#tasks,
          this.setTasks.bind(this),
        );
      });

      // add click event listener to task input field
      taskInput.addEventListener('click', (e) => {
        // enable editing of task description when clicked
        e.target.removeAttribute('disabled');
      });

      todolist.appendChild(element);
      this.pendingTasks();
    });
  };
}

export default Data;
