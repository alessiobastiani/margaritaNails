import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar1 from "./components/Navbar1"
import Home from "./components/Home"
import ServicioPage from "./components/ServicioPage"

function App() {


  return (
    <BrowserRouter>
        <Navbar1/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/servicios" element={<ServicioPage />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
