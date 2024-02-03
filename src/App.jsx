import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/home";
import Test from "./assets/test";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/test" element={<Test/>}/>
          <Route exact path="/hero" element={<Hero/>}/>
          <Route exact path="/landing" element={<Landing/>}/>
          <Route exact path="/Profile" element={<Profile/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
