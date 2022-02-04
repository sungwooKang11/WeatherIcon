// const API_KEY = "20d3ea9ebdb399b0edf375ee7d5085c0";

// function geoGood(position) {
//     const lat = position.coords.latitude; //위도 설정
//     const lon = position.coords.longitude; //경도 설정
//     const url = `http://api.openweathermap.org/data/2.5/weather?lat=
//                 ${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //API 통해서 날씨정보 가져옴
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//             const weather = document.querySelector(".state");
//             const city = document.querySelector(".city");
//         city.innerText = data.name; 
//         weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
//     });
// }
// function geoError() {
//     alert("Can't find you. Where?");//위치정보를 불러오지 못했을 때
// }

// navigator.geolocation.getCurrentPosition(geoGood, geoError);  