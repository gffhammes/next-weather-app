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

  console.log(weather);
  return (
    <div className="today">
      <div className="today__inner">
        <div className="today__left-content">
          <div className="today__icon-wrapper">
            <Image
              src={`/images/${weather.weather[0].icon}.png`}
              alt={`${weather.weather[0].description}`}
              height={80}
              width={80}
              objectFit="contain"
              priority={true}
            />
          </div>
          <div className="today__weather">
            <h1>{currentWeather.temp.toFixed(1)}&deg;C</h1>
            <span>{capitalizeFirstLetter(weather.weather[0].description)}</span>
          </div>
        </div>

        <div className="today__right-content">
          <div className="thermometer-wrapper">
            <Image
              src={`/images/thermometer.png`}
              alt={'thermometer'}
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </div>
          <span className="max-temp">{weather.temp.max.toFixed(0)}&deg;C</span>
          <span className="min-temp">{weather.temp.min.toFixed(0)}&deg;C</span>
        </div>
      </div>
    </div>
  );
}
