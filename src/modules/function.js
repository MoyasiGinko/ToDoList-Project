// A Class for editing tasks from the task list
class EditTask {
  static editDescription(taskIndex, newDescription, tasks, setTasks) {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, description: newDescription };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
}

export default EditTask;
