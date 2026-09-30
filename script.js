const apiKey = "jkvhcjvds";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const condition = document.getElementById("condition");
const errorMessage = document.getElementById("errorMessage");

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

async function getWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    errorMessage.textContent = "";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        // Display API data
        cityName.textContent = data.name;
        temperature.textContent = Math.round(data.main.temp);
        humidity.textContent = data.main.humidity;
        condition.textContent = data.weather[0].description;

    } catch (error) {
        errorMessage.textContent = "Unable to find that city.";
        
        cityName.textContent = "--";
        temperature.textContent = "--";
        humidity.textContent = "--";
        condition.textContent = "--";
    }
}