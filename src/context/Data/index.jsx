import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState({ lat: "", lon: "" });
  const [positionData, setPositionData] = useState("");

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
