import React, { useContext, useEffect } from "react";

// Context
import { DataContext } from "../../context/Data";

function Future() {
  const moment = require("moment");
  function tConvert(time) {
    // Check correct time format and split into components
    return moment(time, "hh:mm a").format("hh:mm A"); // return adjusted time or original string
  }
  const { future, positionData, position, setPositionData, search } =
    useContext(DataContext);

  return (
    <div>
      {/* <div>{search?.coord[0].lan}</div> */}
      <div>{/* {positionData.list} {position[0].lat} {position.lon} */}</div>
      <h1>5 days forcast</h1>
      <div>
        {positionData.list?.map((item) => (
          <div key={item.dt}>
            {tConvert(item.dt_txt.slice(-8))}
            <br />
            <p>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather?.map(
                  (item) => item.icon
                )}.png`}
                alt="icon"
              />
              {item.main.temp.toFixed(0)}°
            </p>
            <div>
              {item.dt_txt.slice(5, 10).split("-").reverse("").join(".")}{" "}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Future;
