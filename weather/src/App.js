import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [input,setInput] = useState({cityName:"",city_zip:""})
  

  const getWeather = (zip) =>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res =>{
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }

  useEffect(() => {
    getWeather(12189)
  }, [])
  
  return (
    <div className="App">
      <h1>Weather</h1>
    </div>
  );
}

export default App;
