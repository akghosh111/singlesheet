import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing ";

function App() {
  

  return (
    <>
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
