// 1) объявляется переменная tasks которая представляет собой массив. этот массив будет хранить список задач. изначально он пустой.
let tasks = [];

// 2) отображение задачи на странице
// определяется функция renderTanks() которая отвечает за отображение списка задач на странице
//  определяется переменная которую нельзя переназначить = она получает элемент списка ul с идентификатором "task-list" из хтмл-документа и сохраняет в него переменную taskList
// innerHTML очищает содержимое списка. для того чтобы при каждом обновлении списка не добавлялись новые элементы поверх старых
// метод forEach() перебирает все элементы массива tasks для каждой задачи task и ее индекса index выполняется код внутри фигурных скобок:
// переменная li создает новый элемент списка li
// li.innerHTML добавляю в элемент списка li текст задачи и кнопку "удалить"
// appendChild(li) добавляет созданный элемент списка li в список ul на странице

function renderTasks() {
	const taskList = document.getElementById("task-list");
	taskList.innerHTML = "";
	tasks.forEach((task, index) => {
		const li = document.createElement("li");
		li.innerHTML = `
            ${task}
            <button onclick="removeTask(${index})">Удалить</button>
        `;
		taskList.appendChild(li);
	});
}

// 3) добавление задачи в список дел
// определяется функция addTask() которая отвечает за добавление новой задачи в список
// переменная taskInput получает поле ввода текса input с идентификатором task-input из хтмл-документа
// переменная task получает текст введенный пользователем в поле ввода и сохраняет его в переменную task
// if проверка что введенный текст не пустой и не состоит только из пробелов trim() удаляет лишние пробелы вначале и вконце строки
// метод push добавляет новую задачу task в конец массив tasks
// свойство value очищает поле ввода текста после добавления задачи
// вызов функции renderTasks() чтобы обновить отображение списка на странице

function addTask() {
	const taskInput = document.getElementById("task-input");
	const task = taskInput.value;
	if (task.trim() !== "") {
		tasks.push(task);
		taskInput.value = "";
		renderTasks();
	}
}

// 4 удаление задачи из списка дел
// определяется функция removeTask() которая отвечает за удаление задачи из списка
// метод splice удаляет элемент с указанным индексом index из массива tasks (метод splice изменяет исходный массив)
// вызывается функция renderTasks() чтобы обновить отображение списка на странице после удаления задачи
// вне области функции снова вызывается функция renderTasks() при загрузке страницы чтобы отобразить пустой список (если массив tasks не пустой то список задач которые могли быть сохранены ранее например в local storage)

function removeTask(index) {
	tasks.splice(index, 1);
	renderTasks();
}
renderTasks();
