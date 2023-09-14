// Задание 1

// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.

// Выведите в консоль строку:

// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 

// (необходимые значения добавьте с помощью BOM)

console.log(location);
console.log(navigator);

console.log(`на компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`);

// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).

// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

document.querySelectorAll('li').forEach((item, index) =>{
    console.log(item);
 });

document.querySelectorAll('li').forEach((item, index) =>{
  item.innerText = index;
    console.log(item);
});

// Задание 3

// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

const forRemoveclass = document.querySelectorAll('.forRemove');
console.log(forRemoveclass);

forRemoveclass.forEach(item => item.remove());

// Задание 4

// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

const paragraph = document.createElement('p');
paragraph.textContent = 'navigator - объект для работы с браузером (название, версия, операционная система, текущее местоположение)';
paragraph.style.fontSize = '36px';
paragraph.style.fontWeight = 'bold';
document.querySelector('main').append(paragraph);

// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.



const getnewTeg = ((nameTeg, newColor, text) => {
   const newTeg = document.createElement(`${nameTeg}`);
   newTeg.style.color = `${newColor}`;
   newTeg.innerText = `${text}`;
   return newTeg;

//    return document.body.appendChild(newTeg);
   
});
const a = getnewTeg('a', 'red', 'click-click');

console.log(a);

const p = getnewTeg('p', 'yellow', 'lorem-lorem-lorem');
console.log(p); 

const h2 = getnewTeg('h2', 'violet', 'myText');

console.log(h2);

document.body.appendChild(a);
document.body.append(p);
document.body.append(h2); //не полностью уверена, что вывод в консоль и отправку на страницу нужно сделать вне функции. Но насколько читала вроде бы так. 
// если функция дожна выводить в консоль и отправлять, то так:

const getnewTeg1 = ((nameTeg, newColor, text) => {
   const newTeg = document.createElement(`${nameTeg}`);
   newTeg.style.color = `${newColor}`;
   newTeg.innerText = `${text}`;
   console.log(newTeg);
   return document.body.appendChild(newTeg);
   
});

getnewTeg1('h3', 'orange', 'Title'); // ??? вопрос возник такой, не смогла сама никак придумать, как избавиться от '' при вызове функции, понимаю что для JS тут должно быть string но как это ему объявить правильно ?????

// Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.


for (let i=1960; i <=2020; i++){
   const options = document.createElement('option');
   options.textContent = `${i}`;
document.querySelector('main select').append(options);
};

// Задание 8

// Есть массив ссылок:

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// Вам нужно:

// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег

// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")


// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

const div = document.createElement('div');
div.style.background = 'violet';
div.style.padding = '35px 25px 35px 25px';
document.body.append(div);

linksArr.forEach(item => {
   const teg = document.createElement('a');
   teg.textContent = item;
   teg.href = item;
   teg.target ="_blank";
   teg.style.marginRight = '15px';
   document.querySelector('div').append(teg);
});

// Задание 9*

// Есть массив объектов с полями name, age. Например:

const users = [
{name: 'Mark', age: 12},
{name: 'Olga', age: 30},
{name:'Tom', age: 25},

{name:'Den', age: 43}
]

// Создать в html таблицу (table).

// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.



// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

const table = document.querySelector('table');
console.log(table);
 
// users.forEach((item, index) => {
// const tr = document.createElement('tr');
// tr.classList.add(`fortd${index}`);

// document.querySelector('table').append(tr);

// const forTd = document.querySelectorAll(`tr .fortd${index}`);
// console.log(forTd);
// });



// forTd.forEach (item => item.append(tdName, tdAge));

for (let item of users){
   const tr = document.createElement('tr');
   for (let el in item){
     const td = document.createElement('td');
   td.textContent = `${item.name}` 
   td.textContent = `${item.age}`;
     tr.append(td);
   
   }
   table.appendChild(tr);
}



