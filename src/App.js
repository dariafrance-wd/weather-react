import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {" "}
          <Weather defaultCity="Kyiv" />
          <p className="source">
            <a
              href="https://github.com/dariafrance-wd/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Open-source{" "}
            </a>{" "}
            code, by Daria Samoilenko from She Codes
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
