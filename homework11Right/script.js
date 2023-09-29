// const back = document.querySelector('.backgraund');
const wrapper = document.querySelector('.wrapper');
const images = document.querySelectorAll('.wrapper img');

const images2 = Array.from(document.querySelectorAll('.wrapper img'));

if(localStorage.activeSrc){
    document.body.style.backgroundImage = `url(${localStorage.activeSrc})`;
} else {
    document.body.style.backgroundImage = `url(${images2[0].src})`
}

wrapper.addEventListener('click', (event) =>{
    if(event.target.matches('img')){
        const activeImage = event.target;//img на кот кликнули
        images.forEach(img =>img.classList.remove('active'));
         activeImage.classList.add('active');
        const activeSrc = activeImage.getAttribute('src') //src (адрес) картинки, на кот кликнули
        localStorage.activeSrc = activeSrc;
        document.body.style.backgroundImage = `url(${activeSrc})`;
    }
});





// wrapper.addEventListener('click', (event) =>{
//     if(event.target.closest('.wrapper-img-gekon')){
//         back.classList.remove('back-rep');
//         back.classList.add('back-gekon');
    
    
//     } else if(event.target.closest('.wrapper-img-reptilia')){
//         back.classList.remove('back-gekon');
//        back.classList.add('back-rep');
    
//     } else if(event.target.closest('.wrapper-img-hamel')){
//         back.classList.remove('back-gekon', 'back-rep');
    
//     } 
//     // localStorage.removeItem('class');
//     // console.log(back.getAttribute('class'));
//     localStorage.setItem('back', back.getAttribute('class'));
// //    console.log(localStorage.getItem('back'))
// })

//      back.className = localStorage.getItem('back');


