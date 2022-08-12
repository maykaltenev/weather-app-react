import React, { useContext } from "react";

// Context
import { DataContext } from "../../context/Data";

// Style
import classes from "./Card.module.css";
function Card() {
  const { search } = useContext(DataContext);
  return (
    <div className={classes.card}>
      <div className={classes.name}>The city is: {search?.name}</div>
      <div>Temperature is {search.main?.temp.toFixed(0)}° </div>
      <div>{search.weather?.map((item) => item.main)}</div>
      <span>
        H: {search.main?.temp_max.toFixed(0)}° L:{" "}
        {search.main?.temp_min.toFixed(0)}°
      </span>
      <img
        src={`http://openweathermap.org/img/wn/${search.weather?.map(
          (item) => item.icon
        )}.png`}
        alt="icon"
      />
      <div>
        There will be {search.weather?.map((item) => item.description)} and the
        temperature will feel like {search.main?.feels_like.toFixed(0)}°. The
        wind speed is {search.wind?.speed}
      </div>
    </div>
  );
}

export default Card;
