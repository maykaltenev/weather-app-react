import React, { useContext, useState } from "react";

import { useEffect } from "react";
//Context

import { DataContext } from "../../context/Data";

//Style
import classes from "./AsideBar.module.css";
export default function AsideBar() {
  const {
    id,
    data,
    search,
    positionData,
    setFuture,
    future,
    position,
    setPosition,
    setPositionData,
  } = useContext(DataContext);

  // setPosition({ lat: search?.coord.lat, lon: search?.coord.lon });
  // console.log(theme);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${position.lat}&lon=${position.lon}&appid=2464cea4299cf8c159463e039edc6cb6&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setPositionData(data))
      .catch((err) => console.error(err));
  }, [future, position.log, position.lon]);
  const futureHandler = (e) => {
    e.preventDefault();
    setFuture((future) => !future);
    console.log(positionData);
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
