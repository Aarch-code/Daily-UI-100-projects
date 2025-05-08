const form = document.getElementById("todoForm");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => createTaskElement(task.text, task.done));
}

function saveTasks() {
  const tasks = Array.from(taskList.children).map(li => ({
    text: li.querySelector("span").textContent,
    done: li.classList.contains("done"),
  }));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskElement(text, done = false) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  if (done) li.classList.add("done");

  span.addEventListener("click", () => {
    li.classList.toggle("done");
    saveTasks();
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (!taskText) return;
  createTaskElement(taskText);
  taskInput.value = "";
  saveTasks();
});

loadTasks();
