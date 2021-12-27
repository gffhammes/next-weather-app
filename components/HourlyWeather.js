import React from "react";
import moment from "moment-timezone";
import Image from "next/image";

export default function HourlyWeather({ hourlyWeather, timezone }) {
  return (
    <div className="hourly">
      <div className="hourly__inner">
        {Object.values(hourlyWeather).length > 0 &&
          Object.values(hourlyWeather).map((weather, index) => (
            <div className="hourly__box-wrapper" key={weather.dt}>
              <div className="hourly__box shadow-1">
                <div
                  className={`hourly__time ${
                    index == 0 ? "hourly__time--now" : ""
                  }`}
                >
                  {index == 0
                    ? "Now"
                    : moment.unix(weather.dt).tz(timezone).format("LT")}
                </div>
                <div className="hourly__icon-wrapper">
                  <Image
                    src={`/images/${weather.weather[0].icon}-c.png`}
                    alt={`${weather.weather[0].description}`}
                    height='100'
                    width='100'
                    priority={true}
                  />
                </div>
                <span className="hourly__temp">
                  {weather.temp.toFixed(0)}&deg;C
                </span>
                <span className="hourly__weather">
                  {weather.weather[0].main}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
