import React, { useContext } from "react";

import { DataContext } from "../../context/Data";
export default function Form() {
  const { setCity, setPosition, setData, data, search } =
    useContext(DataContext);
  const onClickHandler = (e) => {
    e.preventDefault();
    setCity(data);
    setPosition({ lat: search.coord.lat, lon: search.coord.lon });
  };
  return (
    <form>
      <label style={{ marginRight: "15px" }}>Location</label>
      <input
        type="text"
        name="location"
        onChange={(e) => setData(e.target.value)}
      />
      <button className="" onClick={onClickHandler}>
        Search
      </button>
    </form>
  );
}
