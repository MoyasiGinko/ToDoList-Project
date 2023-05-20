import { deleteData, addTask } from '../modules/taskUtils.js';
import EditTask from '../modules/function.js';
import CompletedTask from '../modules/completed.js';
import { clearCompleted, complete } from '../modules/clear.js';

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

describe('editTask function', () => {
  let taskIndex;
  let newDescription;
  let tasks;
  let setTasks;
  let updateStorage;

  beforeEach(() => {
    tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
    ];

    newDescription = 'New Description';

    setTasks = jest.fn();
    updateStorage = jest.fn();
  });

  test('should edit and update tasks', () => {
    taskIndex = 1;

    const expectedTasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'New Description', completed: false, index: 2 },
    ];

    EditTask.editDescription(
      taskIndex,
      newDescription,
      tasks,
      setTasks,
      updateStorage,
    );

    expect(setTasks).toHaveBeenCalledWith(expectedTasks);
  });

  test('should mark tasks to completed', () => {
    taskIndex = 1;

    const expectedTasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
    ];

    CompletedTask.markComplete(
      taskIndex,
      { completed: true },
      tasks,
      setTasks,
      updateStorage,
    );

    expect(setTasks).toHaveBeenCalledWith(expectedTasks);
  });
});

describe('clearCompleted', () => {
  test('removes all completed tasks from the array', () => {
    const tasks = [
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: true, index: 3 },
    ];

    const updatedTasks = clearCompleted(tasks);

    expect(updatedTasks).toEqual([
      { description: 'Task 2', completed: false, index: 1 },
    ]);
  });

  test('updates the index property of remaining tasks in the array', () => {
    const tasks = [
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: true, index: 3 },
    ];

    const updatedTasks = clearCompleted(tasks);

    expect(updatedTasks[0].index).toBe(1);
  });
});

describe('complete', () => {
  test('completes a task that is not already completed', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    complete(tasks, 1);

    expect(tasks[1].completed).toBe(true);
  });

  test('uncompletes a task that is already completed', () => {
    const tasks = [
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    complete(tasks, 0);

    expect(tasks[0].completed).toBe(false);
  });
});
