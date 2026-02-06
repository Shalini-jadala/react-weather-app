import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemp from "./WeatherTemp";


export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
                <ul>
                    <li>
                        <DisplayDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center pt-3">
                               <WeatherIcons code = {props.data.icon} 
                                />
                            </div>
                            <div >
                            <WeatherTemp celsius={props.data.temperature} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                     <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/hr</li>
                    </ul>   
                    </div>
    
                </div>
     </div>
    );
}