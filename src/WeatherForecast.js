
import "./WeatherForecast.css";
import axios  from "axios";
import { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){
  let [itsReady, setItsReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setItsReady(false);
     }, [props.coordinates])


    function handleResponse(response){
    setForecast(response.data.daily);
    setItsReady(true);
    }


    if (itsReady)
        { 
            
            return (
      <div className="WeatherForecast">
          <div className="row">
            {forecast.map(function(dailyForecast, index){
                if (index < 5 ) {
                return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
                );
            }
            return(null);
            })}
               
                

          </div>

      </div>
    );
   } else {
    let apiKey = "0a8c6e7ct4a98df4436abe8fo0c14f17";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;


    axios.get(apiUrl).then(handleResponse);
    return "Loading Forecast...";
   
       
    
    }

    
    
        
    
    


    
}