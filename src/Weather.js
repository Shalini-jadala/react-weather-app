import React, { useState} from "react";
import axios from "axios";
import "./Weather.css";
import DisplayDate from "./DisplayDate";


export default function Weather(props){
   
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response){
    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        date: new Date(response.data.time * 1000),
        iconUrl: "https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg",
        wind: response.data.wind.speed,
        city: response.data.city
    });

    }

    if (weatherData.ready){
 return(
        <div className="Weather">
            <form>
                <div className="row">
                       <div className="col-8">
                         <input type="search" 
                         placeholder="Enter a city name.."
                         className="long-button w-100" autoFocus="on"/>
                       </div>
                       <div className="col-4">
                           <input type="submit" 
                            value="Search" 
                            className="btn btn-primary w-100" />
                       </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <DisplayDate date={weatherData.date} />
                </li>
                <li>{weatherData.discription}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="d-flex align-items-center">
                        <img src={weatherData.iconUrl}
                        alt={weatherData.description}/>
                        
                           <span className="temperature">{Math.round(weatherData.temperature)}</span>
                           <span className="units">°C</span>
                        
                    </div>
                </div>
                <div className="col-6">
                 <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/hr</li>
                </ul>   
                </div>

            </div>
        </div>

    );       

    } else{
let apiKey = "0a8c6e7ct4a98df4436abe8fo0c14f17";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return "Loading....";
    }
}
