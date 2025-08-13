import React, { useState } from "react";
import "./WeatherApp.css";
import cloudsImg from "./clouds.png";
import humidityImg from "./humidity.png";
import windImg from "./wind.png";
import searchImg from "./search.png";
import clearImg from "./clear.png";
import rainImg from "./rain.png";
import drizzleImg from "./drizzle.png";
import mistImg from "./mist.png";

function WeatherApp() {
  const apiKey = "9f565d12cf039d20962301035dbfa803";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const weatherIcons = {
    Clouds: cloudsImg,
    Clear: clearImg,
    Rain: rainImg,
    Drizzle: drizzleImg,
    Mist: mistImg,
  };

  async function CheckWeather() {
    if (!city.trim()) return;

    const url = apiUrl + city + `&appid=${apiKey}`;
    try {
      const response = await fetch(url);

      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData({
          name: data.name,
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          wind: data.wind.speed,
          condition: data.weather[0].main,
          icon: weatherIcons[data.weather[0].main] || cloudsImg,
        });
        setError(false);
      }
    } catch (err) {
      console.error(err);
      setError(true);
      setWeatherData(null);
    }
  }

  return (
    <div>
      <div className="card">
        <div className="search">
          <input
            type="text"
            placeholder="Enter city name"
            spellCheck="false"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button id="search-btn" onClick={CheckWeather}>
            <img src={searchImg} alt="search" />
          </button>
        </div>
        {error && (
          <div className="error">
            <p>Invalid city name</p>
          </div>
        )}

        {weatherData && (
          <div className="weather">
            <img
              src={weatherData.icon}
              className="weather-icon"
              alt="weather"
            />
            <p>{weatherData.condition}</p>
            <h1 className="temp">{weatherData.temp} °C</h1>
            <h2 className="city">{weatherData.name}</h2>
            <div className="details">
              <div className="col">
                <img src={humidityImg} alt="humidity" />
                <div className="text">
                  <p className="humidity">{weatherData.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src={windImg} alt="wind" />
                <div className="text">
                  <p className="wind">{weatherData.wind} km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button
          onClick={() => (window.location.href = "/Utility-Hub/")}
          style={{
            padding: "10px 20px",
            borderRadius: "30px",
            backgroundColor: "#65B741",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default WeatherApp;
