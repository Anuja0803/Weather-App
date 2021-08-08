//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
    key: "d5a8a2b759a9d33a8e75dc47559531e6",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
})

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather)

    let city = document.getElementById('city');
    city.innerText=`${weather.name} , ${weather.sys.country}`;

    let temperature = document.getElementById('temp')
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.floor(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('image/clear.jpg')";
    }
    else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('image/rain.jpg')";
    }
    else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('image/cloudy.jpg')";
    }
    else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('image/haze.jpg')";
    }
    else if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('image/clear.jpg')";
    }
    else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('image/snow.jpg')";
    }
    else if(weatherType.textContent == 'Mist'){
        document.body.style.backgroundImage = "url('image/mist.jpg')";
    }
    else{
        document.body.style.backgroundImage = "url('image/sunny.jpg')";
    }
}

function dateManage(dateArg){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}