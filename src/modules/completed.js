export default class CompletedTask {
  static markComplete(
    taskIndex,
    { completed = true },
    tasks,
    setTasks,
    updateStorage,
  ) {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, completed };
      }
      return task;
    });

    setTasks(updatedTasks);
    updateStorage(updatedTasks);
  }
}
