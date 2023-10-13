const form = document.querySelector('form'),
input = document.querySelector('input'),
result = document.querySelector('.result');

let url = 'Minsk'

const getData = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {

    result.innerHTML = `<p>Температура: ${data.list[0].main.temp.toFixed(1)}℃ </p>`
    
    });

}



form.addEventListener('submit', (e) => {
e.preventDefault();

if(input.value){
    
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=bb05314415f48ba6bb5c9002c2029146&units=metric`

};

getData(url);

})