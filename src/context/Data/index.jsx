import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState({ lat: "", lon: "" });
  const [positionData, setPositionData] = useState("");
  const [conditions, setWeatherConditions] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");
  const [future, setFuture] = useState(false);
  const [dayOrNight, setDayOrNight] = useState(false);

  return (
    <DataContext.Provider
      value={{
        dayOrNight,
        setDayOrNight,
        future,
        setFuture,
        id,
        setId,
        date,
        setDate,
        city,
        setCity,
        data,
        setData,
        search,
        setSearch,
        position,
        setPosition,
        positionData,
        setPositionData,
        conditions,
        setWeatherConditions,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
