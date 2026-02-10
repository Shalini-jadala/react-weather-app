import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";
import axios  from "axios";

export default function WeatherForecast(props){

    


    function handleResponse(response){
        console.log(response.data);

    }

    let apiKey = "0a8c6e7ct4a98df4436abe8fo0c14f17";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=-${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;


    axios(apiUrl).then(handleResponse);
    
    
        
    
    return(


    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="Forecast-day">Thus</div>
                <WeatherIcons code="clear-sky-day" size={35} />
                <div className="Forecast-temp">
                      <span className="Temp-max">19°</span> 
                      <span className="Temp-min">10°</span>
                </div>

            </div>

        </div>

    </div>
    );


    
}