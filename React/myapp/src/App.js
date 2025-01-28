// import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import Gretings from "./components/greeting";
import Grid from './components/grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gretings/>
        <Counter/>
        <Grid/>
      </header>
    </div>
  );
}

export default App;
