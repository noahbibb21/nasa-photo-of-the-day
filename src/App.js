import React, { useEffect, useState }from "react";
import axios from 'axios';
import "./App.css";

import Styling from './components/Styling';

function App() {
  const [serverResponse, setServerResponse] = useState({});
  const today = new Date().toISOString().slice(0, 10); // '2020-06-23'
  const [selectedDate, setSelectedDate] = useState(today);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=DEMO_KEY' + selectedDate)
      .then(resp => {
        console.info(resp);
        setServerResponse(resp);
      })
      .catch(e => console.error(e))
  }, [selectedDate]);

  return (
    <>
      <h1>Astronomy Picture of the Day</h1>
      {
        serverResponse.data === undefined
        ? <h2>Loading…</h2>
        : <PictureBundle data={serverResponse.data} />
      }
      <div className='date-picker'>
        <div>Pick a different date, get a different image:</div>
        <input type='date' value={today} onChange={ e => setSelectedDate(e.target.value) } />
      </div>
    </>
  );
}

export default App;
