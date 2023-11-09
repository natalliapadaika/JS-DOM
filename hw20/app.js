const konvert = document.querySelector(".konvert"),
  input = konvert.querySelector("input"),
  select = konvert.querySelector("select"),
  bazeVal = konvert.querySelector("#bazeVal"),
  itog = konvert.querySelector("#itogo");

const getResult = (Object, key) => {
  const result = (+input.value * Object[key]).toFixed(4);
  itog.textContent = result;
};

const getKonvert = async (val) => {
  bazeVal.textContent = val;

  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/${val}`);
    if (!response.ok) {
      throw new Error("Ошибка статус-кода");
    }
    const api = await response.json();
    const { rates } = api;

    input.addEventListener("keyup", () => {
      getResult(rates, select.value);
    });

    select.addEventListener("change", () => {
      getResult(rates, select.value);
    });
    
  } catch (error) {
    console.error(error.message);
  }
};

getKonvert("USD");
