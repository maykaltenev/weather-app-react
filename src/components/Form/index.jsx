import React, { useContext, useState } from "react";

//Context
import { DataContext } from "../../context/Data";

//Style
import "./Form.css";
export default function Form() {
  const { setCity, setData, data, search, setFuture } = useContext(DataContext);

  const [theme, setTheme] = useState(true);

  const onClickHandler = (e) => {
    e.preventDefault();
    setTheme((theme) => !theme);
    setCity(data);
    setFuture(false);
  };
  return (
    <form className="search">
      <input
        type="text"
        name="location"
        value={data}
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
