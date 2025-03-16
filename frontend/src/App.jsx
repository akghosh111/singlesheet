import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing ";
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}>
        
        </Route>
      </Routes>
    </BrowserRouter>
          
    </>
  )
}

export default App
