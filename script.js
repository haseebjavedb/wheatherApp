const inputbox = document.querySelector('.inputbox');
const searchbtn = document.getElementById('searchbtn');
const wimg = document.querySelectorAll('.wimg');
const temp = document.querySelector('.temp');
const discrip = document.querySelector('.discrip');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const locationnotfound =document.querySelector('.locationnotfound');
const whetherbody = document.querySelector('.whetherbody');

async function checkWeather(city) {
  const api_key = "4a6139acd849657a81cd9d51d9b04cd5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(url).then(response => response.json());

  if (weather_data.cod === '404') {
    locationnotfound.style.display = "flex";
    whetherbody.style.display = "none";
    console.log(error);
    return;
  } 
  locationnotfound.style.display = "none";
  whetherbody.style.display = "flex";

  temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  discrip.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;

  switch (weather_data.weather[0].main) {
    case 'Clouds':
      wimg.forEach(img => {
        img.src = "aseets/img/cloud.png";
      });
      break;
    case 'Clear'  :
      wimg.forEach(img => {
        img.src = "aseets/img/clear.png";
      });
      break;
      case 'Smoke'  :
      wimg.forEach(img => {
        img.src = "aseets/img/mist.png";
      });
      break;
      case 'Mist':
 
    wimg.forEach(img => {
      img.src = "assets/img/mist.png";
    });
      break;
    case 'Rain':
      wimg.forEach(img => {
        img.src = "aseets/img/rain.png";
      });
      break;
    case 'Snow':
      wimg.forEach(img => {
        img.src = "aseets/img/snow.png";
      });
      break;
    case 'scattered clouds':
      wimg.forEach(img => {
        img.src = "aseets/img/clear.png";
      });
      break;
    default:
      // Handle other cases or set a default image source
      break;
  }
}

searchbtn.addEventListener('click', () => {
  const city = inputbox.value;
  checkWeather(city);
});