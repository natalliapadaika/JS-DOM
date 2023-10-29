// Задание 1

// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

class Home {
    constructor(floor){
      this.floor = floor;
        this.square = 50;

    }

    addSquare(){
        this.square +=5;
    }
}

const HomeForGuest = new Home (2)
console.log(HomeForGuest);
HomeForGuest.addSquare();
console.log(HomeForGuest);

// Задание 2

// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:



// sum() возвращает сумму введённых свойств.

// mul() возвращает произведение введённых свойств

class Calculator {
    constructor (){
        this.oneNum = +(prompt('введите первое число', ''));
        
        this.twoNum = +(prompt('введите второе число', '')); 
        
    }
    sum(){
        return this.oneNum + this.twoNum
    }
    mul(){
        return this.oneNum * this.twoNum  
    }
}

const calc = new Calculator();
console.log(calc);
console.log(calc.sum());
console.log(calc.mul());
