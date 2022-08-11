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
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300"></div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div className="relative mb-4">
            <label style={{ marginRight: "15px" }}>Location</label>
            <input
              type="search"
              name="location"
              onChange={(e) => setData(e.target.value)}
              className="leading-7 text-sm text-gray-600 rounded border border-gray-300 focus:border-indigo-500"
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={onClickHandler}
          >
            Search
          </button>
          <p className="text-xs text-gray-500 mt-3"></p>
        </div>
      </div>
    </section>
  );
}
