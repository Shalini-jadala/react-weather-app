
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcons({code, size}) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG"
  };
if (!code) return null;

  return (
    <ReactAnimatedWeather
      key={code}
      icon={codeMapping[code] || "CLOUDY"}
      color="rgba(221, 133, 133,)"
      size={size}
      animate
      />
    
  );
}
