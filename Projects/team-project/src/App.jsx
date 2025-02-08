// import { Route, Routes } from 'react-router-dom'
import './App.css'
import Deals from './components/Deals'
import Farmer from './components/Farmer'
import Hero from './components/Hero'
import Home from './components/Home'
import NavBar from './components/NavBar'
// import SignUp from './components/signup'
// import Signin from "./components/signin"

function App() {
  const category = [
    {
      id:1,
      name:"Cool Drinks",
      quantity:"200",
      img:"ct1"
    },{
      id:2,
      name:"Bakery",
      quantity:"100",
      img:"ct2"
    },{
      id:3,
      name:"Vegetables",
      quantity:"400",
      img:"ct3"
    },{
      id:4,
      name:"Fruits",
      quantity:"20",
      img:"ct4"
    },
  ]
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes> */}
      <NavBar/>
      <Home/>
      <Hero data={category}/>
      <Deals/>
      <Farmer/>
    </>
  )
}

export default App
