async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = ''; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        document.getElementById('weather-result').innerText = 
            `Weather in ${city}: ${weatherDescription}, ${temperature}°C`;
    } catch (error) {
        document.getElementById('weather-result').innerText = error.message;
    }
}
