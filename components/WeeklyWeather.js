import React from "react";
import moment from "moment-timezone";
import Image from "next/image";

export default function WeeklyWeather({ weeklyWeather, timezone }) {
  return (
    <div className="weekly">
      <h3 className="weekly__title">
        Weekly <span>Weather</span>
      </h3>

      {weeklyWeather.length > 0 &&
        weeklyWeather.map((weather, index) => {
          if (index == 0) {
            return;
          }

          return (
            <div className="weekly__card" key={weather.dt}>
              <div className="weekly__inner">
                <div className="icon-wrapper">
                  <Image
                    src={`/images/${weather.weather[0].icon}-cg.png`}
                    alt={weather.weather[0].description}
                    height={60}
                    width={60}
                    objectFit="contain"
                    objectPosition={"left"}
                  />
                </div>

                <div className="week-day">
                  <span>
                    {moment.unix(weather.dt).tz(timezone).format("dddd")}
                  </span>
                  <span>{weather.weather[0].main}</span>
                </div>

                <div className="max-temp">
                  <span>Max</span>
                  <span>{weather.temp.max.toFixed(0)}&deg;C</span>
                </div>

                <div className="min-temp">
                  <span>Min</span>
                  <span>{weather.temp.min.toFixed(0)}&deg;C</span>
                </div>

                {/*<div className="weekly__left-content">
                  <div>
                    <h3>
                      {moment.unix(weather.dt).tz(timezone).format("dddd")}
                    </h3>
                  </div>
                </div>

                <div className="weekly__right-content">
                  <div className="weekly__icon-wrapper">
                    <Image
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                      alt={weather.weather[0].description}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <h5>{weather.weather[0].main}</h5>
          </div>*/}
              </div>
            </div>
          );
        })}
    </div>
  );
}
