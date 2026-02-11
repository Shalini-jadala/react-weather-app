import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props){
function maxTemperature(){
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
}

function minTemperature(){
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}°`;
}


function day(){
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];

    return day;
}



    return(
    <div>
           <div className="Forecast-day">{day()}</div>
               <WeatherIcons code={props.data.condition.icon} size={35} />
                <div className="Forecast-temp">
                    <span className="Temp-max">{maxTemperature()}</span> 
                    <span className="Temp-min">{minTemperature()}</span>
                </div>
    </div>
    );
}