

import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [city, setCity] = useState('Boston');
  const [data, setData] = useState('');
  const [search, setSearch] = useState('');
  const onClickHandler = (e) => {
    e.preventDefault();
    setCity(data)
    console.log(data)
  }
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2464cea4299cf8c159463e039edc6cb6&units=metric`)
      .then(response => response.json())
      .then(data => setSearch(data))

      .catch(err => console.error(err));
  }, [city]);

  return (
    <div className="App">
      <form >
        <input type='search' name='search' onChange={(e) => setData(e.target.value)} />
        <button onClick={onClickHandler}>Search</button>
      </form>
      <div>The city is: {search?.name}</div>
      <div>Temperature is {search.main?.temp.toFixed(0)}</div>
    </div>
  );
}

export default App;
