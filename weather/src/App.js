import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form';

function App() {
  
  
  

  const getWeatherByZip = (input) =>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${input},us&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res =>{
      console.log("RESULTS BY ZIP:")
      console.log("CITY_NAME:",res.data.name)
      console.log("CURRENT WEATHER:",res.data.weather[0].main)
      console.log("DESCRIPTION:",res.data.weather[0].description)
      console.log("CURRENT DT: (datetime)",res.data.dt)
    })
    .catch(err =>{
      console.log("Error loading by Zip",err)
    })
  }
  const getWeatherByName = (input) =>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input},us&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res =>{
      console.log("RESULTS BY NAME:")
      console.log("CITY_NAME:",res.data.name)
      console.log("CURRENT WEATHER:",res.data.weather[0].main)
      console.log("DESCRIPTION:",res.data.weather[0].description)
      console.log("CURRENT DT: (datetime)",res.data.dt)
    })
    .catch(err =>{
      console.log("Error loading by Name",err)
    })
  }


  return (
    <div className="App">
      <h1>Weather</h1>
      <Form getWeatherByZip = {getWeatherByZip} getWeatherByName={getWeatherByName}/>
      
    </div>
  );
}

export default App;
