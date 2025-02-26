// 1) объявляется переменная tasks которая представляет собой массив. этот массив будет хранить список задач. изначально он пустой.
let tasks = [];

// 2) отображение задачи на странице
function renderTasks() {
	const taskList = document.getElementById("task-list");
	taskList.innerHTML = "";
	tasks.forEach((task, index) => {
		const li = document.createElement("li");
		li.classList.add("task");
		li.innerHTML = `
            <span>${task}</span>
            <button class="deleteButton" data-index="${index}">Удалить</button>
            <span class="star">★</span>
        `;

		// Обработчик событий для клика по звездочке
		li.querySelector(".star").addEventListener("click", function () {
			this.classList.toggle("active");
			saveTasks();
		});

		taskList.appendChild(li);
	});
}

// 3) добавление задачи в список дел
function addTask() {
	const taskInput = document.getElementById("task-input");
	const taskText = taskInput.value.trim();

	if (taskText !== "") {
		tasks.push(taskText);
		taskInput.value = "";
		renderTasks();
		saveTasks(); // Сохраняем изменения после добавления задачи
	}
}

// 4 удаление задачи из списка дел
function removeTask(index) {
	tasks.splice(index, 1);
	renderTasks();
}
renderTasks();

// 5 сохранение состояния звездочки
function saveTasks() {
	const tasks = [];
	const taskList = document.getElementById("taskList");
	for (const task of taskList.children) {
		tasks.push({
			text: task.querySelector("span:first-child").textContent,
			completed: task.classList.contains("completed"),
			starred: task.querySelector(".star").classList.contains("active"), //сохраняю состояние звездочки
		});
	}
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 6 загрузка состояния звездочки
function loadTasks() {
	const loadedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
	tasks = loadedTasks.map((task) => task.text); // Восстанавливаем массив tasks
	renderTasks(); // Отрисовываем задачи
	const taskList = document.getElementById("taskList");
	loadedTasks.forEach((task, index) => {
		if (task.completed) {
			taskList.children[index].classList.add("completed");
		}
		if (task.starred) {
			taskList.children[index]
				.querySelector(".star")
				.classList.add("active");
		}
	});
}

// 7 делегирование событий
document.getElementById("taskList").addEventListener("click", function (event) {
	const target = event.target;
	if (target.classList.contains("star")) {
		target.classList.toggle("active");
		saveTasks();
	} else if (target.tagName === "LI") {
		target.classList.toggle("completed");
		saveTasks();
	} else if (target.classList.contains("deleteButton")) {
		removeTask(target.dataset.index);
	}
});

// Загрузка задач при загрузке страницы
loadTasks();
