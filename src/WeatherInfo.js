import React from "react";
import DisplayDate from "./DisplayDate";


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
                            <img src={props.data.iconUrl}
                            alt={props.data.description}/>
                            
                            
                               <span className="temperature">{Math.round(props.data.temperature)}</span>
                               <span className="units">°C</span>
                            
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