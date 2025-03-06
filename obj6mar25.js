// задание 1 создание объекта
// Создай объект user, который хранит информацию о пользователе:
// Имя (name)
// Возраст (age)
// Город (city)
// Выведи объект в консоль.
// Можно ли создать объект через new Object()? Что это за запись?
//
const user = {
	name: "Kseniya",
	age: 32,
	city: "Saint - Petersburg",
};

user.age = 40;
console.log(user);

let userWithLet = {
	name: "Kseniya",
	age: 32,
	city: "Saint - Petersburg",
};

userWithLet.age = 44;
console.log(userWithLet);

console.log(user); //{ name: 'Kseniya', age: 32, city: 'Saint - Petersburg' }
//
const user2 = new Object();
user2.name = "Aleksandr";
user2.age = 41;
user2.city = "Velikiy novgorod";
console.log(user2); //{ name: 'Aleksandr', age: 41, city: 'Velikiy novgorod' }

// @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// Object.create(proto, propertiesObject)

// proto
// Объект, который станет прототипом вновь созданного объекта.

// propertiesObject
// Необязательный параметр. Если указан и не равен undefined,
// должен быть объектом, чьи собственные перечисляемые свойства
//  (то есть такие, которые определены на самом объекте,
// а не унаследованы по цепочке прототипов) указывают дескрипторы свойств,
//  добавляемых в новый объект.
// Имена добавляемых свойств совпадают с именами свойств в этом объекте.
// Эти свойства соответствуют второму аргументу метода Object.defineProperties().
const user3 = Object.create();
//
//new Object() это конструктор объекта
//{} это литеральная нотация объекта
//
//
//
// Задание 2: Доступ к свойствам
// Используя объект из задачи 1, выведи в консоль:
// Имя пользователя
// Город пользователя
// Сделай это двумя способами:
// Через точку (.)
// Через квадратные скобки ([])
// В чем разница? Покажи на практике
//
console.log(user.name); //Kseniya
//
console.log(user["name"]); //Kseniya
//
//квадратные скобки позволяют обращаться к свойствам объекта используя строковое значение ключа.
//
//
//
// Задание 3: Добавление новых свойств
// Добавь в объект user новое свойство email. Значение выбери любое.
// Но не при создании объекта, а уже к существующему.
// Выведи весь объект снова.
user.email = "kseniya@example.com";
console.log(user);
//
//
//
// Задание 4: Удаление свойства
// Удаляй у объекта свойство city.
// Выведи объект в консоль после удаления.
delete user.city;
console.log(user);
//
//
//
// Задание 5: Методы объекта
// Добавь к объекту метод sayHello(), который будет выводить в консоль строку:
// "Привет, меня зовут ИМЯ"
// Вызови этот метод.
// В чем отличие метода и свойства?
user.sayHello = function () {
	console.log("Привет, меня зовут " + user.name);
};
user.sayHello(); //Привет, меня зовут Kseniya
//
//
//
// Задание 6: Использование this
// Переделай метод sayHello(), чтобы он использовал ключевое слово this для обращения к имени.
// Пример:
// user.sayHello(); // Привет, меня зовут Александр
user2.sayHello = function () {
	console.log("Привет, меня зовут " + this.name);
};
user2.sayHello(); //Привет, меня зовут Aleksandr
//
// {name: "Kseniya", age: 32, city: "Saint - Petersburg"} - это свойства для хранения данных
// user2.sayHello = function () {console.log("Привет, меня зовут " + this.name);} - это метод. метод это функция связанная с объектом. метод определяет поведение объекта. метод может использовать данные объекта (свойства) и выполнять действия. sayHello это метод который использует свойство name объекта user для формирования приветственного сообщения
//
//
//
// Задание 7: Проверка свойства
// Напиши функцию, которая проверяет, есть ли у объекта свойство email.
// Если есть — выведи "Email есть", если нет — "Email отсутствует".
//
function checkEmail(obj) {
	if (obj.email) {
		console.log("email есть");
	} else {
		console.log("email отсутствует");
	}
}
checkEmail(user); //email есть
checkEmail(user2); //email отсутствует
//первый способ (obj.email) проверяет существует ли свойство email в объекте и является ли его значение истинным (не null, undefined, false, 0, "", NaN) если хочу проверить наличие свойства и его значения.
//
//
//или оператор in
function emailInObj(obj) {
	if ("email" in obj) {
		console.log("email есть");
	} else {
		console.log("email отсутствует");
	}
}
emailInObj(user); //email есть
emailInObj(user2); //email отсутствует
//второй способ ("email" in obj) проверяет существует ли свойство email в объекте независимо от его значения, этот способ более надежен.
//
//
//
// Задание 8: Перебор свойств (for...in)
// Используя цикл for...in, выведи в консоль все ключи и значения объекта user.
for (let key in user) {
	console.log(key + ": " + user[key]);
}
//name: Kseniya
//age: 32
//email: kseniya@example.com
//sayHello: function () {
//	console.log("Привет, меня зовут " + user.name);
//}
//есть объект user в нем есть пары ключ key значение user[key]
//цикл for in перебирает все ключи (имена свойств) объекта user 1key=name,2key=age, 3key=city. Цикл перебирает все свойства объекта user и выводит в консоль пары ключ:значение.
//
//
//
// Задание 9: Объекты внутри объектов
// Добавь в объект user свойство address, которое будет объектом с полями:
// улица (street)
// номер дома (house)
// Выведи адрес пользователя в формате:
// "Улица: Название, Дом: Номер"
//
user.address = {
	street: "Ленина",
	house: 1,
};
console.log("Улица: " + user.address.street + ", Дом: " + user.address.house);
//Улица: Ленина, Дом: 1
//
//
//
// Задание 10: Копирование объекта
// Скопируй объект user в новый объект newUser.
// Измени имя у нового пользователя, не меняя оригинальный объект.
// Выведи оба объекта в консоль.
//
let newUser = Object.assign({}, user);
newUser.name = "Xenia";
console.log("Оригинальный объект user: ", user);
console.log("Новый объект newUser: ", newUser);
// Оригинальный объект user:  {
//     name: 'Kseniya',
//     age: 32,
//     email: 'kseniya@example.com',
//     sayHello: [Function (anonymous)],
//     address: { street: 'Ленина', house: 1 }
//   }
//   Новый объект newUser:  {
//     name: 'Xenia',
//     age: 32,
//     email: 'kseniya@example.com',
//     sayHello: [Function (anonymous)],
//     address: { street: 'Ленина', house: 1 }
//   }
// Проблема заключается в том, что метод Object.assign() выполняет поверхностное копирование (shallow copy). Это означает, что при копировании объекта user в newUser копируются только сами свойства и их значения, но вложенные объекты (такие как address) и функции (такие как sayHello) копируются по ссылке.
let newUser2 = JSON.parse(JSON.stringify(user));
newUser2.name = "Xenia";
newUser2.address.street = "Другая улица"; // Изменение не повлияет на user
console.log("Оригинальный объект user: ", user);
console.log("Новый объект newUser2: ", newUser2);
//JSON.parse(JSON.stringify(obj)) не копирует функции.
//Для более сложных случаев рекомендуется использовать рекурсивное копирование или библиотеки.
