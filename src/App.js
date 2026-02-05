
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Australia"/>
        <footer>
          This project is coded by Shalini.J 
          open sourced in Github and hosted by Netlify
        </footer>
      </div>
    </div>
  
  );
}

export default App;
