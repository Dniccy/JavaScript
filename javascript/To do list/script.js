// Holds the list of tasks
let tasks = [];

/**
 * Adds a task from input field
 */
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    input.value = "";
    displayTasks();
  }
}

/**
 * Displays all tasks in the list with Edit and Remove buttons
 */
function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = task;

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => editTask(index, taskSpan, editBtn);

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => removeTask(index);

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(removeBtn);

    li.appendChild(taskSpan);
    li.appendChild(btnGroup);
    taskList.appendChild(li);
  });
}

/**
 * Removes a task based on index
 * @param {number} index 
 */
function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

/**
 * Allows editing of a task in place
 * @param {number} index 
 * @param {HTMLElement} spanEl 
 * @param {HTMLElement} editBtn 
 */
function editTask(index, spanEl, editBtn) {
  const originalText = tasks[index];

  // Create input field with current text
  const input = document.createElement("input");
  input.type = "text";
  input.value = originalText;
  input.style.width = "100%";

  // Replace the span with input field
  spanEl.replaceWith(input);

  // Change Edit button to Save
  editBtn.textContent = "Save";
  editBtn.className = "save-btn";

  editBtn.onclick = () => {
    const newText = input.value.trim();
    if (newText !== "") {
      tasks[index] = newText;
      displayTasks();
    } else {
      alert("Task cannot be empty.");
    }
  };
}