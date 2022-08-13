import React, { useContext, useState } from "react";

//Context
import { DataContext } from "../../context/Data";

//Style
import "./Form.css";
export default function Form() {
  const { setCity, setPosition, setData, data, search } =
    useContext(DataContext);

  const [theme, setTheme] = useState(true);

  const onClickHandler = (e) => {
    e.preventDefault();
    setTheme((theme) => !theme);
    console.log(theme);
    setCity(data);
    // setPosition({ lat: search?.coord.lat, lon: search?.coord.lon });
    // console.log(theme);
  };
  return (
    <form className="search">
      <input
        type="text"
        name="location"
        onChange={(e) => setData(e.target.value)}
        className={theme === false ? "search active input" : "search input"}
        placeholder="Search..."
      />
      <button
        className={theme === false ? "search active btn" : "search btn"}
        onClick={onClickHandler}
      >
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}
