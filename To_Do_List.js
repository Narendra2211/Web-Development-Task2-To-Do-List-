//Select elements
var addBtn = document.getElementById("add-btn");
var taskInput = document.getElementById("task-input");
var taskList = document.getElementById("task-list");

// Add task on button click
addBtn.addEventListener("click", function () {
  var taskText = taskInput.value.trim();
  if (taskText === "") return;

  var li = document.createElement("li");

  var span = document.createElement("span");
  span.textContent = taskText;

  // Toggle completed
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  var removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  removeBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
