
import { useEffect, useContext, useState } from "react";
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
  const { fiveDays, future, dayOrNight, conditions, city, setSearch, search } = useContext(DataContext);
  const [error, setError] = useState(false)
  useEffect(() => {
    // fetch(`https://api.openweathermap.org/data/2.5/√?q=${city}&appid=2464cea4299cf8c159463e039edc6cb6&units=metric`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2464cea4299cf8c159463e039edc6cb6&units=metric`)
      .then(response => response.json())
      //   if (response.status === "200") {
      //     return response.json();
      //   } else if (response.status === "204") {
      //     return setError(true);
      //   } else {
      //     return setError(true);
      //   }
      // })
      .then(data => {
        if (data.cod === '404') {
          return setError(true);
        } else {
          setError(false)
          setSearch(data);
        }
      })
      .catch(err => console.log(err));
    console.log(error)
  }, [city]);
  return (
    <div className={(conditions && dayOrNight) ? `${conditions} ${dayOrNight}` : 'wrapper'}>

      <Form />
      {error ? <p className="error">Human error detected!<br />
        Provide a valid location! </p> : (city.length <= 0) ? "" :
        (
          <>
            <Card />
            <AsideBar />
            {fiveDays && future && <Future />}
          </>
        )
      }
      {
        (future && search.coord?.lat !== '') ? (
          <MapContainer style={{ border: "2px #00fe9b solid" }} center={[search.coord?.lat, search.coord?.lon]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[search.coord?.lat, search.coord?.lon]}>
              <Popup >
              </Popup>
            </Marker>
          </MapContainer>)
          : ''
      }
      )
    </div >
  );
}

export default App;
