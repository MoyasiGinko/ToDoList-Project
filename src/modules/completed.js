export default class CompletedTask {
    static markComplete(
      taskIndex,
      {completed = true},
      tasks,
      setTasks,
      updateStorage,
    ) {
      const updatedTasks = tasks.map((task, index) => {
        if (index === taskIndex) {
          return { ...task, completed: completed };
        }
        return task;
      });
  
      setTasks(updatedTasks); // Update the tasks with the edited description
      updateStorage(updatedTasks); // Save the changes to the storage
    }
  }
  
  
  