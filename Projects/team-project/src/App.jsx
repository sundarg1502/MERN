import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Deals from './components/Deals'
// import Farmer from './components/Farmer'
// import Hero from './components/Hero'/
import Home from './components/Home'
// import NavBar from './components/NavBar'
import SignUp from './components/signup'
import Signin from "./components/signin"
import FavouriteItems from './components/FavouriteItems'
// import Hero from './components/Hero'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/fav" element={<FavouriteItems/>}/>
      </Routes> 
      {/* <Hero/> */}
      {/* {/* <NavBar/>
      <Home/>
      <Hero data={category}/>
      <Deals/>
      <Farmer/> */}
    </>
  )
}

export default App
