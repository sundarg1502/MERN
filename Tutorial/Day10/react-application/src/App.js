// import logo from './logo.svg';
import './App.css';
import FormHandling from "./components/form"
import Mouse from './components/mouseTracker';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"im> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      {/* </header> */}

        <FormHandling />
        {/* <div>
          <Mouse render={((position)=>(
            <p>Mouse Position : {position.x},{position.y}</p>
  ))}/>
        </div> */}
        
    </div>
  );
}

export default App;
