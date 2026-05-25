import { Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CochesVenta from './components/CochesVenta'
import Footer from './components/Footer'
import Legal from './pages/Legal'

import Peugeot308 from './pages/coches/Peugeot308'
import BmwX6 from './pages/coches/BmwX6'
import SeatAteca from './pages/coches/SeatAteca'
import AudiA3 from './pages/coches/AudiA3'
import MercedesClaseA from './pages/coches/MercedesClaseA'
import VolkswagenGolf from './pages/coches/VolkswagenGolf'

import PorQueMarca from './components/PorQueMarca'

import CodigoDescuento from './pages/CodigoDescuento'

const Home = () => (
  <>
    <div className="relative">
      <Navbar />
      <Hero />
    </div>

    <CochesVenta />
    <PorQueMarca />
    <Footer />
  </>
)

function App() {
  return (
    <main className="bg-white text-black">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/coches/peugeot-308" element={<Peugeot308 />} />
        <Route path="/coches/bmw-x6" element={<BmwX6 />} />
        <Route path="/coches/seat-ateca" element={<SeatAteca />} />
        <Route path="/coches/audi-a3" element={<AudiA3 />} />
        <Route path="/coches/mercedes-clase-a" element={<MercedesClaseA />} />
        <Route path="/coches/volkswagen-golf" element={<VolkswagenGolf />} />
        <Route path="/codigo-descuento" element={<CodigoDescuento />} />

        <Route
          path="/legal"
          element={
            <>
              <Navbar />
              <Legal />
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  )
}

export default App