document.getElementById("searchFetchAsync").addEventListener("click", searchWeather);

async function searchWeather() {
    const city = document.getElementById("Input").value;
    const apiKey = 'be79958e66954c3194971545242404'; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
}

function displayData(data) {
    const weatherDataElement = document.getElementById("weatherData");
    weatherDataElement.innerHTML = '';

    const heading = document.createElement('h2');
    heading.textContent = `Weather in ${data.location.name}, ${data.location.country}`;
    weatherDataElement.appendChild(heading);

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.current.temp_c}°C / ${data.current.temp_f}°F`;
    weatherDataElement.appendChild(temperature);

    const condition = document.createElement('p');
    condition.textContent = `Condition: ${data.current.condition.text}`;
    weatherDataElement.appendChild(condition);

    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
    weatherDataElement.appendChild(windSpeed);
}