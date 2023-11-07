import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar1 from "./components/Navbar1"
import Home from "./components/Home"
import ServicioPage from "./components/ServicioPage"
import Footer from "./components/Footer"
import PageNosotros from "./components/PageNosotros"

function App() {


  return (
    <BrowserRouter>
        <Navbar1/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/servicios" element={<ServicioPage />} />
        <Route path="/conocenos" element={<PageNosotros/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
