class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {

      
      document.body.style.background = 'black';
      this.html = `<img src="${this.imgUrl}" alt ="img">`;
      this.render()
    
    }
    
    render() {
      document.body.innerHTML = this.html;
      const img = document.querySelector('img');
      img.style.position = 'fixed';
      img.style.top = `${this.top}px`;
      img.style.left = `${this.left}px`;
      img.style.width = `${this.width}px`;

    }
  
    moveUp() {
      this.top -= 20;
      this.render();

    }
    moveDown() {
    this.top +=20;
    this.render();
 
    }
    moveLeft() {
    this.left -=20;
    this.render();

    }
    moveRight() {
    this.left +=20;
    this.render();

    }
  }
  
  const imgUrl = 'https://bit.ly/2tcDito';
  
  const mfLogotip = new Logo(imgUrl);


  mfLogotip.init();

 
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  // something else, чтобы всё работало

//   2. Добавить к приложению желтый круг (пример ЗДЕСЬ)

// Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.


class Circle {
 constructor (size, color){
 
  this.size = size;
  this.color = color;
 }
 
 createCircle(){

  return `
   <div style =  "width: ${this.size}px; height: ${this.size}px; background: ${this.color}; border-radius: 50%" >     
   </div>
  `
 }

 render(){
 document.body.innerHTML +=this.createCircle();
 }

}

const newCircle = new Circle(100, 'yellow');
newCircle.render();
