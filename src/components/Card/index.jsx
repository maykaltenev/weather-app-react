import React, { useContext, useEffect } from "react";

// Context
import { DataContext } from "../../context/Data";

// Style
import classes from "./Card.module.css";

//Components
import Clock from "../Clock";
function Card() {
  const {
    dayOrNight,
    setDayOrNight,
    search,
    conditions,
    setWeatherConditions,
    date,
    setDate,
  } = useContext(DataContext);
  useEffect(() => {
    if (Object.entries(search).length !== 0) {
      let result = search.weather?.map((item) => item.main);
      setWeatherConditions(result?.map((item) => item.toLowerCase()));
      let time = search.dt;
      let dateVal = new Date(time * 1000).toUTCString();
      let trimmedValue = dateVal.slice(0, 16);
      setDate(trimmedValue);
      // Get Current Time
      function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      const d = new Date();
      let sunriseUNIX = search.sys?.sunrise; //1660730905
      let sunsetUNIX = search.sys?.sunset; //1660780324
      let timezone = search?.timezone; //-14400
      let currentTimeByZone = new Date((d / 1000 + timezone) * 1000)
        .toUTCString()
        .slice(17, 26);
      // 13:00:00
      //5:15:00
      let sunrise = new Date(sunriseUNIX * 1000).toUTCString().slice(17, 26);
      // 20:15:00
      let sunset = new Date(sunsetUNIX * 1000).toUTCString().slice(17, 26);
      let currentResult =
        currentTimeByZone >= sunrise && currentTimeByZone < sunset
          ? "day"
          : "night";
      setDayOrNight(currentResult);
      console.log(currentTimeByZone);
    }
  }, [search, dayOrNight]);

  return (
    <div className={classes.card}>
      <div className={classes.name}>{search?.name}</div>
      <Clock timeZoneOffset={search?.timezone} />
      <div className={classes.date}>{date}</div>
      <div
        src={`http://openweathermap.org/img/wn/${search.weather?.map(
          (item) => item.icon
        )}.png`}
        alt="icon"
      />
      <div className={classes.temperature}>{search.main?.temp.toFixed(0)}</div>
      <div className={classes.conditions}>
        {search.weather?.map((item) => item.main)}
      </div>
      <span className={classes.highLow}>
        {search.main?.temp_max.toFixed(0)}° | {search.main?.temp_min.toFixed(0)}
        °
      </span>
      <div className={classes.extra}>
        {search.weather
          ?.map((item) => item.description)[0]
          .split(" ")
          .map((item) => item[0].toUpperCase() + item.slice(1))
          .join(" ")}{" "}
        | Feels Like: {search.main?.feels_like.toFixed(0)}° | {"Wind: "}
        {search.wind?.speed} km/h
      </div>
    </div>
  );
}

export default Card;
