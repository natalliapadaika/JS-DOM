const form = document.querySelector('form'),
      input = form.querySelector('.form-control'),
      ul = document.querySelector('.list-group');

  
      

      form.addEventListener('submit', (event) =>{
       event.preventDefault();
       ul.innerHTML +=`<li class="list-group-item"> <label class="form-check-label"><input class="form-check-input me-1" type="checkbox" value="">${input.value}</label>  <button class="btn btn-outline-danger">Удалить</button></li>`
    input.value='';
    
    ul.querySelectorAll('.list-group-item').forEach((li, i) =>{
        
      li.addEventListener('click', ()=>{
         const checkbox = li.querySelector('.form-check-input');
         if (checkbox.checked){   
            //checkbox.checked ===true если чекнут , полная запись
            li.classList.add('list-group-item-secondary');
            checkbox.setAttribute('checked','true');
         } else {
            li.classList.remove('list-group-item-secondary')
            checkbox.removeAttribute('checked');
         }         
}); 
    const btn = li.querySelector('.btn');
    btn.addEventListener('click', () =>{
        document.body.firstElementChild.lastElementChild.children[i].remove();
    });

});

// ul.querySelectorAll('.btn').forEach((btn, i) =>{
//    btn.addEventListener('click', () =>{
//       document.body.firstElementChild.lastElementChild.children[i].remove();
//     });
// });

      });
     

     