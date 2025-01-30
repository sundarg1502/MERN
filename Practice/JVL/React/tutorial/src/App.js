// // import logo from './logo.svg';
// import './App.css';
// import Car from './components/cars';
// import Garage from './components/garage';
// import Header from "./components/header"
// import ModuleStyling from './components/module';

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
import FavouriteColor from "./components/favColor";

function App() {
    return (
      <div className="App">
        <FavouriteColor/>
      </div>
    );
  }

export default App;
