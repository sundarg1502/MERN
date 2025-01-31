// import logo from './logo.svg';
import './App.css';
// import Cars from './components/car';
// import React,{useState} from 'react';
import {MyProvider,useMyContext} from './components/UseContext';
// import FormHandling from "./components/form"
// import Mouse from './components/mouseTracker';
// import USeRefExample from './components/useRef';

const DisplayMessage = ()=>{
  const message = useMyContext();
  return <h1>{message}</h1>
};

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

        {/* <FormHandling /> */}
        {/* <div>
          <Mouse render={((position)=>(
            <p>Mouse Position : {position.x},{position.y}</p>
  ))}/>
        </div> */}

        {/* <USeRefExample/> */}
  <div>
    Sample Code
  </div>
        {/* <Cars/> */}
        <MyProvider>
          <div>
            <DisplayMessage />
          </div>
        </MyProvider>
        
    </div>
  );
}


export default App;
