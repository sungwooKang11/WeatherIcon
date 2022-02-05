const API_KEY = "20d3ea9ebdb399b0edf375ee7d5085c0";
const body = document.querySelector("body");
let weather = "";

function geoGood(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        weather = data.weather;
        console.log(weather);

        const comeWeather = () => {
    
            weather.map((key) => {
            const weatherKey = key;
            console.log(weatherKey);
            const h1 = document.createElement("h1");
            body.appendChild(h1);
            const imgTag = new Image();
            
            if(weatherKey.main === "Clear") {
                h1.innerText = "Clear";
                imgTag.src = "./img/sunny.png";
                body.appendChild(imgTag);
                }
            if(weatherKey === "Cloud") {
                h1.innerText = "Cloud";
                imgTag.src = "./img/cloud.png";
                body.appendChild(imgTag);
            }
            if(weatherKey === "Rain") {
                h1.innerText = "Rain";
                imgTag.src = "./img/rain.png";
                body.appendChild(imgTag);
            }
            if(weatherKey === "Snow") {
                h1.innerText = "Snow";
                imgTag.src = "./img/snow.png";
                body.appendChild(imgTag);
            }
            if(weatherKey === "Wind") {
                h1.innerText = "Wind";
                imgTag.src = "./img/wind.png";
                body.appendChild(imgTag);
            }
        
            
            });
        }
        
        comeWeather();
    });
}

function geoError() {
    alert("Can't find you. Where?");
}

navigator.geolocation.getCurrentPosition(geoGood, geoError);
