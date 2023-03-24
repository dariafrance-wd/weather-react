import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {" "}
          <Weather />
        </div>
      </header>
    </div>
  );
}

export default App;
