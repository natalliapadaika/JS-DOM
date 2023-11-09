import * as NowTime from "./script-time.js";

NowTime.getTimes();

import * as Greeting from "./greeting.js";

Greeting.showGreeting();

import { inputGreeting, setLocalStorage, getLocalStorage } from "./greeting.js";

inputGreeting.addEventListener("change", () => {
  setLocalStorage();
});

window.addEventListener("beforeunload", setLocalStorage);

window.addEventListener("load", getLocalStorage);

import {
  body,
  slideNext,
  slidePrev,
  date,
  hours,
  timeOfDay,
  getRandomNum,
  setBg,
  randomNum,
  bgNum,
  getSlideNext,
  getSlidePrev,
} from "./back.js";

setBg(timeOfDay[Math.trunc(hours / 6)], bgNum);

slideNext.addEventListener("click", getSlideNext);
slidePrev.addEventListener("click", getSlidePrev);

import {
  weatherIcon,
  temperature,
  weatherDescription,
  city,
  getWeather,
  setwLocalStorage,
  getwLocalStorage,
} from "./weather.js";

getWeather("Минск");

city.addEventListener("change", () => {
  getWeather(`${city.value}`);
});

window.addEventListener("beforeunload", setwLocalStorage);
window.addEventListener("load", getwLocalStorage);

import {
  qoutes,
  forQoutes,
  reload,
  getRandomN,
  random,
  getQuotes,
} from "./qoutes.js";

getQuotes();

reload.addEventListener("click", () => {
  getQuotes();
});
