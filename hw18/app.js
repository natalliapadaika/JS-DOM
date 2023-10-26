
const listGroup = document.querySelector('.list-group');
const card = document.querySelector('.card');


const renderCard = (array, i) => {
    listGroup.insertAdjacentHTML('afterbegin', `<button type="button" class="list-group-item list-group-item-action" aria-current="true" data-name="${array[i].API}">
    ${array[i].API}
   </button>`)
card.insertAdjacentHTML('afterbegin', `<div class="card-body" data-name="${array[i].API}">
<h5 class="card-title">Название API: ${array[i].API}</h5>
<h6 class="card-subtitle mb-2 text-muted">Категория: ${array[i].Category}</h6>
<p class="card-text">Описание: ${array[i].Description}</p>
<p class="card-text">Авторизация: ${array[i].Auth}</p>
<a href="${array[i].Link}" class="card-link" target="_blank">Перейти</a>
</div>`)

}

const active = (arr1, arr2, i) =>{
    arr1[i].classList.add('active');
    arr2[i].style.display = 'block'
}


const getAPI = async (url) => {
 try{
    const response = await fetch(url)
    if(!response.ok){
        throw new Error ('Ошибка статус-кода')
}
    const api = await response.json();
    const {entries} = api
 
for (let i=0; i < entries.length; i+=100){

     renderCard(entries, i);
        
}  


}
catch (error){
    console.error(error.message);
}

const buttons = Array.from(document.querySelectorAll('.list-group-item'));
const cards = Array.from(document.querySelectorAll('.card-body'));

active (buttons, cards, 0)



listGroup.addEventListener('click', (e) =>{
   
if(e.target.matches('.list-group-item')){
  
        buttons.forEach(btn =>btn.classList.remove('active'))
        cards.forEach(card =>card.style.display = 'none')
        const activeIndex = buttons.indexOf(e.target)
        active(buttons, cards, activeIndex)


 }


})
}

getAPI('https://api.publicapis.org/entries')