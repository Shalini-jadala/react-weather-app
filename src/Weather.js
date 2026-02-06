import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";



export default function Weather(props){
   
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        date: new Date(response.data.time * 1000),
        icon: response.data.condition.icon,
        wind: response.data.wind.speed,
        city: response.data.city
    });

    }

   
    function handleSubmit(event){
        event.preventDefault();
        Search();

    }

    function handleCityChange(event){
        setCity(event.target.value);


    }
 function Search(){
        let apiKey = "0a8c6e7ct4a98df4436abe8fo0c14f17";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        

    }

    if (weatherData.ready){
 return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                       <div className="col-8">
                         <input type="search" 
                         placeholder="Enter a city name.."
                         className="long-button w-100" autoFocus="on"
                         onChange={handleCityChange}/>
                       </div>
                       <div className="col-4">
                           <input type="submit" 
                            value="Search" 
                            className="btn btn-primary w-100" />
                       </div>
                </div>
            </form>
            <WeatherInfo data = {weatherData} />
            
        </div>

    );       

    } else{
        Search();
        return "Loading....";
    }
}
