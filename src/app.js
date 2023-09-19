let now = new Date();
let days = [
  "Sunday",
  "Monday", 
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
let day = days[now.getDay()];
let currentDay = document.querySelector(".day");
currentDay.innerHTML = day;

let hours = now.getHours();
let minutes = now.getMinutes();
let currentTime = document.querySelector(".time");
currentTime.innerHTML =`${hours}:${minutes}`;


function showTemperature(response){
  let currentCity =document.querySelector(".city");
  let city = response.data.name;
  currentCity.innerHTML = city;
  console.log(response);

  let currentTemp = document.querySelector(".weather");
  let temperature = response.data.main.temp;
  temperature = Math.round(temperature);
  currentTemp.innerHTML = `⛅️ ${temperature}`;

  let currentHumidity = document.querySelector(".humidity");
  let humidity = response.data.main.humidity;
  humidity = Math.round(humidity);
  currentHumidity.innerHTML = `Humidity: ${humidity}%`;

  let currentWind = document.querySelector(".wind");
  let wind = response.data.wind.speed;
  wind = Math.round(wind);
  currentWind.innerHTML =`Wind: ${wind}mph`;
}
function searchCity(place){
  let apiKey = "1a8a69f327e740f11a997f3e7855070c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getTemperature(event){
  event.preventDefault();
  inputValue = document.querySelector("#exampleInputEmail1");
  let place =inputValue.value;
  searchCity(place);
}

let search = document.querySelector(".searchForm");
search.addEventListener("submit",getTemperature);


