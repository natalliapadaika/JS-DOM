
const row = document.querySelector('.row');

const renderCard = (name, region, population, lang, many, flag) => {
  row.insertAdjacentHTML('beforeend', 
  `       <div class="col">
  <div class="card h-100">
    <img src="${flag}" class="card-img-top" alt="flags" />
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">
      ${region}
      </p>
       <p class="card-text"> &#128106 
     ${(population/100000).toFixed(2)} млн.
      </p>
       <p class="card-text"> &#128483 
     ${lang}
      </p>
    <p class="card-text"> &#128176 
    ${many}
      </p>
    </div>
  </div>
</div>
  
  `)
}


fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(countrys => {
  console.log(countrys);
        
  
      //  countrys.forEach((el, i) => {
   
      //     const name = el.name.official;         
      //     const region = el.region;
      //     const population = el.population;
      //     const flag = el.flags.svg;
      //     if(el.languages){
      //        lang = Object.values(el.languages).join(', ');
      //     } else {
      //        lang = '-';
      //     };
           
      //     if(el.currencies){
      //     const currencies = Object.values(el.currencies);
      //     many = currencies.map(item =>item.name + ' ' + item.symbol).join(', ')}
      //     else {
      //       many = '-';
      //     }



for (let i = 0; i < countrys.length; i+=10){

const name = countrys[i].name.official;
const region = countrys[i].region;
const population = countrys[i].population;
const flag = countrys[i].flags.svg;
const lang = countrys[i].languages? Object.values(countrys[i].languages).join(', ') : '-';

const many = countrys[i].currencies? Object.values(countrys[i].currencies).map(item =>item.name + ' ' + item.symbol).join(', ') : '-';
       

  renderCard(name, region, population, lang, many,  flag);
}
      
      }); 
    


       