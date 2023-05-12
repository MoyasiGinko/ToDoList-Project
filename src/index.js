import LocalStorage from './modules/storage.js';
import Data from './modules/data.js';

const storage = new LocalStorage('tasks');

const data = new Data();
data.setTasks(storage.loadData());

window.addEventListener('beforeunload', () => {
  storage.saveData(data.getTasks());
});

// import renderTasks from './modules/data.js';

// window.addEventListener('load', renderTasks);
