import React from "react";
import "./Weather.css";

export default function Weather(){
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
            <h1>Australia</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Sunny</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                        <img src="https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg" 
                        alt="Mostly Sunny" />
                        <div className="float-left">
                           <span className="temperature">25</span>
                           <span className="units">°C</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                 <ul>
                    <li>Precipitation: 25%</li>
                    <li>Humidity: 75%</li>
                    <li>Wind: 25km/hr</li>
                </ul>   
                </div>

            </div>
        </div>

    );
}