// Задание 1

// Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const getMessage = ((arr, i = 0) =>{ 

if (i < 5){
        console.log(`сообщение номер ${arr[i]}`);
        setTimeout(getMessage, 2000, arr, i+=1);     
    }
});

getMessage(arr);

// над этим заданием сидела долго, сначала было понятнее самой решать через массив, попозже в учебнике по похожей задаче адаптировала под нужную.......

const getMessageTwo = (from, to) => {
    
    let n = from;
    
    let timerMessage = setInterval(() => {
     console.log(`сообщение номер ${n}`);
     if (n == to){
        clearInterval(timerMessage);
     }
     n++;
    }, 2000);
} 

getMessageTwo(1, 5);

// Задание 2

// Сделать виджет - цифровые часы, оформить по желанию.

// Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.


const clock = document.querySelector('#clock');
// console.log(clock);


const getTimes = () =>{
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    clock.textContent =`${hour} ч. ${minute} мин. ${second} сек.`;
    setTimeout(getTimes, 1000);
};

getTimes();

// Задание 3

// По данному url расположена задача:

// https://jsonplaceholder.typicode.com/todos/1

// В html предусмотреть <div></div>

// Достать с сервера заголовок задачи и отобразить его в div.

let request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

request.send();

request.onload = function() {

  const users = JSON.parse(request.response);
  document.querySelector('#for3').textContent = users.title;

};

// Задание 4

// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.

// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.


const for4 = document.querySelector('#for4');

const renderLi = (usersTwo) =>{
    for (let i=0; i < 20; i++) {
        for4.querySelector('ul').insertAdjacentHTML("afterbegin", `<li>${usersTwo[i].title}</li>`);
        
    }

}


let requestTwo = new XMLHttpRequest();
requestTwo.open('Get', 'https://jsonplaceholder.typicode.com/todos');
requestTwo.send();
requestTwo.onload = function() {
const usersTwo = JSON.parse(requestTwo.response);
renderLi(usersTwo);
}
