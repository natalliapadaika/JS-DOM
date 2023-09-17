// Задание 1

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

const inputOne = document.querySelector('input');
const ulOne = document.querySelector('ul');

inputOne.addEventListener ('keydown', (event) =>{
        const li = document.createElement('li');
        li.textContent = event.key;
        ulOne.append(li);

});

// Задание 2

// Вставить в html тег input (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

const inputTwo = document.querySelector('.forTwo');

inputTwo.addEventListener('keyup', (event) => {
    console.log(inputTwo.value);
   
});


// Задание 3

// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).


const formThree = document.querySelector('form');
const inputThree = formThree.querySelector('.forThree');

const ulThree = formThree.querySelector('.ulforThree');
// const btnThree = formThree.querySelector('.btn-forThree');

formThree.addEventListener ('submit', (event) =>{
    event.preventDefault();
    const liforThree = document.createElement('li');
    liforThree.textContent = inputThree.value;
    ulThree.append(liforThree);
    inputThree.value='';
});

// Задание 4

// Калькулятор. 

// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.



// 1) решить с помощью if

// 2) решить с помощью evel (https://developer.mozilla.org/...)


const formCalc = document.querySelector('.calc');
const inputNumOne = formCalc.querySelector('.calc_numOne');
const selectCalc = formCalc.querySelector('.calc_select');
const inputNumTwo = formCalc.querySelector('.calc_numTwo');
const resultatCalc = formCalc.querySelector('.calc_resultat');


formCalc.addEventListener('submit', (event) =>{
    event.preventDefault();
    const numOne = Number(inputNumOne.value);
    const numTwo = Number(inputNumTwo.value);
    const selectVal = selectCalc.value;
    if (selectVal === '+'){
        let resultat = numOne + numTwo;
    resultatCalc.append(resultat);
    } else if (selectVal === '-'){
        let resultat = numOne - numTwo;
      resultatCalc.append(resultat); 
    } else if (selectVal === '*'){
       let resultat = numOne * numTwo;
      resultatCalc.append(resultat); 
    } else if (selectVal === '/'){
       let resultat = numOne / numTwo;
      resultatCalc.append(resultat); 
    } else if (selectVal === '^'){
       let resultat = numOne ** numTwo;
    
      resultatCalc.append(resultat); 
    };
    // inputNumOne.value = '';
    // inputNumTwo.value = '';

});

const reset = formCalc.querySelector('.reset')
reset.addEventListener('click', (event) => formCalc.reset());


//  хочу спросить, а на кнопку рассчитать можно еще повесить событие сброса результата, так как в данном случае результат запоминается, а для сброса нужно обновлять страницу.????????
// кнопкой reset делаю сброс и сбрасываются поля, понимаю если бы было бы поле для результата, то тоже бы сбрасывалось, а в dive для сброса результата не получилось...... такого конечно в задании нет, но хочется :))))))


// решить с помощью evel:

// formCalc.addEventListener('submit', (event) =>{
//     event.preventDefault();
//     const numOne = Number(inputNumOne.value);
//     const numTwo = Number(inputNumTwo.value);
//     const selectVal = selectCalc.value;
//     if (selectVal === '+'){
//         resultatCalc.append(eval('numOne + numTwo'));
//     } else if (selectVal === '-'){
//         resultatCalc.append(eval('numOne - numTwo'));
//     } else if (selectVal === '*'){
//         resultatCalc.append(eval('numOne * numTwo'));
//     } else if (selectVal === '/'){
//         resultatCalc.append(eval('numOne / numTwo'));
//     } else if (selectVal === '^'){
//         resultatCalc.append(eval('numOne ** numTwo'));
//     };
//     inputNumOne.value = '';
//     inputNumTwo.value = '';

// });

// Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

const btnForFive = document.querySelector('.for-Five');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  };

  btnForFive.addEventListener('mouseenter', () =>{
    btnForFive.style.background = `rgb(${getRandomInt(0,256)},${getRandomInt(0,256)}, ${getRandomInt(0,256)})`;

  });

  btnForFive.addEventListener('mouseleave', () =>{
    btnForFive.style.rotate = (`${getRandomInt(-180,180)}deg`);

  });