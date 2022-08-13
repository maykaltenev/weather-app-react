
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


function App() {
  const moment = require('moment')
  const { city, setCity, data, setData, search, setSearch, position, setPosition, positionData, setPositionData } = useContext(DataContext);


  // const onClickHandler = (e) => {
  //   e.preventDefault();
  //   setCity(data)
  //   setPosition({ lat: search.coord.lat, lon: search.coord.lon })
  //   console.log(position)
  //   console.log(data)
  // }
  function tConvert(time) {
    // Check correct time format and split into components
    return moment(time, 'hh:mm a').format('hh:mm A'); // return adjusted time or original string
  }


  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2464cea4299cf8c159463e039edc6cb6&units=metric`)
      .then(response => response.json())
      .then(data => setSearch(data))
      .catch(err => console.error(err));

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.lat}&lon=${position.lon}&appid=2464cea4299cf8c159463e039edc6cb6&units=metric`)
      .then(response => response.json())
      .then(data => setPositionData(data))
      .catch(err => console.error(err));
  }, [city, position.lat, position.lon]);


  return (
    <div className="wrapper">
      {/* <form >
        <input type='search' name='search' onChange={(e) => setData(e.target.value)} />
        <button onClick={onClickHandler}>Search</button>
      </form> */}
      <Form />
      {/* <div>The city is: {search?.name}</div>
      <div>Temperature is {search.main?.temp.toFixed(0)}° </div>
      <div>{search.weather?.map(item => item.main)}</div> */}
      <Card />
      {/* <span>H: {search.main?.temp_max.toFixed(0)}° L: {search.main?.temp_min.toFixed(0)}°</span>
      <img src={`http://openweathermap.org/img/wn/${search.weather?.map(item => item.icon)}.png`} alt='icon' />
      <div>There will be {search.weather?.map(item => item.description)} and the temperature will feel like {search.main?.feels_like.toFixed(0)}°. The wind speed is {search.wind?.speed}</div> */}
      <div>{position.lat}</div>
      <div>
        <img src={`https://tile.openstreetmap.fr/hot/${position.lat}/${position.lon}.png`} alt='location' />
        <h1>5 days forcast</h1>
        <div>
          {positionData.list?.map(item => (
            <div key={item.dt}>{tConvert(item.dt_txt.slice(-8))}
              <br />
              <p>
                <img src={`http://openweathermap.org/img/wn/${item.weather?.map(item => item.icon)}.png`} alt='icon' />
                {item.main.temp.toFixed(0)}°
              </p>
              <div >{item.dt_txt.slice(5, 10).split('-').reverse('').join('.')} </div>
              <hr />
            </div>

          ))}
        </div>
      </div>

      <MapContainer center={[position.lat, position.lon]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[position.lat, position.lon]}>
          <Popup >
          </Popup>
        </Marker>
      </MapContainer>


    </div >
  );
}

export default App;
