let tasks = [];

// Function to render tasks
function renderTasks() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = '';

  // Sort tasks by priority (high, medium, low)
  tasks.sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "todo-item", task.priority + "-priority");
    li.innerHTML = `
      <span class="fw-bold">${task.name}</span> 
      <button class="btn btn-danger btn-sm float-end ms-2" onclick="removeTask(${index})">Remove</button>
    `;
    todoList.appendChild(li);
  });
}

// Function to add a new task
function addTask(event) {
  event.preventDefault();

  const taskInput = document.getElementById("task");
  const priorityInput = document.getElementById("priority");

  // Get task name and priority
  const taskName = taskInput.value;
  const priority = priorityInput.value;

  // Add new task to tasks array
  tasks.push({ name: taskName, priority: priority });

  // Render the updated task list
  renderTasks();

  // Clear input fields
  taskInput.value = '';
  priorityInput.value = 'low';
}

// Function to remove task
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Event listener for the form submission
document.getElementById("todo-form").addEventListener("submit", addTask);