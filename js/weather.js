const API_KEY = "6d5a49ca76d0f068858ce8ce4699932c";


function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  
  fetch(url).then(response => response.json().then(data => {
    const weatherContainer = document.querySelector("#weather .weather_weather");
    const City = document.querySelector("#weather .weather_place");

    City.innerText = data.name;
    weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  }));

}


function onGeoError(){
  alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);