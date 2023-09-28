const back = document.querySelector('.backgraund');
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (event) =>{
    if(event.target.closest('.wrapper-img-gekon')){
        back.classList.remove('back-rep');
        back.classList.add('back-gekon');
    
    
    } else if(event.target.closest('.wrapper-img-reptilia')){
        back.classList.remove('back-gekon');
       back.classList.add('back-rep');
    
    } else if(event.target.closest('.wrapper-img-hamel')){
        back.classList.remove('back-gekon', 'back-rep');
    
    } 
    // localStorage.removeItem('class');
    // console.log(back.getAttribute('class'));
    localStorage.setItem('back', back.getAttribute('class'));
//    console.log(localStorage.getItem('back'))
})

     back.className = localStorage.getItem('back');


