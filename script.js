const apiKey = "83e03cb2ec60379c47c2044c333d44d3";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("icon").src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png";
    document.getElementById("temp").textContent = `${data.main.temp}°C`;
    document.getElementById("city").textContent = data.name;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}% `;
    document.getElementById("wind").textContent = `Wind: ${data.wind.speed} km / h`;

    document.getElementById("weatherInfo").classList.remove("hidden");
  } catch (error) {
    alert("City not found!");
    document.getElementById("weatherInfo").classList.add("hidden");
  }
}
