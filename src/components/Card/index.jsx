import React, { useContext } from "react";

// Context
import { DataContext } from "../../context/Data";

function Card() {
  const { search } = useContext(DataContext);
  return (
    <div>
      <div>The city is: {search?.name}</div>
      <div>Temperature is {search.main?.temp.toFixed(0)}° </div>
      <div>{search.weather?.map((item) => item.main)}</div>
    </div>
  );
}

export default Card;
