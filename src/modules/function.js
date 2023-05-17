class EditTask {
  static editDescription(
    taskIndex,
    newDescription,
    tasks,
    setTasks,
    updateStorage,
  ) {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, description: newDescription };
      }
      return task;
    });

    setTasks(updatedTasks); // Update the tasks with the edited description
    updateStorage(updatedTasks); // Save the changes to the storage
  }
}

export default EditTask;
