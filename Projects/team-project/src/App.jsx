// import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
// import SignUp from './components/signup'
// import Signin from "./components/signin"

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes> */}
      <NavBar/>
      <Home/>
    </>
  )
}

export default App
