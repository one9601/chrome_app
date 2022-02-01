const API_KEY = "openweathermap 에서 받은 key";


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

// onGeoOK = 위치정보를 받는데 성공한 경우 (허용)
// onGeoError = 위치정보를 받는데 실패한 경우 (거부)