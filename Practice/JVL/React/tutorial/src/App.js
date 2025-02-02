// // import logo from './logo.svg';
// import './App.css';
// import Car from './components/cars';
// import Garage from './components/garage';
// import Header from "./components/header"
// import ModuleStyling from './components/module';

// import { BrowserRouter, Route } from "react-router-dom";
import Counter from "./components/counter";
import GuessTheNumber from "./components/Guess";

// ================== Basic in Reac ===================================

// function App() {
//   // const carObj = {name:"Audi",color:"Red"}
//   const carObj = {} // Null for testing conditional rendering
//   const doorStatus = true
//   const showCars = carObj.name !== undefined && carObj.color !== undefined 
//   const carList = [
//     {name : "BMW" ,color:"Red"},
//     {name : "Audi" ,color:"Black"},
//     {name : "Tesla" ,color:"White"},
//   ]

//   // Example for non-object lists
//   const numberList = [
//     1,2,3,3,4,5,3,5
//   ]

//   return (
//     <div className="App">
//       <Header/>
//         {/* { showCars ?<Car carObj={carObj} /> : null}*/}  {/* Ternary Operatopr - One Type of Approach*/}
//         {/* Another Type of approach (AND &&) */}
//         {showCars && <Car carObj={carObj}/>}
//         <Garage/>
//         { doorStatus ? <h2> Garage Door Opend</h2> : <h1>Door Closed</h1>}

//         <h1>Car Lists</h1>
//         <ul>
//           {/* Approach 1 => plain list */}
//           {/* {carList.map((car)=><li>{car.name} | {car.color}</li>)} */}

//           {/* Approach 2 => Using a Component */}
//           {carList.map((car)=> <li key={carObj.brand}><Car carObj={car}/></li>)}
//         </ul>

//         {/* Handling list elements Key Value */}
//         <ul>
//           {numberList.map((number,index)=><li key={index}>{number}</li>)}
//         </ul>

//         <ModuleStyling/>
//     </div>
//   );
// }

// export default App;


// ======================== State in React ==================================
// import FavouriteColor from "./components/favColor";
// import FormHandling from "./components/form";
// import FormHandling from "./components/form";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"


function App() {
    return (
      <div className="App">
        {/* <FavouriteColor/> */}  
        {/* <FormHandling/> */}
        {/* <GuessTheNumber/> */}
         <BrowserRouter>
            <ul>
              <li><Link to="/">Guess The Number</Link></li>
              <li><Link to="/counter">Counter</Link></li>
            </ul>
          <Routes>
            <Route path="/" element={<GuessTheNumber/>}/>
            <Route path="/counter" element={<Counter/>}/>
          </Routes>
        </BrowserRouter> 
        {/* <GuessTheNumber/>  */}
        {/* <Counter/> */}
      </div>
    );
  }

export default App;
