
const card = document.querySelector('.card');
const cardForBorder = document.querySelector('#card-for-border')

const form = document.querySelector('form');
const input = form.querySelector('input');


let url = '';
let urlforBorder = '';


renderCard =((elem, name, capital, area, region, flag) => {
    elem.insertAdjacentHTML('beforeend', `
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${flag}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${region}</p>
        <p class="card-text"><small class="text-body-secondary">Столица: ${capital}. Площадь: ${area} кв. км.</small></p>
      </div>
    </div>
  </div>
    
    
    `)

})

getDataBorder = (urlforBorder) => {
   
    fetch(urlforBorder)
    .then((response) => response.json())
    .then((border) => {
    const [borderObj] = border;
    console.log(borderObj);

    const name = borderObj.name.common;
    const capital = borderObj.capital.join();
    const area = borderObj.area;
    const region = borderObj.region;
    const flag = borderObj.flags.svg;

    setTimeout (()=>{renderCard(cardForBorder, name, capital, area, region, flag)}
    , 2000)
    

})
}



getDataCountry = (url) => {
    
    fetch(url)
    .then((response) => response.json())
    .then((country) => {

    const [countryObj] = country;


    const name = countryObj.name.common;
    const capital = countryObj.capital.join();
    const area = countryObj.area;
    const region = countryObj.region;
    const flag = countryObj.flags.svg;

    renderCard(card, name, capital, area, region, flag);

    const borders = countryObj.borders;

    borders.forEach(element => {

        urlforBorder = `https://restcountries.com/v3.1/alpha/${element}`

        getDataBorder(urlforBorder)
      
        
    });

    
});

}


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(input.value){ 
        console.log(input.value);

        url = `https://restcountries.com/v3.1/name/${input.value}`

    }

   getDataCountry(url);
   input.value ="";

})