import React, { useContext } from "react";

//Context
import { DataContext } from "../../context/Data";

//Style
import classes from "./Form.module.css";
export default function Form() {
  const { setCity, setPosition, setData, data, search } =
    useContext(DataContext);
  const onClickHandler = (e) => {
    e.preventDefault();
    setCity(data);
    setPosition({ lat: search.coord.lat, lon: search.coord.lon });
  };
  return (
    <form className={classes.search}>
      <label style={{ marginRight: "15px" }}>Location</label>
      <input
        type="text"
        name="location"
        onChange={(e) => setData(e.target.value)}
        className={classes.search__input}
        placeholder="Search..."
      />
      <div class={classes.search__icon}>
        <ion-icon name="search"></ion-icon>
      </div>
      <button className="" onClick={onClickHandler}>
        Search
      </button>
    </form>
  );
}
