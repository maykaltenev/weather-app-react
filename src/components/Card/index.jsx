import React, { useContext, useEffect } from "react";

// Context
import { DataContext } from "../../context/Data";

// Style
import classes from "./Card.module.css";
function Card() {
  const { position, search, conditions, setWeatherConditions, date, setDate } =
    useContext(DataContext);
  useEffect(() => {
    if (Object.entries(search).length !== 0) {
      let result = search.weather?.map((item) => item.main);
      setWeatherConditions(result?.map((item) => item.toLowerCase()));
      let time = search.dt;
      let dateVal = new Date(time * 1000).toUTCString();
      let trimmedValue = dateVal.slice(0, 16);
      setDate(trimmedValue);
      console.log(trimmedValue);
    }
    console.log(search);
  }, [search]);

  return (
    <div className={classes.card}>
      <div className={classes.name}>{search?.name}</div>
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
      <span className="highLow">
        {search.main?.temp_max.toFixed(0)}° | {search.main?.temp_min.toFixed(0)}
        °
      </span>
      <div className={classes.extra}>
        |{" "}
        {search.weather
          ?.map((item) => item.description)[0]
          .split(" ")
          .map((item) => item[0].toUpperCase() + item.slice(1))
          .join(" ")}{" "}
        | Feels Like: {search.main?.feels_like.toFixed(0)}° | {"Wind: "}
        {search.wind?.speed} km/h
      </div>
      <p>{conditions}</p>
    </div>
  );
}

export default Card;
