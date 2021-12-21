import React from "react";
import Image from "next/image";
import moment from "moment-timezone";

export default function TodaysWeather({
  city,
  timezone,
  weather,
  currentWeather,
  hourlyWeather,
}) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="today shadow-1">
      <div className="today__inner">
        <div className="today__left-content">
          <div className="today__icon-wrapper">
            <Image
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={`${weather.weather[0].description}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2>{currentWeather.temp.toFixed(1)}&deg;C</h2>
          <span className="temp-max">
            🔥 {weather.temp.max.toFixed(0)}&deg;C
          </span>
          <span className="temp-min">
            🧊 {weather.temp.min.toFixed(0)}&deg;C
          </span>
        </div>

        <div className="today__right-content">
          <h1>
            {city.name} ({city.country})
          </h1>

          <span>
            {
              (moment.locale("pt-br"),
              moment.unix(hourlyWeather[0].dt).tz(timezone).format("dddd, LT"))
            }
          </span>

          <span>{capitalizeFirstLetter(weather.weather[0].description)}</span>
        </div>
      </div>
    </div>
  );
}
