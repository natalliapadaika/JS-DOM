
const row = document.querySelector('.row');

const renderCard = (name, region, population, lang, currencName, currencSymbol, flag) => {
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
    ${currencName}, ${currencSymbol}
      </p>
    </div>
  </div>
</div>
  
  `)
}



fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(countrys => {
  
        
       countrys.forEach((el) => {
          const name = el.name.official;
          const region = el.region;
          const population = el.population;
          if(el.languages){
            const lang = Object.values(el.languages);
          // console.log(lang);
           const flag = el.flags.svg;
          if(el.currencies){

          const currencies = Object.values(el.currencies);
          currencies.forEach((el, i) => {
          const currencName = currencies[i].name;
          const currencSymbol = currencies[i].symbol;
    
      renderCard(name, region, population, lang, currencName, currencSymbol, flag);
      }); 
    }
  }
      

      
        });

      })


       
    