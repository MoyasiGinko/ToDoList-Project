import { deleteData, addTask } from '../modules/taskUtils.js';

describe('deleteData function', () => {
  let tasks;
  let renderTasks;
  let pendingTasks;
  let updateStorage;

  beforeEach(() => {
    tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    renderTasks = jest.fn();
    pendingTasks = jest.fn();
    updateStorage = jest.fn();
  });

  test('should delete task at specified index and update tasks', () => {
    const index = 1;
    const expectedTasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 3', completed: false, index: 2 },
    ];

    deleteData(tasks, index, renderTasks, pendingTasks, updateStorage);

    expect(tasks).toEqual(expectedTasks);
  });

  test('should call renderTasks, pendingTasks, and updateStorage after deleting task', () => {
    const index = 1;

    deleteData(tasks, index, renderTasks, pendingTasks, updateStorage);

    expect(renderTasks).toHaveBeenCalled();
    expect(pendingTasks).toHaveBeenCalled();
    expect(updateStorage).toHaveBeenCalledWith(tasks);
  });
});

describe('addTask function', () => {
  let tasks;
  let inputVal;
  let renderTasks;
  let pendingTasks;
  let updateStorage;

  beforeEach(() => {
    tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
    ];

    inputVal = 'New Task';

    renderTasks = jest.fn();
    pendingTasks = jest.fn();
    updateStorage = jest.fn();
  });

  test('should add a new task with the given description and update tasks', () => {
    const expectedTasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
      { description: 'New Task', completed: false, index: 3 },
    ];

    addTask(tasks, inputVal, renderTasks, pendingTasks, updateStorage);

    expect(tasks).toEqual(expectedTasks);
  });

  test('should call renderTasks, pendingTasks, and updateStorage after adding task', () => {
    addTask(tasks, inputVal, renderTasks, pendingTasks, updateStorage);

    expect(renderTasks).toHaveBeenCalled();
    expect(pendingTasks).toHaveBeenCalled();
    expect(updateStorage).toHaveBeenCalledWith(tasks);
  });
});
