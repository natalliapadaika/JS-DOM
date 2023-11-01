const konvert = document.querySelector('.konvert'),
      input = konvert.querySelector('input'),
      select = konvert.querySelector('select'),
      bazeVal = konvert.querySelector('#bazeVal'),
      itog = konvert.querySelector('#itogo');

      const getResult = (Object, key) =>{
        const sum = Number(input.value);
        if (key === select.value){
            const rate = Object[key];    
            const result = (sum * rate).toFixed(4);
            itog.textContent = result;           
        }
      };

      const getKonvert = async (val) => {
        bazeVal.textContent = val;


        try{
            const response = await fetch(`https://open.er-api.com/v6/latest/${val}`)
            if(!response.ok){
                throw new Error ('Ошибка статус-кода')
        }
        const api = await response.json();
        
        const {rates} = api;

         const {USD, EUR, BYN, PLN, RUB} = rates;
         const newRates = {USD, EUR, BYN, PLN, RUB};

         
  input.addEventListener('keyup', () =>{
       
        for(let key in newRates){
            getResult(newRates, key);

         select.addEventListener ('change', (e) => {
           if (e.target.matches('select')){
            getResult(newRates, key);

        }
           })
     
     }

});

        }
        catch(error){
            console.error(error.message);
        }
      }

getKonvert('CNY');