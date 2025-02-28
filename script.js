// 1) объявляется переменная tasks которая представляет собой массив. этот массив будет хранить список задач. изначально он пустой.
let tasks = [];
const taskList = document.getElementById("task-list");

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

		const editButton = document.createElement("button");
		editButton.textContent = "Редактировать";
		editButton.classList.add("editButton");
		li.appendChild(editButton);

		// Обработчик событий для клика по делит
		const deleteElement = li.querySelector(".deleteButton");
		if (deleteElement) {
			deleteElement.addEventListener("click", function () {
				this.classList.toggle("active");
				removeTask();
			});
		}

		// Обработчик событий для клика по звездочке
		const starElement = li.querySelector(".star");
		if (starElement) {
			starElement.addEventListener("click", function () {
				this.classList.toggle("active");
				saveTasks();
			});
		}

		// Обработчик события для редактировать
		const editElement = li.querySelector(".editButton");
		if (editElement) {
			editElement.addEventListener("click", function () {
				//editTask(taskIndex); // taskIndex - индекс задачи в массиве tasks
				editTask(index); // Исправлено: передаем index
			});
			// editButton.addEventListener("click", function () {
			//  editTask(taskIndex); // taskIndex - индекс задачи в массиве tasks
			// });
		}

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
		saveTasks();
	}
}

// 4 удаление задачи из списка дел
function removeTask(index) {
	tasks.splice(index, 1); // Удаляем элемент из массива tasks
	renderTasks(); // Обновляем отображение списка
	saveTasks(); // Сохраняем изменения в localStorage

	console.log("Удаление задачи с индексом:", index);
	console.log("Массив tasks после удаления:", tasks);
}
renderTasks();

// 5 сохранение состояния звездочки
function saveTasks() {
	const tasks = [];
	const taskList = document.getElementById("taskList");
	if (taskList == null) return;
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

function editTask(taskIndex) {
	const taskItem = taskList.children[taskIndex]; // taskList - элемент <ul>, содержащий задачи
	const taskText = tasks[taskIndex];

	// Заменяем текст задачи на поле ввода
	taskItem.innerHTML = `<input type="text" value="${taskText}">`;

	const input = taskItem.querySelector("input");
	input.focus();

	// Добавляем обработчик событий для сохранения изменений
	input.addEventListener("blur", function () {
		tasks[taskIndex] = input.value;
		saveTasks();
		renderTasks();
	});
}

taskList.addEventListener("click", function (event) {
	const target = event.target;
	if (target.classList.contains("star")) {
		target.classList.toggle("active");
		saveTasks();
	} else if (target.tagName === "LI") {
		target.classList.toggle("completed");
		saveTasks();
	} else if (target.classList.contains("deleteButton")) {
		removeTask(Number(target.dataset.index)); // Исправлено: преобразование в число
	}
});
