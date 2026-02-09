import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    return(
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="Forecast-day">Thus</div>
                <WeatherIcons code="01d"  />
                <div className="Forecast-temp">
                      <span className="Temp-max">19°</span> 
                      <span className="Temp-min">10°</span>
                </div>

            </div>

        </div>

    </div>
    );

    
}