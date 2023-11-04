import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar1 from "./components/Navbar1"
import Home from "./components/Home"
import ServicioPage from "./components/ServicioPage"
import Footer from "./components/Footer"

function App() {


  return (
    <BrowserRouter>
        <Navbar1/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/servicios" element={<ServicioPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
