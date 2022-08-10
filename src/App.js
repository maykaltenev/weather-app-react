

import { useEffect } from "react";
import './App.css';

function App() {

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=d9983ef2")
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
