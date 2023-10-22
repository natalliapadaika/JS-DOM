// Задание 1


// 1. Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.

// С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые другие).

// Добавить эти объекты в массив shops.

// В итоге должен получиться массив объектов типа:

// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]



// 2. С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:

// ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']

function Shop (title, address){

    this.title = title;
    this.address = address;

};

const green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
const proStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');
 
const shops = [{...green}, {...proStore}];

console.log(shops);

const adress = shops.map(item => item.address);
 console.log(adress);

//  Задание 2

// Напишите асинхронную функцию, которая получает список пользователей с сервера jsonplaceholder. Выведите список пользователей на страницу.

// В задании используйте синтаксис async-await и предусмотрите обработку ошибок.


    
    

    const getUsers = async (url) =>{
    
    const resp = await fetch(url)
    const users = await resp.json()
 

    const div = document.createElement('div')
   
    users.forEach(element => {
        div.innerHTML += `<p>${element.name}</p>`
       
    });

    document.body.append(div);

    throw new Error ('my error')


};

// это через fetch:

// const getUsers = (url) =>{
//     fetch(url)
//     .then (responce => responce.json())
//     .then (users =>{

//         const div = document.createElement('div')
   
//         users.forEach(element => {
//         div.innerHTML += `<p>${element.name}</p>`
               
//         });
        
//          document.body.append(div);
        
//     return users

//     }) 
//     throw new Error ('my error')
    
// }





 const url = 'https://jsonplaceholder.typicode.com/users'


try {
  getUsers(url);

  
} catch (error) {
console.log(error.message);
}

 // не могу понятъ, уже и видео пересмотрела.... сделала специально ошибку через trow, но она не ловится в try catch. если в самом блоке try ввожу ошибку, например getUsers(url1), то ошибка обрабатывается (ловится), если внутри функции, то никак..... 
// переделала задачу на fetch... и как я поняла если ошибку вывожу вне блока .then, то все ок в try - cath ловится. а так как async отдает промис и получается ошибка идет внутри промиса то и не выходит ее словить. ??? или я сама себя запутала
