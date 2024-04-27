import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Scrap from "./pages/Scrap"
import Items from "./pages/Items"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scrap" element={<Scrap />} />
        <Route path="/items" element={<Items />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
