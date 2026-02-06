
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Australia"/>
        <footer>
          This project is coded by <a href="https://github.com/Shalini-jadala" className="links"> Shalini.J</a>{" "}
          open sourced in <a href="https://github.com/Shalini-jadala/react-weather-app" className="links"> Github</a> and hosted by<a href=" " className="links">{" "}Netlify</a> 
        </footer>
      </div>
    </div>
  
  );
}

export default App;
