
const getUsers = async (url) =>{
    
    const resp = await fetch(url)
    const users = await resp.json()
    const user = users[0]
    console.log(user);

    // return users
 
};

const url = 'https://jsonplaceholder.typicode.com/users'

try { 
    
    getUsers(url)
 
  } catch (error) {
  console.log(error.message);
  }
 // хочу для себя понять и усвоить такой вопрос (не уверена буду ли завтра на занятии). Код который выше выполняется, показывает мне 1-ый элемент массива, я могу с ним в описании функции поработать и потом ее запустить, от return users как бы тут ничего и не зависит....  если я сделаю код как ниже, и включу return users, то когда запускаю функцию getUsers(url) получаю Promise. И например хочу не в описании функции получать 1 элемент массива и с ним работать, а после запуска функции из результата промиса.
 // когда нужен return?
 // возможно я запуталась и вопросы глуповатые.... но не могу в своей голове это уложить, спасибо.





//   const getUsers = async (url) =>{
    
//     const resp = await fetch(url)
//     const users = await resp.json()
//     return users
 
// };

// const url = 'https://jsonplaceholder.typicode.com/users'

// try {
    // console.log(getUsers(url)); // здесь вижу промис с результатом массив из 10 элементов (можно ли на этом этапе достать из него что-то), если без return то массив undefined 
//   } catch (error) {
//   console.log(error.message);
//   }