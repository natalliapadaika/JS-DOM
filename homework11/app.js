const back = document.querySelector('.backgraund');
const wrapper = document.querySelector('.wrapper');


const gekon = wrapper.querySelector('.wrapper-img-gekon');
const hamel = wrapper.querySelector('.wrapper-img-hamel');
const reptilia = wrapper.querySelector('.wrapper-img-reptilia');

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
localStorage.setItem('back', back.getAttribute('class'))

})

back.className = localStorage.getItem('back');

