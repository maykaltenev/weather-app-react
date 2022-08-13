
import { useEffect, useContext } from "react";

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from "react-leaflet";
import './App.css';

// Context 
import { DataContext } from "./context/Data";

// Components 
import Form from "./components/Form";
import Card from "./components/Card";
import AsideBar from "./components/AsideBar";
import Future from "./components/Future";


function App() {
  const { conditions, city, setSearch, position } = useContext(DataContext);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2464cea4299cf8c159463e039edc6cb6&units=metric`)
      .then(response => response.json())
      .then(data => setSearch(data))
      .catch(err => console.error(err));
  }, [city]);


  return (
    <div className={conditions ? conditions : 'wrapper'}>
      <AsideBar />
      <Form />
      <Card />
      <Future />
      {position.lat !== '' ? (
        <MapContainer center={[position.lat, position.lon]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[position.lat, position.lon]}>
            <Popup >
            </Popup>
          </Marker>
        </MapContainer>) : ''}
    </div >
  );
}

export default App;
