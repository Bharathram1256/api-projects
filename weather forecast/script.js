
function getWeather() {
    Event.preventDefault();

    let city = document.getElementById("city").value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3f1545f79861467179b8e92868d2b43`;

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
    document.getElementById("result").textContent = `Weather in ${city} is ${data.main.temp-273.15}`;
    });
}


 