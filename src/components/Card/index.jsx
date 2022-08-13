import React, { useContext } from "react";

// Context
import { DataContext } from "../../context/Data";

// Style
import classes from "./Card.module.css";
function Card() {
  const { search, conditions, setWeatherConditions } = useContext(DataContext);
  const handleChange = (e) => {
    setWeatherConditions(e.target.current.value);
  };

  return (
    <div className={classes.card}>
      <div className={classes.name}>{search?.name}</div>
      <img
        src={`http://openweathermap.org/img/wn/${search.weather?.map(
          (item) => item.icon
        )}.png`}
        alt="icon"
      />
      <div className={classes.temperature}>{search.main?.temp.toFixed(0)}</div>

      <div
        onChange={handleChange}
        value={search.weather?.map((item) => item.main)}
        className={classes.conditions}
      >
        {search.weather?.map((item) => item.main)}
      </div>
      <span className="highLow">
        {search.main?.temp_max.toFixed(0)}° | {search.main?.temp_min.toFixed(0)}
        °
      </span>
      <div>
        There will be {search.weather?.map((item) => item.description)} and the
        temperature will feel like {search.main?.feels_like.toFixed(0)}°. The
        wind speed is {search.wind?.speed}
      </div>
      <p>{conditions}</p>
    </div>
  );
}

export default Card;
