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
import User from "./components/router/User";
import NewBooks from "./components/router/newbooks";
import OldBooks from "./components/router/oldbooks";
import Cat1Books from "./components/router/cat1Book";
import Login from "./components/router/login";
import DashBoard from "./components/router/dashboard";
import UserData from "./components/CRUD/httpData";


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
              <li><Link to="/user/1">User Page 1</Link></li>
              <li><Link to="/user/2">User Page 2</Link></li>
              <li><Link to="/books/new-books">New Books</Link></li>
              <li><Link to="/books/old-books">Old Books</Link></li>
              <li><Link to="/books/new-books/cat1">New Book(Category 1)</Link></li>
              <li><Link to="login">Login</Link></li>
            </ul>
          <Routes>
            <Route path="/" element={<GuessTheNumber/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/user/:id" element={<User />}/>
            <Route path="/books">
              <Route  path="new-books" element={<NewBooks/>}/>
              <Route  path="new-books">
                <Route path="cat1" element={<Cat1Books/>}/>
              </Route>
              <Route  path="old-books" element={<OldBooks/>}/>
            </Route>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
          </Routes>
        </BrowserRouter> 
        {/* <GuessTheNumber/>  */}
        {/* <Counter/> */}
        <UserData/>
      </div>
    );
  }

export default App;
