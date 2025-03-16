import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing ";
import Navbar from "./components/Navbar";
import { SignIn } from "./Pages/Signin";

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}>
        <Route path="/signin" element={<SignIn/>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
          
    </>
  )
}

export default App
