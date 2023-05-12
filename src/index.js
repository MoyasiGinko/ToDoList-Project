import LocalStorage from './modules/storage.js';
import Data from './modules/data.js';

const storage = new LocalStorage('tasks');

// Update localstorage and Data class on load
const data = new Data();
data.setTasks(storage.loadData());

window.addEventListener('beforeunload', () => {
  storage.saveData(data.getTasks());
});
