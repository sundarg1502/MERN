import logo from './logo.svg';
import './App.css';
import Car from './components/cars';

function App() {
  const carObj = {name:"Audi",color:"Red"}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Car carObj={carObj} />
      </header>
    </div>
  );
}

export default App;
