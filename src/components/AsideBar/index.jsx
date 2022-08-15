import React, { useContext, useState } from "react";

import { useEffect } from "react";
//Context

import { DataContext } from "../../context/Data";

//Style
import classes from "./AsideBar.module.css";
export default function AsideBar() {
  const {
    fiveDays,
    setFiveDays,
    data,
    search,
    positionData,
    setFuture,
    future,
    position,
    setPosition,
    setPositionData,
  } = useContext(DataContext);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${position.lat}&lon=${position.lon}&appid=2464cea4299cf8c159463e039edc6cb6&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setPositionData(data))
      .catch((err) => console.error(err));
  }, [future, position.log, position.lon]);

  const handleRenderFuture = () => {
    const newPosition = positionData.list?.map((item) => {
      return {
        date: item.dt_txt.slice(5, 10).split("-").reverse().join("."),
        hour: item.dt_txt.slice(11, 16),
        temp: item.main.temp.toFixed(0),
        img: item.weather?.map((weather) => weather.icon)[0],
        main: item.weather?.map((weather) => weather.main)[0],
      };
    });
    const only15PM = newPosition?.filter((item) => item.hour === "15:00");
    setFiveDays(only15PM);
    console.log(positionData);
    console.log(newPosition);
    console.log(only15PM);
  };

  const futureHandler = (e) => {
    e.preventDefault();
    setFuture((future) => !future);
    console.log(positionData);
    handleRenderFuture();
    if (Object.entries(search).length !== 0) {
      // let latitude = search.coord.lat;
      // let longitude = search.coord.lon;
      setPosition({ lat: search.coord.lat, lon: search.coord.lon });

      console.log(position);
    }
  };
  return (
    <button onClick={futureHandler} className={classes.btn}>
      <i className="fa-solid fa-5"></i>
    </button>
  );
}
