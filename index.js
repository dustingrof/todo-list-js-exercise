// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,
  };
  return task;
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
const completeTask = (task) => {
  task.complete = true;
};

// Print the state of a task to the console in a nice readable way
const logTaskState = (task) => {
  console.log(
    `${task.title} has${task.complete ? " " : " not "}been completed`
  );
};

// DRIVER CODE BELOW
const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
