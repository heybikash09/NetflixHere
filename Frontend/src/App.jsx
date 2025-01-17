import { Route, Routes } from "react-router-dom"
import LandingPage from "./Landingpage/LandingPage"
import Signup from "./Authentication/Signup"
import Login from "./Authentication/Login"
import Home from "./HomePage/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="signin" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>
    </Routes>
  )
}

export default App
