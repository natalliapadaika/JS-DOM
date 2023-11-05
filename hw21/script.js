class Button {

    constructor (id, label, user){
        this.id = id;
        this.label = label;
        this.user = user;

    }

    onClick(){
       console.log(this.user)   
    }

    render() {

        const but =  document.createElement('button');
        but.id = this.id;
        but.setAttribute('label', this.label);
        but.addEventListener('click', () => this.onClick());
           return but;
      
    }

}

const container = document.getElementById("app");

const data = [
    { id: 1, label: "Button 1", user: { name: "Pit" } },
    { id: 2, label: "Button 2", user: { name: "Jane" } },
    { id: 3, label: "Button 3", user: { name: "Kyle" } }
    ];


   for(let i = 0; i < data.length; i++){
    
    container.append(new Button(data[i].id, data[i].label, data[i].user.name).render())
     
   }

// data.forEach((el, i) => {
//     container.append(new Button(data[i].id, data[i].label, data[i].user.name).render())
 
//     });






