let tasks = [];

function renderTasks() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = '';

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

function addTask(event) {
  event.preventDefault();

  const taskInput = document.getElementById("task");
  const priorityInput = document.getElementById("priority");

  const taskName = taskInput.value;
  const priority = priorityInput.value;

  tasks.push({ name: taskName, priority: priority });

  renderTasks();

  taskInput.value = '';
  priorityInput.value = 'low';
}
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
document.getElementById("todo-form").addEventListener("submit", addTask);
