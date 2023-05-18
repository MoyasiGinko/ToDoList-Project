import '../style.css';
import { renderTasks } from './app.js';
import { ClearTask, updateStorage } from './clear.js';
import { deleteData, addTask } from './taskUtils.js';

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

  renderTasks = () => {
    renderTasks(
      this.#tasks,
      this.deleteData.bind(this),
      this.updateData.bind(this),
      this.setTasks.bind(this),
      this.pendingTasks,
    );
  };

  pendingTasks = () => {
    const pendingNum = document.querySelector('.pending-num');
    const pendingTasks = this.#tasks.filter((task) => !task.completed);
    pendingNum.textContent = pendingTasks.length === 0 ? 'no' : pendingTasks.length;
  };

  addData = () => {
    const inputField = document.querySelector('.input-field textarea');
    const noteIcon = document.querySelector('.input-field .note-icon');

    const handleAddTask = () => {
      const inputVal = inputField.value.trim();

      if (inputVal.length > 0) {
        addTask(
          this.#tasks,
          inputVal,
          this.renderTasks,
          this.pendingTasks,
          updateStorage,
        );
        inputField.value = '';
      }
    };

    inputField.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        handleAddTask();
      }
    });

    noteIcon.addEventListener('click', () => {
      handleAddTask();
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
    deleteData(
      this.#tasks,
      index,
      this.renderTasks,
      this.pendingTasks,
      updateStorage,
    );
  };
}

export default Data;
